import React from "react";
import Logo1 from "../../assets/logo_1.png";
import Logo2 from "../../assets/logo_2.png";
import Logo3 from "../../assets/logo_3.png";
import "./style.css";

function News() {
  return (
    <div className="acd">
      <p className="titleAcd">Accreditations</p>
      <div className="logoContainer">
        <img src={Logo1} alt="" className="logo1" />
        <img src={Logo2} alt="" className="logo2" />
        <img src={Logo3} alt="" className="logo3" />
      </div>
    </div>
  );
}

export default News;
