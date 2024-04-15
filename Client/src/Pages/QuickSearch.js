import React from "react";
import navHook from "./nav";

class QuickSearch extends React.Component{

    showFilter = (ss) => {
        this.props.navigate(`/filter?mealtype=${ss}`);
    }

    render(){
        const { mealtypeData } = this.props;
        // console.log(mealtypeData)
        return(
            
            <div>
                {/* <!--Quick Searches Part (lower)--> */}

                <div class="container mt-5 mb-5">
                    <div class="row">
                        <div>
                            <h3 class="heading">Quick Searches</h3>
                            <p class="subheading">Discover restaurants by type of meal</p>
                        </div>
                    </div>

                    {/* <!--First Line--> */}
                    <div class="d-flex flex-wrap">

                        {/* <!--Items--> */}

                        {
                            mealtypeData?.map((meal) => {
                                return(
                                    <div class="d-flex box mt-4" style={{border: "1px solid greenyellow;"}} onClick={() => this.showFilter(meal._id)}>
                                        <div class="l-box">
                                            <img src={`./images/${meal.image}`} alt="images_mealtype" class="img-fluid img-qs-m" />
                                        </div>
                                        <div class="r-box">
                                            <h4 class="card-title">{meal.name}</h4>
                                            <p class="card-content">{meal.content}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default navHook(QuickSearch);