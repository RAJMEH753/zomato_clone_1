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

                <div className="container">
                    <div className="bannerCover">
                        <img src={restaurant.thumb} className="banner" />
                    </div>

                    <h2 className="heading mt-4">{restaurant.name}</h2>

                    <div>
                        <input type="button" className="btn btn-danger order_button" value="Place Online Order" />
                    </div>

                    {/* TABS */}
                    <div className="tabs">
                        <div className="tab">
                            <input type="radio" className="" id="tab-1" name="tab-group" checked />
                            <label htmlFor="tab-1">Overview</label>

                            <div className="content">
                                <div className="about">About this place</div>

                                <div className="head">Cuisine</div>
                                <div className="value">
                                    {restaurant && restaurant.Cuisine && restaurant.Cuisine.map(cu => `${cu.name}, `)}
                                </div>

                                <div className="head">Average Cost</div>
                                <div className="value">₹{restaurant.cost} for two people (approx.)</div>
                            </div>
                        </div>

                        <div className="tab ms-4">
                            <input type="radio" className="" id="tab-2" name="tab-group" />
                            <label htmlFor="tab-2">Contact</label>

                            <div className="content">

                                <div className="value">Phone Number</div>
                                <div className="value-red">+91 {restaurant.contact_number}</div>

                                <div className="head">{restaurant.name}</div>
                                <div className="value">{restaurant.address}</div>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
        )
    }
}

export default Details;