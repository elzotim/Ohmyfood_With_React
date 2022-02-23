import React from "react";
import Link from "./Link.js";
import "./Links.scss"

const Links = () => {
  return (
    <div className="footer__bloc-links">
      <Link title="Proposer un restaurant" icon="fas fa-utensils" />
      <Link title="Devenir partenaire" icon ="fas fa-hands-helping" />
      <Link title="Mentions légales" />
      <Link title="Contact" />
    </div>
  );
};

export default Links;
