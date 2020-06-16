import React, { Component } from 'react';
import "./style.css"
import { IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import medium from "../Images/medium.png"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import nodemailer from "nodemailer";

// let testAccount = nodemailer.createTestAccount();

// let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass, // generated ethereal password
//     },
//   });

class ContactMe extends Component {
    state = { 
        name:"",
        email:"",
        message:""
    }

    sendEmail=()=>{
        // let info = transporter.sendMail({
        //     from: 'talibwaseem135.com', // sender address
        //     to: "talibwaseem135@gmail.com", // list of receivers
        //     subject: "Hello ✔", // Subject line
        //     text: "Hello world?", // plain text body
        //     html: "<b>Hello world?</b>", // html body
        // });
        // console.log("Message sent: %s", info.messageId);
    }
    changeText=(e,val)=>{
        this.setState({[val]:e.target.value})
    }

    render() { 
        return ( <div className="about-main">
        <div className="page-header">Contact Me</div>
        
        <div className="icon-wrapper">
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

        <div className="contact-form">
            <div className="email-me">Email Me</div>
            <div className="email-me-note">Drop me a line by using the form below</div>
            <TextField
                id="outlined-password-input"
                label="Your Name"
                type="name"
                value={this.state.name}
                onChange={(e)=>this.changeText(e,"name")}
                autoComplete="current-password"
                variant="outlined"
                style={{width:"75%",margin:"13px"}}
            />
            <TextField
                id="outlined-password-input"
                label="Your Email"
                type="email"
                value={this.state.email}
                onChange={(e)=>this.changeText(e,"email")}
                autoComplete="current-password"
                variant="outlined"
                style={{width:"75%",margin:"7px"}}

            />
            <TextField
                id="standard-multiline-static"
                label="Your Message"
                multiline
                value={this.state.message}
                onChange={(e)=>this.changeText(e,"message")}
                rows={4}
                variant="outlined"
                style={{width:"75%",margin:"7px"}}
            />
            <Button     
                className="send-btn" 
                variant="contained" 
                onClick={this.sendEmail}
                color="primary"> 
                Send 
            </Button>
        </div>
        
    </div> );
    }
}
 
export default ContactMe;