import React from 'react';
import Hearth from '../../../Reusable/hearth/Hearth';
import "./RestaurantName.scss"

const RestaurantName = ({children}) => {
    return (
        <div className="menu__header">
           <h2 className="menu__header__title">{children}</h2> 
           <div className="menu__header__heart">
               <Hearth />
           </div>
        </div>
    );
};

export default RestaurantName;