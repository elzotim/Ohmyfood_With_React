import React from "react";
import "./Arrow.scss";
import { Link } from "react-router-dom";


const Arrow = (props) => {
    return (
        <div className="header__arrow-back">
            <Link to="/">
                <i className="fas fa-arrow-left"></i>
            </Link>
        </div>
    );
};

export default Arrow;
