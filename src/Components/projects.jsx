import React, { Component } from 'react';

class Projects extends Component {
    state = {  }
    render() { 
        return ( <div className="about-main">
        <div className="page-header">Projects</div>
        <div class="project-headers">React Projects:</div>
            <a href={"https://github.com/MuhammadTalib/react-pen-draw"}>Pen Drawing</a>
            <a href={"https://github.com/MuhammadTalib/Vidly"}>Vidly</a>

        <div class="project-headers">Android (Kotlin) Projects:</div>
        <a href={"https://github.com/MuhammadTalib/Chat-Club"}>Chat Club</a>

        <div class="project-headers">Data Structures:</div>
        <div class="project-headers">C++ Projects:</div>


        {/* <div className="projects-card" onClick={()=> window.open("https://github.com/MuhammadTalib/Chat-Club", "_blank")}>
            <div className="project-name">ChatClub</div>
            <div className="project-disc">Chat Club is Android application it's features are similar to facebook. It is based on Kotlin and made on Android Studio.</div>
        </div> */}
    </div> );
    }
}
 
export default Projects;