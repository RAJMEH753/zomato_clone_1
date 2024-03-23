import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

const navHook = (Component) => {
    return(props) => {
        const navigate = useNavigate();
        return <Component navigate={navigate} {...props} />
    }
}

export default navHook;