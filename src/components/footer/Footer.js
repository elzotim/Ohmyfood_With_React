import React from "react";
import Logo from "./Logo";
import Links from "./links/Links";
import "./Footer.scss";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bloc">
        <Logo />
        <Links />
      </div>
    </footer>
  );
};

export default Footer;
