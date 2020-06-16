import React, { Component } from 'react';
import { useCallback } from 'react';

class Projects extends Component {
    state = {  }
    render() { 
        return ( <div className="about-main">
        <div className="page-header">Projects</div>
        <div className="main-project-wrapper">
            <div className="project-headers">React Projects:</div>
            <ul className="projects-main-div">
                <li><a href={"https://github.com/MuhammadTalib/Chatbot"}>Chatbot</a></li>
                <li><a href={"https://github.com/MuhammadTalib/Softboard"}>Softboard</a></li>
                <li><a href={"https://github.com/MuhammadTalib/my-portfolio"}>Portfolio</a></li>
                <li><a href={"https://github.com/MuhammadTalib/react-pen-draw"}>Pen Drawing</a></li>
                <li><a href={"https://github.com/MuhammadTalib/Vidly"}>Vidly</a></li>
                <li><a href={"https://github.com/MuhammadTalib/custom-linear-progressbar"}>Custom Linear Progressbar</a></li>
                <li><a href={"https://github.com/MuhammadTalib/react-quiz-app"}>Quiz App</a></li>
                <li><a href={"https://github.com/MuhammadTalib/my-portfolio"}>Portfolio</a></li>
                <li><a href={"https://github.com/MuhammadTalib/react-pen-draw"}>Pen Drawing</a></li>
                <li><a href={"https://github.com/MuhammadTalib/Vidly"}>Vidly</a></li>
            </ul>

            <div className="project-headers">Nodejs Projects:</div>
            <div className="projects-main-div">
                <div><a href={"https://github.com/MuhammadTalib/chat-app-node"}>Chat App (Socket.io)</a></div>
                <div><a href={"https://github.com/MuhammadTalib/task-manager"}>Task Manager</a></div>
                <div><a href={"https://github.com/MuhammadTalib/my-portfolio"}>Portfolio</a></div>
                <div><a href={"https://github.com/MuhammadTalib/react-pen-draw"}>Pen Drawing</a></div>
                <div><a href={"https://github.com/MuhammadTalib/Vidly"}>Vidly</a></div>
            </div>

            <div className="project-headers">Computer Graphics Projects(Javascript):</div>
            <div className="projects-main-div">
                <div><a href={"https://github.com/MuhammadTalib/Shapes"}>Shapes Drawing</a></div>
                <div><a href={"https://github.com/MuhammadTalib/Snake-Game"}>Snake Game</a></div>
                <div><a href={"https://github.com/MuhammadTalib/Polygonia"}>Polygon Drawing</a></div>
                <div><a href={"https://github.com/MuhammadTalib/Image-Tweening"}>Image Tweening</a></div>
                <div><a href={"https://github.com/MuhammadTalib/Object-Identifier-in-Image"}>Object Identifier</a></div>
                <div><a href={"https://github.com/MuhammadTalib/Wall-Clock-Scene"}>Wall Clock Scene (Three.js)</a></div>
                <div><a href={"https://github.com/MuhammadTalib/sierpinski-gasket"}>Sierpinski Gasket (Three.js)</a></div>
                <div><a href={"https://github.com/MuhammadTalib/Object-Identifier-in-Image"}>Object Identifier</a></div>
                <div><a href={"https://github.com/MuhammadTalib/Object-Identifier-in-Image"}>Object Identifier</a></div>
                <div><a href={"https://github.com/MuhammadTalib/Object-Identifier-in-Image"}>Object Identifier</a></div>
            </div>


            <div className="project-headers">Android (Kotlin) Projects:</div>
            <div className="projects-main-div">
                <a href={"https://github.com/MuhammadTalib/Chat-Club"}>Chat Club</a>
            </div>

            <div className="project-headers">Data Structures Projects (C++):</div>
            <div className="projects-main-div">
                <div><a href={"https://github.com/MuhammadTalib/Krushkal-Algorithm"}>Krushkal Algorithm</a></div>
                <div><a href={"https://github.com/MuhammadTalib/Prims-Algorithm"}>Prims Algorithm</a></div>
                <div><a href={"https://github.com/MuhammadTalib/Infix-to-Postfix"}>Infix To Postfix</a></div>
                <div><a href={"https://github.com/MuhammadTalib/Hashing-Data-Structure"}>Hashing</a></div>
                <div><a href={"https://github.com/MuhammadTalib/Queue"}>Queue</a></div>
                <div><a href={"https://github.com/MuhammadTalib/Quick-Sort"}>Quick Sort</a></div>
                <div><a href={"https://github.com/MuhammadTalib/Queue"}>Queue</a></div>
                <div><a href={"https://github.com/MuhammadTalib/Queue"}>Queue</a></div>
                <div><a href={"https://github.com/MuhammadTalib/Queue"}>Queue</a></div>
            </div>
            
        </div>



        {/* <div className="projects-card" onClick={()=> window.open("https://github.com/MuhammadTalib/Chat-Club", "_blank")}>
            <div className="project-name">ChatClub</div>
            <div className="project-disc">Chat Club is Android application it's features are similar to facebook. It is based on Kotlin and made on Android Studio.</div>
        </div> */}
    </div> );
    }
}
 
export default Projects;