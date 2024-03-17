import React from "react";

class Banner extends React.Component{
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
                                <select class="form-control input1 py-2">
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
                                <input type="text" class="form-control input2 py-2" placeholder="Search for restaurants" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Banner;