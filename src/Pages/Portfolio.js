import { useState, useRef } from "react";
import NavBar from "../Components/NavBar"
import '../assets/css/portfolio.css'

export default function Portfolio(props) {
    const projectContainerRef = useRef(null);
    const projectsContainerRef = useRef(null);
    const [buttonClicked, setButtonClicked] = useState(false);

    function openDetails() {
        if (projectContainerRef.current && projectsContainerRef.current) {
            projectContainerRef.current.style.height = '100%';
            //projectContainerRef.current.style.opacity = '1';
            projectContainerRef.current.style.width = '100%';
            //projectsContainerRef.current.style.opacity = '0';
            projectContainerRef.current.style.opacity = '1';
            projectsContainerRef.current.style.height = '0';
            //projectContainerRef.current.style.opacity = '1';
            projectsContainerRef.current.style.width = '0';
            //projectsContainerRef.current.style.opacity = '0';
            projectsContainerRef.current.style.opacity = '0';
        }
    }

    function closeDetails() {
        if (projectContainerRef.current && projectsContainerRef.current) {
            projectsContainerRef.current.style.height = '100%';
            //projectContainerRef.current.style.opacity = '1';
            projectsContainerRef.current.style.width = '100%';
            //projectsContainerRef.current.style.opacity = '0';
            projectsContainerRef.current.style.opacity = '1';
            projectContainerRef.current.style.height = '0';
            //projectContainerRef.current.style.opacity = '1';
            projectContainerRef.current.style.width = '0';
            //projectsContainerRef.current.style.opacity = '0';
            projectContainerRef.current.style.opacity = '0';

            //projectsContainerRef.current.style.opacity = '0';
            /*projectsContainerRef.current.style.display = 'grid';
            projectsContainerRef.current.style.opacity = '1';
            projectContainerRef.current.style.display = 'none';
            projectContainerRef.current.style.opacity = '0';*/
        }
    }

    function Project() {
        return (
            <div className="projectContainer" ref={projectContainerRef} style={{ position: "relative" }}>
                <button className="cross-button" onClick={() => closeDetails()}><i class="fas fa-times closeIcon"></i></button>
                <div className="project">
                    <img src={require("../assets/images/sampleImage.PNG")} />
                    <div className="projectInfo">
                        <h2>PEOJECT NAME</h2>
                        <p style={{ marginTop: "5px", marginBottom: "5px" }}><i className="far fa-calendar-alt" style={{ marginRight: "15px" }}></i> Start Date: 00/0000</p>
                        <p style={{ marginTop: "5px", marginBottom: "5px" }}><i className="far fa-calendar-check" style={{ marginRight: "15px" }}></i> End Date: 00/0000</p>
                        <p style={{ marginTop: "5px", marginBottom: "5px" }}><i className="fas fa-cogs" style={{ marginRight: "10px" }}></i> Used Technologies: MERN stack</p>
                        <p>Project description 1 to 2 lines</p>
                        <hr className="hr" style={{ width: "100%", margin: "30px 0px" }}></hr>
                        <a href="https://e-state-a07sr8xpt-obaidismailz.vercel.app/home" target="_blank" rel="noopener noreferrer"><button className="previewButton" >PREVIEW <i className="far fa-eye"></i></button></a>
                    </div>
                </div>
            </div>
        );
    }

    function Projects() {
        return (
            <div className="projects" ref={projectsContainerRef}>
                <div className="projectImage">
                    <img src={require("../assets/images/pro1.PNG")}></img>
                    <div class="overlay">
                        <div class="overlay-content">
                            <button className="smallPreviewButton" onClick={() => openDetails()}><i className="far fa-eye"></i></button>
                        </div>
                    </div>
                </div>
                <div className="projectImage">
                    <img src={require("../assets/images/pro2.PNG")}></img>
                    <div class="overlay">
                        <div class="overlay-content">
                            <button className="smallPreviewButton" onClick={() => openDetails()}><i className="far fa-eye"></i></button>
                        </div>
                    </div>
                </div>
                <div className="projectImage">
                    <img src={require("../assets/images/pro1.PNG")}></img>
                    <div class="overlay">
                        <div class="overlay-content">
                            <button className="smallPreviewButton" onClick={() => openDetails()}><i className="far fa-eye"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    function switchProject() {
        console.log(buttonClicked)
        if (buttonClicked) {
            return (
                <Project />
            );
        }
        else {
            return (

                <Projects />
            );
        }
    }

    return (
        <>
            <NavBar index={props.index} />
            <div className="aboutMe">
                <div className="headingContainer">
                    <h1>PORT<span style={{ color: "var(--variable-color)" }}>FOLIO</span></h1>
                    <div className="breakerContainer">
                        <hr className="hr"></hr>
                        <i class="fas fa-briefcase" style={{ fontSize: '25px', color: 'var(--variable-color)' }}></i>
                        <hr className="hr"></hr>
                    </div>
                </div>
                    <Projects />
                    <Project />
            </div>
        </>
    );
}