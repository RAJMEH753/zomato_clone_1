import React from "react";
import axios from "axios";
import queryString from "query-string";
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../Style/detailPage.css';

const customStyles = {
    overlay:{
        backgroundColor: "rgba(0,0,0,0.8)"
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

class Details extends React.Component{
    constructor(){
        super();
        this.state = {
            restaurant: [],
            resId: undefined,
            galleryModal: false
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

    // For Modal
    handleModal = (state, value) => {
        this.setState({ [state]: value });
    }

    render(){
        const { restaurant, galleryModal } = this.state;
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
                        <input type="button" value="Click to see Image Gallery" className="gallery_button" onClick={() => this.handleModal('galleryModal', true)} />
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
                
                <Modal
                    isOpen={galleryModal}
                    style={customStyles}
                >
                    <div onClick={() => this.handleModal('galleryModal', false)} className="close"><i class="bi bi-x-lg"></i></div>
                    <div>
                        <Carousel showIndicators={false} showThumbs={false} showStatus={false}>
                            <div>
                                <img src={restaurant.thumb} className="gallery_img" />
                            </div>
                        </Carousel>
                    </div>
                </Modal>

            </div>
        )
    }
}

export default Details;