import React from "react";

const Link = (props) => {
  return (
    <div className="footer__bloc-link">
      <i className={props.icon} />
      <h3 className="footer__bloc-link__title">{props.title}</h3>
    </div>
  );
};

export default Link;