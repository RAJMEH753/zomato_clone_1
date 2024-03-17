import React from "react";
import '../Style/filterPage.css';

class Filter extends React.Component{
    render(){

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

                        <select class="form-control selectLocation">
                            <option value="0" disabled selected>Select Location</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Ahmedabad">Ahmedabad</option>
                            <option value="Bangalore">Bangalore</option>
                        </select>

                        <p class="filter-subheading mt-4">Cuisine</p>

                        <input type="checkbox" id="North_Indian" name="Cuisine" value="North Indian" /> <label for="North_Indian" class="filter-content">North Indian</label> <br />
                        <input type="checkbox" id="South_Indian" name="Cuisine" value="South Indian" /> <label for="South_Indian" class="filter-content">South Indian</label> <br />
                        <input type="checkbox" id="Chinese" name="Cuisine" value="Chinese" /> <label for="Chinese" class="filter-content">Chinese</label> <br />
                        <input type="checkbox" id="Fast_Food" name="Cuisine" value="Fast Food" /> <label for="Fast_Food" class="filter-content">Fast Food</label> <br />
                        <input type="checkbox" id="Street_Food" name="Cuisine" value="Street Food" /> <label for="Street_Food" class="filter-content">Street Food</label> <br />
                        
                        <p class="filter-subheading mt-4">Cost For Two</p>

                        <input type="radio" id="500" name="costfortwo" value="Less than 500" /> <label for="500" class="filter-content">Less than `500</label> <br />
                        <input type="radio" id="1000" name="costfortwo" value="500 to 1000" /> <label for="1000" class="filter-content">` 500 to ` 1000</label> <br />
                        <input type="radio" id="1500" name="costfortwo" value="1000 to 1500" /> <label for="1500" class="filter-content">` 1000 to ` 1500</label> <br />
                        <input type="radio" id="2000" name="costfortwo" value="1500 to 2000" /> <label for="2000" class="filter-content">` 1500 to ` 2000</label> <br />
                        <input type="radio" id="2000+" name="costfortwo" value="2000+" /> <label for="2000+" class="filter-content">` 2000+</label> <br />

                        <h5 class="filter-heading mt-4">Sort</h5>

                        <input type="radio" id="ltoh" name="Sort" value="Price low to high" /> <label for="ltoh" class="filter-content">Price low to high</label> <br />
                        <input type="radio" id="htol" name="Sort" value="Price high to low" /> <label for="htol" class="filter-content">Price high to low</label> <br />

                    </div>

                    {/* <!--Filter Result--> */}
                    <div class="result-box mt-2">

                        {/* <!--Result-01--> */}
                        <div class="results">
                            <div class="d-flex">
                                <div class="lt-box">
                                    <img src="./images/1.png" alt="picture" class="img-fluid img-qs" />
                                </div>
                                <div class="rt-box">
                                    <h4 class="result-heading">The Big Chill Cakery</h4>
                                    <p class="result-subheading">FORT</p>
                                    <p class="result-text">Shop 1, Plot D, Samruddhi Complex, Chincholi …</p>
                                </div>
                            </div>
                            
                            <hr style={{color: "grey;"}} />

                            <div class="d-flex">
                                <div class="ll-box">
                                    <p class="result-text">CUISINES:</p>
                                    <p class="result-text">COST FOR TWO:</p>
                                </div>
                                <div class="rl-box">
                                    <p class="result-text-blue">Bakery</p>
                                    <p class="result-text-blue">₹700</p>
                                </div>
                            </div>
                        </div>

                        {/* <!--Result-02--> */}
                        <div class="results">
                            <div class="d-flex">
                                <div class="lt-box">
                                    <img src="./images/1.png" alt="picture" class="img-fluid img-qs" />
                                </div>
                                <div class="rt-box">
                                    <h4 class="result-heading">The Bake Shop</h4>
                                    <p class="result-subheading">FORT</p>
                                    <p class="result-text">Shop 1, Plot D, Samruddhi Complex, Chincholi …</p>
                                </div>
                            </div>
                            
                            <hr style={{color: "grey;"}} />

                            <div class="d-flex">
                                <div class="ll-box">
                                    <p class="result-text">CUISINES:</p>
                                    <p class="result-text">COST FOR TWO:</p>
                                </div>
                                <div class="rl-box">
                                    <p class="result-text-blue">Bakery</p>
                                    <p class="result-text-blue">₹700</p>
                                </div>
                            </div>
                        </div>

                        {/* <!--Pagination--> */}
                        <div class="mt-5">
                            <ul class="pagination justify-content-center">
                                <li class="page-item">
                                    <a class="page-link" href="#">
                                        <span> { '<' } </span>
                                    </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                <li class="page-item"><a class="page-link" href="#">5</a></li>
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

export default Filter;