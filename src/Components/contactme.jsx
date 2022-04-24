import { Grid, IconButton } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";
import medium from "../Images/medium.png";
import stack from "../Images/stackoverflow.PNG";

import "./style.css";
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

const ContactMe = () => {
  return (
    <Grid container>
      <Grid container item xs={12} lg={12} md={12} xl={12}>
        <div className="page-header">Contact Me</div>
      </Grid>
      <Grid container spacing={2}>
        <Grid container item xs={4} lg={4} md={4} xl={4}></Grid>
        <Grid container item xs={4} lg={4} md={4} xl={4}>
          <Grid item xs={2} lg={2} md={2} xl={2}>
            <IconButton
              onClick={() => {
                window.open("https://github.com/MuhammadTalib", "_blank");
              }}
            >
              <GitHubIcon className="icons" style={{ color: "#000000" }} />
            </IconButton>
          </Grid>
          <Grid item xs={2} lg={2} md={2} xl={2}>
            {" "}
            <IconButton
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/muhammadtalib/",
                  "_blank"
                );
              }}
            >
              <LinkedInIcon className="icons" style={{ color: "#0077b7" }} />
            </IconButton>
          </Grid>
          <Grid item xs={2} lg={2} md={2} xl={2}>
            <IconButton
              onClick={() => {
                window.open("https://medium.com/@talibwaseem135", "_blank");
              }}
            >
              <div
                className="icon-btn"
                style={{ backgroundImage: `url(${medium})` }}
              ></div>
            </IconButton>
          </Grid>
          <Grid item xs={2} lg={2} md={2} xl={2}>
            <IconButton
              onClick={() => {
                window.open(
                  "https://www.facebook.com/talib.waseem.18",
                  "_blank"
                );
              }}
            >
              <FacebookIcon className="icons" style={{ color: "#3a559f" }} />
            </IconButton>
          </Grid>
          <Grid item xs={2} lg={2} md={2} xl={2}>
            <IconButton
              onClick={() => {
                window.open("https://twitter.com/MuhammadTalibW1", "_blank");
              }}
            >
              <TwitterIcon className="icons" style={{ color: "#50abf1" }} />
            </IconButton>
          </Grid>
          <Grid item xs={2} lg={2} md={2} xl={2}>
            <IconButton
              onClick={() => {
                window.open(
                  "https://stackoverflow.com/users/10838401/muhammad-talib-waseem",
                  "_blank"
                );
              }}
            >
              <div
                className="icon-btn"
                style={{ backgroundImage: `url(${stack})` }}
              ></div>{" "}
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12} lg={12} md={12} xl={12}>
        <Grid item xs={2} lg={2} md={2} xl={2}></Grid>
        <Grid item xs={8} lg={8} md={8} xl={8} className="contact-form">
          <Grid item xs={12} lg={12} md={12} xl={12} className="email-me">
            Email Me
          </Grid>
          <Grid item xs={12} lg={12} md={12} xl={12} className="email-me-note">
            Drop me a line by using the form below
          </Grid>
          <Grid item xs={12} lg={12} md={12} xl={12}>
            <TextField
              id="outlined-password-input"
              label="Your Name"
              type="name"
              // onChange={(e) => this.changeText(e, "name")}
              autoComplete="current-password"
              variant="outlined"
              style={{ width: "75%", margin: "13px" }}
            />
          </Grid>
          <Grid item xs={12} lg={12} md={12} xl={12}>
            <TextField
              id="outlined-password-input"
              label="Your Email"
              type="email"
              // value={this.state.email}
              // onChange={(e) => this.changeText(e, "email")}
              autoComplete="current-password"
              variant="outlined"
              style={{ width: "75%", margin: "7px" }}
            />
          </Grid>
          <Grid item xs={12} lg={12} md={12} xl={12}>
            <TextField
              id="standard-multiline-static"
              label="Your Message"
              multiline
              fullWidth
              // value={this.state.message}
              // onChange={(e) => this.changeText(e, "message")}
              rows={4}
              variant="outlined"
              style={{ width: "75%", margin: "7px" }}
            />
          </Grid>
          <Grid item xs={12} lg={12} md={12} xl={12}>
            {" "}
            <Button
              className="send-btn"
              variant="contained"
              // onClick={this.sendEmail}
              color="primary"
            >
              Send
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={12} md={12} xl={12}></Grid>
      </Grid>
    </Grid>
  );
};

export default ContactMe;
