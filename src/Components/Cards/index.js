import React from "react";
import GroupIcon from "@mui/icons-material/Group";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import "./style.css";

function Header() {
  return (
    <div className="main">
      {[
        { text: "Total Students", number: 12442, icon: GroupIcon },
        { text: "Graduates", number: 3513, icon: SchoolIcon },
        { text: "Total Staff", number: 1400, icon: PersonIcon },
        { text: "Campuses", number: 6, icon: AccountBalanceIcon },
      ].map((e, i) => (
        <div key={i} className="card">
          <e.icon
            className="icon"
            style={{ height: "3.5vw", width: "3.5vw" }}
          />
          <p className="number">{e.number}</p>
          <p className="text">{e.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Header;
