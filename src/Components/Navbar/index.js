import React, { Fragment } from "react";
import Logo from "../../assets/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";
import CallIcon from "@mui/icons-material/Call";
import "./style.css";

function Navbar(props) {
  return (
    <Fragment>
      <div className="navbar">
        <img src={Logo} alt="Emirates National School" className="mainLogo" />
        {props.windowDimensions && props.windowDimensions.width <= 780 ? (
          <MenuIcon className="menu" />
        ) : (
          <div className="links">
            {[
              "Home",
              "About",
              "Academics",
              "Admissions",
              "Parent Guide",
              "Campus Life",
              "Contact",
              "Carrers",
            ].map((n, i) => (
              <a key={i} className="textHeader" href="/">
                {n}
              </a>
            ))}
          </div>
        )}
      </div>
      {props.windowDimensions && props.windowDimensions.width >= 520 ? (
        <div className="socials">
          {[
            { icon: FacebookIcon, calss: "fb" },
            { icon: InstagramIcon, calss: "ig" },
            { icon: TwitterIcon, calss: "tw" },
            { icon: YouTubeIcon, calss: "yt" },
            { icon: LinkedInIcon, calss: "ln" },
            { icon: CallIcon, calss: "cl" },
          ].map((e, i) => (
            <e.icon className={e.calss} key={i} />
          ))}
        </div>
      ) : null}
    </Fragment>
  );
}

export default Navbar;
