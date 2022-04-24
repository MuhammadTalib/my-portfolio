import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import "./style.css";

class About extends Component {
  state = {};
  render() {
    return (
      <Grid container>
        <Grid container item xs={12} lg={12} md={12} xl={12}>
          <div className="page-header">About Me</div>
        </Grid>
        <Grid container item xs={12} lg={12} md={12} xl={12}>
          <Grid item xs={2} lg={2} md={2} xl={2}></Grid>
          <Grid item xs={8} lg={8} md={8} xl={8}>
            <div className="about-desc">
              "I am a Software engineer having 3+ years experience in working
              with full stack technologies. I am highly passionate to learn and
              to know about new things. I have a great experience of working
              Javascript, React.js, Angular,Node.js, AWS and machine learning
              algorithms. I have a degree in Bachelors of Computer Science from
              Universiy of Karachi.
            </div>
          </Grid>
          <Grid item xs={12} lg={12} md={12} xl={12}></Grid>
        </Grid>
        {/* <div className="sub-heading"> Skills </div>
            <div className="br"></div>

            <div className="sub-item"> 
                <div className="bullet"></div>
                <div className="bullet-item">Languages</div>
            </div>
            <div className="para">C, C++, Java, Kotlin, Javascript</div>
            <div className="br"></div>

            <div className="sub-item"> 
                <div className="bullet"></div>
                <div className="bullet-item">Libraries & Framework</div>
            </div>
            <div className="para">React.js, Angular.js, Express.js</div>
            <div className="br"></div>

            <div className="sub-item"> 
                <div className="bullet"></div>
                <div className="bullet-item">Git</div>
            </div>
            <div className="br"></div>

            <div className="sub-heading"> Education </div>
            <div className="br"></div>

            <div className="sub-item"> 
                <div className="bullet"></div>
                <div className="bullet-item">Bachelor of Science in Computer Science</div>
            </div>
            <div className="para">UBIT, University Of Karachi</div> */}
      </Grid>
    );
  }
}

export default About;
