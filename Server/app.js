const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const route = require("./Route/index");
const dotenv = require("dotenv");
const passport = require("passport");
const cookieSession = require("cookie-session");

const PORT = 5500;
// const HOSTNAME = "localhost";
const paymentRoute = require("./Controller/payment");
const authRoute = require("./Controller/auth");
const passportSetup = require("./Controller/passport");

const corsOptions = {
    origin: process.env.REACT_URL,
    methods: "GET,POST,PUT,DELETE, PATCH",
    credentials: true,
    optionSuccessStatus: 200,
    allowedHeaders: "X-Requested-With,content-type, x-token, Access-Control-Allow-Credentials"
}

dotenv.config();

// Request Management
const app = express();

app.use(cookieSession({ name: "session", keys:["edureka"], maxAge: 24*60*60*1000 }))

app.use(express.json());        // A body Parser Required to post a data
app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));
app.use('/', route);
app.use('/api/payment/', paymentRoute);
app.use('/auth', authRoute);

// DB
const MongoAtlas = process.env.MONGO_URL

mongoose.connect(MongoAtlas, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})
    .then(res => {
        app.listen(PORT, () => {        // Remove HOSTNAME
            console.log(`Server is running at ${PORT}`)
        });
    })
    .catch(err => console.log(err));
