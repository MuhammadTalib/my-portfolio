import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

import mypic from "../Images/mypic.jpg";

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar-main">
        <div className="image-back">
          <div
            className="sidebar-image"
            style={{ backgroundImage: `url(${mypic})` }}
          ></div>
        </div>
        <div className="my-name">Muhammad Talib Waseem</div>
        <div className="ShortDesc"> Software Developer </div>
        <div className="email ShortDesc"> {"talibwaseem135@gmail.com"} </div>

        {/* <div className="Links">
                <div onClick={()=>{window.open('https://github.com/MuhammadTalib', "_blank")}} className="icon-btn" style={{ backgroundImage : `url(${github})` }}></div>
                <div onClick={()=>{window.open('https://www.facebook.com/talib.waseem.18', "_blank")}}className="icon-btn" style={{ backgroundImage : `url(${facebook})` }}></div>
                <div onClick={()=>{window.open('https://medium.com/@talibwaseem135', "_blank")}} className="icon-btn" style={{ backgroundImage : `url(${medium})` }}></div>
                <div onClick={()=>{window.open('https://www.linkedin.com/in/muhammadtalib/', "_blank")}} className="icon-btn" style={{ backgroundImage : `url(${linkedin})` }}></div>
                <div onClick={()=>{window.open('https://twitter.com/MuhammadTalibW1', "_blank")}} className="icon-btn" style={{ backgroundImage : `url(${twitter})` }}></div>
            </div> */}
        <div className="side-Navs">
          <div className="nav">
            <i className="material-icons nav-icon">help</i>
            <Link className="menubtn" to={"/my-portfolio/about"}>
              About
            </Link>
          </div>
          <div className="nav">
            <i className="material-icons nav-icon">text_snippet</i>
            <Link className="menubtn" to={"/my-portfolio/projects"}>
              Projects
            </Link>
          </div>
          <div className="nav">
            <i className="material-icons nav-icon">call</i>
            <Link className="menubtn" to={"/my-portfolio/contactme"}>
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
