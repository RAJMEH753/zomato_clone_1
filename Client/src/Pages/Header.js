import React from "react";
import Modal from 'react-modal';
const BASE_URL = window.env.REACT_APP_BASE_URL;

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

class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            loginModal: false
        }
    }

    // For Modal
    handleModal = (state, value) => {
        this.setState({ [state]: value });
    }

    google = () => {
        window.open(`${BASE_URL}/auth/google`, "_self");
    }

    logout = () => {
        window.open(`${BASE_URL}/auth/logout`, "_self");
    }

    render(){
        const { loginModal } = this.state;
        const {user} = this.props;
        return(
            <div>            
                <div className="position-absolute end-0 me-5 z-3">

                        {console.log(user)}
                        {!user ? (
                            <form class="d-flex nav-form">
                                <button type="button" class="btn btn-danger me-2" onClick={() => {this.handleModal('loginModal', true)}}>Login</button>
                                <button type="button" class="btn btn-outline-light">Create an account</button>
                            </form>
                        ) : (
                            <form class="d-flex nav-form">
                                <img src={user.photos[0].value} className="circle" alt=" " />
                                <p className="text-white m-3">{user.displayName}</p>
                                <button type="button" class="btn btn-outline-light " onClick={this.logout}>Logout</button>
                            </form>
                        )}
                        
                <Modal
                    isOpen={loginModal}
                    style={customStyles}
                >
                    <div>
                        <h4 style={{color: "#192F60;" }} className="fw-bold d-inline">Login</h4>
                        <div onClick={() => this.handleModal('loginModal', false)} className="close"><i class="bi bi-x-lg"></i></div>
                    </div>
                    
                    <div>
                        <div className="m-5">
                            <input type="button" className="btn btn-outline-success px-4" value="GOOGLE" onClick={this.google} />
                        </div>
                    </div>
                </Modal>
                
                </div>
            </div>
        )
    }
}

export default Header;