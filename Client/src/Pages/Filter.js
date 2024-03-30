import React from "react";
import axios from "axios";
import queryString from "query-string";
import navHook from "./nav";
import '../Style/filterPage.css';

class Filter extends React.Component{
    constructor(){
        super();
        this.state ={
            loc: [],
            restaurant: [],
            Cuisine: [],
            sort: 1, 
            page: 1
        }
    }

    // Post mealtype API
    componentDidMount() {
        const q = queryString.parse(window.location.search);
        const { mealtype } = q;
        const int = parseInt(mealtype);
        
        const filterObj = {
            mealtype: int
        }

        axios({
            url: 'http://localhost:5500/filter',
            method: 'POST',
            headers: { 'Content-Type': 'application/JSON'},
            data: filterObj
        })
        .then( res => {
            this.setState({ restaurant: res.data.restaurants, mealtype: int })
        })
        .catch((err => console.log(err)))

        // GET location API
        axios({
            url: 'http://localhost:5500/location',
            method: 'get',
            headers: { 'Content-Type': 'application/JSON'}
        })
        .then( res => {
            this.setState({ loc: res.data.location })
        })
        .catch((err => console.log(err)))
    }

    // POST location API
    handleLocation = (val) => {
        const { lcost, hcost, Cuisine, sort, page, mealtype } = this.state;
        const loca = val.target.value;
        
        const filterObj = {
            location: loca,
            lcost,
            hcost,
            Cuisine,
            sort, 
            page,
            mealtype
        }

        axios({
            url: 'http://localhost:5500/filter',
            method: 'POST',
            headers: { 'Content-Type': 'application/JSON'},
            data: filterObj
        })
        .then( res => {
            this.setState({ restaurant: res.data.restaurants, loca })
        })
        .catch((err => console.log(err)))

    }

    // handle Cuisine
    handleCuisine = (i) => {
        const { loca, lcost, hcost, sort, page, mealtype } = this.state;

        let tempCuisine = this.state.Cuisine.slice();

        if(tempCuisine.indexOf(i) === -1) {
            tempCuisine.push(i);
        }else{
            tempCuisine.splice(tempCuisine.indexOf(i),1);
        }

        const filterObj = {
            location: loca,
            lcost,
            hcost,
            cuisine: tempCuisine.length > 0 ? tempCuisine : undefined,
            sort, 
            page, 
            mealtype
        }

        axios({
            url: 'http://localhost:5500/filter',
            method: 'POST',
            headers: { 'Content-Type': 'application/JSON'},
            data: filterObj
        })
        .then( res => {
            this.setState({ restaurant: res.data.restaurants, Cuisine: tempCuisine })
        })
        .catch((err => console.log(err)))
    }

    // handle Cost
    handleCost = (lcost, hcost) => {
        const { loca, Cuisine, sort, page, mealtype } = this.state;
        
        const filterObj = {
            location: loca,
            lcost,
            hcost,
            Cuisine,
            sort, 
            page, 
            mealtype
        }

        axios({
            url: 'http://localhost:5500/filter',
            method: 'POST',
            headers: { 'Content-Type': 'application/JSON'},
            data: filterObj
        })
        .then( res => {
            this.setState({ restaurant: res.data.restaurants, lcost, hcost })
        })
        .catch((err => console.log(err)))

    }

    // handle Sort
    handleSort = (sort) => {

        const { loca, Cuisine, lcost, hcost, page, mealtype } = this.state;
        
        const filterObj = {
            location: loca,
            lcost,
            hcost,
            Cuisine,
            sort, 
            page, 
            mealtype
        }

        axios({
            url: 'http://localhost:5500/filter',
            method: 'POST',
            headers: { 'Content-Type': 'application/JSON'},
            data: filterObj
        })
        .then( res => {
            this.setState({ restaurant: res.data.restaurants, sort })
        })
        .catch((err => console.log(err)))
    }

    // handle Page
    handlePage = (page) => {
        const { loca, Cuisine, lcost, hcost, sort, mealtype } = this.state;
        
        const filterObj = {
            location: loca,
            lcost,
            hcost,
            Cuisine,
            sort,
            page, 
            mealtype
        }

        axios({
            url: 'http://localhost:5500/filter',
            method: 'POST',
            headers: { 'Content-Type': 'application/JSON'},
            data: filterObj
        })
        .then( res => {
            this.setState({ restaurant: res.data.restaurants, page })
        })
        .catch((err => console.log(err)))
    }

    // Navigate
    handleNavigate= (ss) => {
        this.props.navigate(`/details?restuarant=${ss}`);
    }

    render(){
        
        const { loc, restaurant } = this.state;

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

                {/* <!--Filter Page--> */}
                <div class="container mb-5">
                    <h2 class="filter-heading mt-3">Breakfast Places in Mumbai</h2>

                    {/* <!--Filters--> */}
                    <div class="filter-box mt-2 pb-4">
                        <h5 class="filter-heading mt-2">Filters</h5>

                        <p class="filter-subheading">Select Location</p>

                        <select class="form-control selectLocation" onChange={this.handleLocation}>
                            <option value="0" disabled selected>Select Location</option>
                            {
                                        loc.map((item) => {
                                            return(
                                                <option value={item.city_id}>{item.name}</option>
                                            )
                                        })
                            }
                        </select>

                        <p class="filter-subheading mt-4">Cuisine</p>

                        <input type="checkbox" id="North_Indian" name="Cuisine" value="North Indian" onChange={() => this.handleCuisine(1)} /> <label for="North_Indian" class="filter-content">North Indian</label> <br />
                        <input type="checkbox" id="South_Indian" name="Cuisine" value="South Indian" onChange={() => this.handleCuisine(2)} /> <label for="South_Indian" class="filter-content">South Indian</label> <br />
                        <input type="checkbox" id="Chinese" name="Cuisine" value="Chinese" onChange={() => this.handleCuisine(3)} /> <label for="Chinese" class="filter-content">Chinese</label> <br />
                        <input type="checkbox" id="Fast_Food" name="Cuisine" value="Fast Food" onChange={() => this.handleCuisine(4)} /> <label for="Fast_Food" class="filter-content">Fast Food</label> <br />
                        <input type="checkbox" id="Street_Food" name="Cuisine" value="Street Food" onChange={() => this.handleCuisine(5)} /> <label for="Street_Food" class="filter-content">Street Food</label> <br />
                        
                        <p class="filter-subheading mt-4">Cost For Two</p>

                        <input type="radio" id="500" name="costfortwo" value="Less than 500" onChange={() => this.handleCost(1, 500)} /> <label for="500" class="filter-content">Less than `500</label> <br />
                        <input type="radio" id="1000" name="costfortwo" value="500 to 1000" onChange={() => this.handleCost(500, 1000)} /> <label for="1000" class="filter-content">` 500 to ` 1000</label> <br />
                        <input type="radio" id="1500" name="costfortwo" value="1000 to 1500" onChange={() => this.handleCost(1000, 1500)} /> <label for="1500" class="filter-content">` 1000 to ` 1500</label> <br />
                        <input type="radio" id="2000" name="costfortwo" value="1500 to 2000" onChange={() => this.handleCost(1500, 2000)} /> <label for="2000" class="filter-content">` 1500 to ` 2000</label> <br />
                        <input type="radio" id="2000+" name="costfortwo" value="2000+" onChange={() => this.handleCost(2000, 5000)} /> <label for="2000+" class="filter-content">` 2000+</label> <br />

                        <h5 class="filter-heading mt-4">Sort</h5>

                        <input type="radio" id="ltoh" name="Sort" value="Price low to high" onClick={() => this.handleSort(1)} /> 
                            <label for="ltoh" class="filter-content">Price low to high</label> <br />
                        <input type="radio" id="htol" name="Sort" value="Price high to low" onClick={() => this.handleSort(-1)} /> 
                            <label for="htol" class="filter-content">Price high to low</label> <br />

                    </div>

                    {/* <!--Filter Result--> */}
                    <div class="result-box mt-2">
                        
                        {/* <!-- Result --> */}
                        { restaurant.length != 0 ?
                            restaurant.map((res) => {

                            return(
                                <div class="results" onClick={() => this.handleNavigate(res._id)}>
                                    <div class="d-flex">
                                        <div class="lt-box">
                                            <img src={res.thumb} alt="picture" class="img-fluid img-qs" />
                                        </div>
                                        <div class="rt-box">
                                            <h4 class="result-heading">{res.name}</h4>
                                            <p class="result-subheading">{res.city_name}</p>
                                            <p class="result-text">{res.address}</p>
                                        </div>
                                    </div>
                                    
                                    <hr style={{color: "grey;"}} />

                                    <div class="d-flex">
                                        <div class="ll-box">
                                            <p class="result-text">CUISINES:</p>
                                            <p class="result-text">COST FOR TWO:</p>
                                        </div>
                                        <div class="rl-box">
                                            <p class="result-text-blue">{res.Cuisine.map(cu => `${cu.name}, `)}</p>
                                            <p class="result-text-blue">₹{res.cost}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : <div> Sorry, No Results found... </div>} 


                        {/* <!--Pagination--> */}
                        <div class="mt-5">
                            <ul class="pagination justify-content-center">
                                <li class="page-item">
                                    <a class="page-link" href="#">
                                        <span> { '<' } </span>
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#" onClick={() => this.handlePage(1)} > 1 </a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#" onClick={() => this.handlePage(2)}>2</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#" onClick={() => this.handlePage(3)}>3</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#" onClick={() => this.handlePage(4)}>4</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#" onClick={() => this.handlePage(5)}>5</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">
                                    <span> { '>' } </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default navHook(Filter);