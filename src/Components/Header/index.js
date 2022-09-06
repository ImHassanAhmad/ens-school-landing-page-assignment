import React from "react";
import Main1 from "../../assets/main_1.jpg";
import "./style.css";

function Header() {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(24,128,133,0.5), rgb(24,128,133,0.5)),url(${Main1})`,
      }}
    >
      <span className="pad">
        <p className="text1">
          REGISTRATION FOR ACADEMIC YEAR 2022-2023 IS NOW OPEN
        </p>
        <p className="text2">IS NOW OPEN</p>
      </span>
    </div>
  );
}

export default Header;
