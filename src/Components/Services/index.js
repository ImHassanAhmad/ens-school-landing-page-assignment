import React from "react";
import Service from "../../assets/service.jpg";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PaymentIcon from "@mui/icons-material/Payment";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import "./style.css";

function Header() {
  return (
    <div
      className="services"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(24,128,133,0.5), rgb(24,128,133,0.5)),url(${Service})`,
      }}
    >
      <p className="titleService">ENS Online Services</p>
      <div className="mainService">
        {[
          { text: "Enroll Now", icon: InsertDriveFileIcon },
          { text: "Online Payment", icon: PaymentIcon },
          { text: "Re-registration", icon: LaptopChromebookIcon },
          { text: "Help", icon: HelpOutlineIcon },
        ].map((e, i) => (
          <div key={i} className="card">
            <e.icon
              style={{
                height: "2.1vw",
                width: "2.1vw",
                minHeight: "20px",
                minWidth: "20px",
              }}
            />
            <p className="textService">{e.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
