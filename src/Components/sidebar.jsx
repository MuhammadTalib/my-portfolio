import React from "react";
import { Link } from "react-router-dom";
import sidebarImage from "../Images/sidebarback.png";
import "./style.css";
const Sidebar = ({ myInfo: { avatar_url, name, bio } }) => {
  return (
    <div
      className="sidebar-main"
      style={{
        height: "100vh",
        backgroundImage: `url(${sidebarImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="image-back">
        <div
          className="sidebar-image"
          style={{ backgroundImage: `url(${avatar_url})` }}
        ></div>
      </div>
      <div className="my-name">{name}</div>
      <div className="ShortDesc">{bio} </div>
      <div className="email ShortDesc"> {"talibwaseem135@gmail.com"} </div>

      {/* <div className="Links">
        <div
          onClick={() => {
            window.open("https://github.com/MuhammadTalib", "_blank");
          }}
          className="icon-btn"
          style={{ backgroundImage: `url(${github})` }}
        ></div>
        <div
          onClick={() => {
            window.open("https://www.facebook.com/talib.waseem.18", "_blank");
          }}
          className="icon-btn"
          style={{ backgroundImage: `url(${facebook})` }}
        ></div>
        <div
          onClick={() => {
            window.open("https://medium.com/@talibwaseem135", "_blank");
          }}
          className="icon-btn"
          style={{ backgroundImage: `url(${medium})` }}
        ></div>
        <div
          onClick={() => {
            window.open("https://www.linkedin.com/in/muhammadtalib/", "_blank");
          }}
          className="icon-btn"
          style={{ backgroundImage: `url(${linkedin})` }}
        ></div>
        <div
          onClick={() => {
            window.open("https://twitter.com/MuhammadTalibW1", "_blank");
          }}
          className="icon-btn"
          style={{ backgroundImage: `url(${twitter})` }}
        ></div>
      </div> */}

      <div className="side-Navs">
        <div className="nav">
          <i className="material-icons nav-icon">help</i>
          <Link className="menubtn" to={"/"}>
            About
          </Link>
        </div>
        <div className="nav">
          <i className="material-icons nav-icon">text_snippet</i>
          <Link className="menubtn" to={"/projects"}>
            Projects
          </Link>
        </div>
        <div className="nav">
          <i className="material-icons nav-icon">call</i>
          <Link className="menubtn" to={"/contactme"}>
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
