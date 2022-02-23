import React from 'react'
import "./Bubble.scss"

const Bubble = (props) => {
    return (
        <div className="process__step">
        <div className="process__number">{props.number}</div>
        <div className="process__icon">
          <i className={props.icon}></i>
        </div>
        <p className="process__text">{props.title} </p>
      </div>
    )
}

export default Bubble
