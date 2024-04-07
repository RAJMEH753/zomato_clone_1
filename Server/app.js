const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const route = require("./Route/index");
const dotenv = require("dotenv");

const PORT = 5500;
const HOSTNAME = "localhost";
const paymentRoute = require("./Controller/payment");

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}

dotenv.config();

// Request Management
const app = express();
app.use(express.json());        // A body Parser Required to post a data
app.use(cors(corsOptions));
app.use('/', route);
app.use('/api/payment/', paymentRoute);

// DB
const MongoAtlas = "mongodb+srv://admin:RDjBkS9LOJASnaXQ@zomato-clone-80.mpz4sy2.mongodb.net/Zomato-80?retryWrites=true&w=majority&appName=zomato-clone-80";

mongoose.connect(MongoAtlas, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})
    .then(res => {
        app.listen(PORT, HOSTNAME, () => {
            console.log(`Server is running at ${HOSTNAME}: ${PORT}`)
        });
    })
    .catch(err => console.log(err));