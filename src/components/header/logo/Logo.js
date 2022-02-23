import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <h1 className="header__logo">ohmyfood</h1>
    </Link>
  );
};

export default Logo;
