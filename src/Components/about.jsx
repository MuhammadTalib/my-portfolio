import React, { Component } from 'react';
import "./style.css"

class About extends Component {
    state = {  }
    render() { 
        return ( <div className="about-main">
            <div className="page-header">About Me</div>
            <div className="about-desc">"I am a final year student of BSCS from University of Karachi and currently I am working as a part time Software Developer in Zaavia. I am passionate to learn and to know about new technology. I have a great experience of working in React.js and Angular.js
             in frontend and Node.js with Express in backend. I have completed a course in Android Application Development in Kotlin and have many works in Android and Kotlin on my github account. There are many things that I want to achieve in my future in terms of my career. I have a Youtube
             channel through which I try to spread the words that I have and in future I want to be a successful Developer on Full Stack technologies." 
            </div>
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

        </div> );
    }
}
 
export default About;