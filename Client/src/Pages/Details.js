import React from "react";
import axios from "axios";
import queryString from "query-string";
import '../Style/detailPage.css';

class Details extends React.Component{
    constructor(){
        super();
        this.state = {
            restaurant: [],
            resId: undefined
        }
    }

    componentDidMount() {
        const q = queryString.parse(window.location.search);
        const { restuarant } = q;
        //console.log(restuarant);

        axios({
            url: `http://localhost:5500/restaurants/${restuarant}`,
            method: 'get',
            headers: { 'Content-Type': 'application/JSON'}
        })
        .then( res => {
            this.setState({ restaurant: res.data.restaurants, resId: restuarant })
        })
        .catch((err => console.log(err)))
    }

    render(){
        const { restaurant } = this.state;
        return(
            <div>
                {/* <!--Navbar--> */}
                <nav class="navbar bg-danger" data-bs-theme="">
                    <div class="container">
                        <div class="navbar-brand text-danger circle">
                            <h2 class="logo">e!</h2>
                        </div>
                        <form class="d-flex nav-form">
                            <button type="button" class="btn btn-danger">Login</button>
                            <button type="button" class="btn btn-outline-light">Create an account</button>
                        </form>
                    </div>
                </nav>

                <div className="bannerCover">
                    <img src={restaurant.thumb} className="banner" />
                </div>

                    <h2>{restaurant.name}</h2>
            </div>
        )
    }
}

export default Details;