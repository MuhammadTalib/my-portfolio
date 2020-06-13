import React, { Component } from 'react';
import "./style.css"
import { IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import medium from "../Images/medium.png"
import TextField from '@material-ui/core/TextField';

class ContactMe extends Component {
    state = {  }
    render() { 
        return ( <div className="about-main">
        <div className="page-header">Contact Me</div>
        
        <div class="icon-wrapper">
            <IconButton  onClick={()=>{window.open('https://github.com/MuhammadTalib', "_blank")}}>
                <GitHubIcon className="icons" style={{color:"#000000"}}/>
            </IconButton>
            <IconButton  onClick={()=>{window.open('https://www.linkedin.com/in/muhammadtalib/', "_blank")}}>
                <LinkedInIcon className="icons" style={{color:"#0077b7"}} />
            </IconButton>
            <IconButton  onClick={()=>{window.open('https://medium.com/@talibwaseem135', "_blank")}} >
                <div className="icon-btn" style={{ backgroundImage : `url(${medium})` }}></div>
            </IconButton>
            <IconButton  onClick={()=>{window.open('https://www.facebook.com/talib.waseem.18', "_blank")}} >
                <FacebookIcon className="icons" style={{color:"#3a559f"}} />
            </IconButton>
            <IconButton  onClick={()=>{window.open('https://twitter.com/MuhammadTalibW1', "_blank")}} >
                <TwitterIcon className="icons" style={{color:"#50abf1"}} />
            </IconButton>
        </div>

        <div class="contact-form">
            <div class="email-me">Email Me</div>
            <div class="email-me-note">Drop me a line by using the form below</div>
            <TextField
                id="outlined-password-input"
                label="Your Name"
                type="name"
                autoComplete="current-password"
                variant="outlined"
                style={{width:"75%",margin:"13px"}}
            />
            <TextField
                id="outlined-password-input"
                label="Your Email"
                type="email"
                autoComplete="current-password"
                variant="outlined"
                style={{width:"75%",margin:"7px"}}

            />
            <TextField
                id="standard-multiline-static"
                label="Your Message"
                multiline
                rows={4}
                variant="outlined"
                style={{width:"75%",margin:"7px"}}
            />
        </div>
        
    </div> );
    }
}
 
export default ContactMe;