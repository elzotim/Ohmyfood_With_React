import React from 'react'
import "./Localisation.scss"

const Localisation = (props) => {
    return (
        <div className="location">
            <div className="location__icon">
                <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="location__city">
                <p>{props.city}</p>
            </div>
        </div>
    )
}

export default Localisation
