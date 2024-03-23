import React from "react";
import axios from "axios";
import navHook from "./nav";

class Banner extends React.Component{
    constructor(){
        super();
        this.state ={
            restaurant: [],
            inputText: undefined, 
            suggestion: []
        }
    }

    handleLocation = (e) => {
        const location = e.target.value;
        //sessionStorage.setState('location', location);

        axios({
            url: `http://localhost:5500/rest/${location}`,
            method: 'get',
            headers: { 'Content-Type': 'application/JSON'}
        })
        .then( res => {
            this.setState({ restaurant: res.data.restaurants })
        })
        .catch((err => console.log(err)))

    }

    handleInput = (event) => {
        const { restaurant } = this.state;
        const inputText = event.target.value;

        let suggestion = [];

        suggestion = restaurant.filter(item => item.name.toLowerCase().includes(inputText.toLowerCase()));
        this.setState({ inputText, suggestion });
    }

    showSuggestion = () => {
        const { inputText, suggestion } = this.state;

        if(suggestion.length == 0 && inputText == undefined){
            return null;
        }

        if(suggestion.length > 0 && inputText == ''){
            return null;
        }

        if(suggestion.length == 0 && inputText){
            return (
                <li>No Results Found !!</li>
            )
        }

        return(
            suggestion.map((item, index) => (
                <li key={index} className="suggList" onClick={() => this.selectRestaurant(item._id)}>
                    <img src={ item.thumb } className="suggImg" />         {/* restaurant image */}
                    <span className="suggName">{item.name}</span>   {/* restaurant name */}
                    <span className="suggLoc">{item.address}</span>   {/* restaurant Location */}

                </li>
            ))
        )
    }

    selectRestaurant = (ss) => {
        this.props.navigate(`/details?restuarant=${ss}`);
    }

    render(){
        const { locationData } = this.props

        // console.log(locationData);
        return(
            <div>
                {/* <!--Banner Part (upper part)--> */}

                <div class="bg-cover bg-image d-flex">
                    <div class="container mt-3">
                        <div class="row">
                            <div class="col text-end">
                                <button type="button" class="btn btn-outline-light">Login</button>
                                <button type="button" class="btn btn-outline-light">Create an account</button>
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col d-flex justify-content-center">
                                <div class="text-danger circle">
                                    <h2 class="logo">e!</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col d-flex justify-content-center">
                                <h3 class="text-light line">Find the best restaurants, cafés, and bars</h3>
                            </div>
                        </div>
                        <div class="row mt-3 d-flex justify-content-center">
                            <div class="col selectbar">
                                <select class="form-control input1 py-2" onChange={this.handleLocation}>
                                    <option value="0" disabled selected>Please type a location</option>
                                    {
                                        locationData?.map((item) => {
                                            return(
                                                <option value={item.city_id}>{item.name}</option>
                                            )
                                        })
                                    }

                                </select>
                            </div>
                            <div class="col input-group searchbar">
                                <i class="input-group-text bi bi-search input2"></i>
                                <input type="text" class="form-control input2 py-2" placeholder="Search for restaurants" onChange={this.handleInput} />

                                {/* Suggestion Box */}
                                <ul className="suggestionBox">{this.showSuggestion()}</ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default navHook(Banner);