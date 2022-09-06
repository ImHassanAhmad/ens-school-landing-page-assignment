import React from "react";
import Opt from "../../assets/opt.jpg";
import "./style.css";

function Header() {
  return (
    <div
      className="employment"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(24,128,133,0.5), rgb(24,128,133,0.5)),url(${Opt})`,
      }}
    >
      <div className="button">
        <p className="textButton">Employment Opportunities</p>
      </div>
    </div>
  );
}

export default Header;
