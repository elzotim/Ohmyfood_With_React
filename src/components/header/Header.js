import React from "react";
import Logo from "./logo/Logo";
import Arrow from "./arrow/Arrow";
import "./Header.scss";

const Header = (props) => {
    const {arrowShow} = props;
  return (
    <header>
      <div className="header">
          {arrowShow && <Arrow />}
        <Logo />
      </div>
    </header>
  );
};

export default Header;
