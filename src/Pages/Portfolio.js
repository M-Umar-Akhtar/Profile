import { useState, useRef, useEffect } from "react";
import { usePresence, useAnimate } from 'framer-motion';
import { Link } from 'react-router-dom'
import React from 'react';
import { motion } from 'framer-motion'
import '../assets/css/portfolio.css'
import pro1 from "../assets/images/pro1.PNG"
import pro2 from "../assets/images/pro2.PNG"
import pro3 from "../assets/images/pro3.PNG"
import pro4 from "../assets/images/pro4.png"
import pro5 from "../assets/images/pro5.jpg"
import pro6 from "../assets/images/pro6.jpg"
import pro7 from "../assets/images/pro7.jpg"
import pro8 from "../assets/images/pro8.jpg"
import pro9 from "../assets/images/pro9.PNG"

const data = [
    {
        index: 0,
        type: "Web Application",
        name: "E_STATE",
        startDate: "07/2022",
        endDate: "03/2023",
        technologies: "React.js, Node.js, MongoDB",
        details: "A real estate website with an embeded tool which creates a virtual walkthrough of the property.",
        image: pro1,
        link: "https://e-state-a07sr8xpt-obaidismailz.vercel.app/home"
    },
    {
        index: 1,
        type: "Web Application",
        name: "School Management",
        startDate: "04/2023",
        endDate: "05/2023",
        technologies: "React.js, Node.js, MongoDB",
        details: "A school management system which keeps track of students, teachers, classes and fee data.",
        image: pro2,
        link: "https://mscho.vercel.app/classes"
    },
    {
        index: 2,
        type: "Web Application",
        name: "Online Store",
        startDate: "08/2022",
        endDate: "09/2022",
        technologies: "React.js",
        details: "An e-commerce website built for online buying and selling of cloths and footware.",
        image: pro3,
        link: "https://online-cosmetic-store-mhrrosrae-m-umar-akhtar.vercel.app/"
    },
    {
        index: 4,
        type: "Game",
        name: "Marbel Rush",
        startDate: "04/2022",
        endDate: "05/2022",
        technologies: "Unity 3D and C#",
        details: "A simple game in which you have to complete levels. You can play it now by clicking the preview button",
        image: pro5,
        link: "https://simmer.io/@ModudiSwag/marblerush2"
    },
    {
        index: 3,
        type: "Web Application",
        name: "Vertiment",
        startDate: "02/2022",
        endDate: "03/2022",
        technologies: "HTML, CSS, JavaScript, PHP and MySQL",
        details: "An online store based on the idea of vertical intergeration.",
        image: pro4,
        link: ""
    },
    {
        index: 7,
        type: "Android Application",
        name: "TASBEEH_COUNTER",
        startDate: "04/2023",
        endDate: "04/2023",
        technologies: "Android Studio with JAVA",
        details: "An android application for a simple counter which also stores the counter data",
        image: pro8,
        link: ""
    },
    {
        index: 5,
        type: "Game",
        name: "Dungeon Rush",
        startDate: "02/2022",
        endDate: "02/2022",
        technologies: "JAVA",
        details: "A simple console based adventure game developed for a client",
        image: pro9,
        link: ""
    },
    {
        index: 6,
        type: "Android Application",
        name: "Expense Calculator",
        startDate: "04/2023",
        endDate: "04/2023",
        technologies: "Android Studio with JAVA",
        details: "An android application which calculates and saves the ecpense on travelling through vehicle",
        image: pro6,
        link: ""
    },
    {
        index: 7,
        type: "Android Application",
        name: "E_STATE",
        startDate: "04/2023",
        endDate: "04/2023",
        technologies: "Android Studio with JAVA",
        details: "An android application for real estate purchasing and selling",
        image: pro7,
        link: ""
    },

]


export default function Portfolio(props) {
    const projectContainerRef = useRef(null);
    const projectsContainerRef = useRef(null);
    const [isPresent, safeToRemove] = usePresence();
    const [scope, animate] = useAnimate();
    const [filtered, setFiltered] = useState(data);
    const [currentFilter, setFilter] = useState("All");
    const [currentFilterIndex, setFilterIndex] = useState(0);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [currentItem, setItem] = useState({});



    useEffect(() => {
        if (currentFilter === "All") {
            setFiltered(data);
            return;
        }
        const filteredArray = data.filter((project) => { return project.type === currentFilter });
        setFiltered(filteredArray);
    }, [currentFilter]);

    function applyFilter(type, index) {
        setFilter(type);
        setFilterIndex(index);
    }

    function openDetails(item) {
        projectContainerRef.current.style.height = '100%';
        projectContainerRef.current.style.width = '100%';
        projectContainerRef.current.style.opacity = '1';

        projectsContainerRef.current.style.height = '0';
        projectsContainerRef.current.style.width = '0';
        projectsContainerRef.current.style.opacity = '0';
        setTimeout(() => {
            setIsDetailsOpen(true);
            setItem(item);
        }, 700);
    }

    function closeDetails() {
        projectsContainerRef.current.style.height = '100%';
        projectsContainerRef.current.style.width = '100%';
        projectsContainerRef.current.style.opacity = '1';

        projectContainerRef.current.style.height = '0';
        projectContainerRef.current.style.width = '0';
        projectContainerRef.current.style.opacity = '0';
        setTimeout(() => {
            setIsDetailsOpen(false);
            setItem({});
        }, 500);
    }

    function Project() {
        const content = currentItem.link === "" ? "NO PREVIEW" : "PREVIEW";
        const icon = currentItem.link === "" ? "fas fa-eye-slash" : "far fa-eye";

        const handleClick = (event, flag) => {
            if (flag) {
                event.preventDefault();
            }
        }
        return (
            <div className={`projectContainer ${isDetailsOpen ? 'open' : ''}`} ref={projectContainerRef} style={{ position: "relative" }}>
                <button className="cross-button" onClick={() => closeDetails()}><i class="fas fa-times closeIcon"></i></button>
                <div className="project">
                    <img src={currentItem.image} />
                    <div className="projectInfo">
                        <h2>{currentItem.name}</h2>
                        <p style={{ marginTop: "5px", marginBottom: "5px" }}><i className="far fa-calendar-alt" style={{ marginRight: "15px" }}></i> Start Date: {currentItem.startDate}</p>
                        <p style={{ marginTop: "5px", marginBottom: "5px" }}><i className="far fa-calendar-check" style={{ marginRight: "15px" }}></i> End Date: {currentItem.endDate}</p>
                        <p style={{ marginTop: "5px", marginBottom: "5px" }}><i className="fas fa-cogs" style={{ marginRight: "10px" }}></i> Used Technologies: {currentItem.technologies}</p>
                        <p>{currentItem.details}</p>
                        <hr className="hr" style={{ width: "100%", margin: "30px 0px" }}></hr>
                        <a href={currentItem.link} onClick={(event) => handleClick(event, currentItem.link === "")} target="_blank"><button className="previewButton" >{content} <i className={icon}></i></button></a>
                    </div>
                </div>
            </div>
        );
    }

    function SingleItem(item, index) {

        useEffect(() => {
            if (isPresent) {
                const animation = async () => {
                    await animate(scope.current, { opacity: [0, 1] }, { duration: 0.5 })
                }
                animation();
            }
        })

        return (
            <div className="projectImage" key={index}>
                <img src={item.image}></img>
                <div class="overlay" onClick={(event) => openDetails(item, event)}>
                    <div class="overlay-content">
                        <p><strong>{item.name}</strong><br />{item.type}</p>
                    </div>
                </div>
            </div>
        );
    }

    function Projects() {
        return (
            <div ref={projectsContainerRef}>
                <div className={`projects ${isDetailsOpen ? 'closed' : ''}`} ref={scope}>
                    {filtered.map((item, index) => {
                        return (
                            SingleItem(item, index)
                        )
                    })}

                </div>
            </div>
        );
    }

    return (
        <>
            <motion.div className="aboutMe" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.7}}>
            <Link to="/" className="cross-button" ><i class="fas fa-times closeIcon"></i></Link>
                <div className="headingContainer">
                    <h1>PORT<span style={{ color: "var(--variable-color)" }}>FOLIO</span></h1>
                    <div className="breakerContainer" style={{ marginBottom: "10px" }}>
                        <hr className="hr"></hr>
                        <i class="fas fa-briefcase" style={{ fontSize: '25px', color: 'var(--variable-color)' }}></i>
                        <hr className="hr"></hr>
                    </div>
                </div>
                <div className="filters">
                    <ul>
                        <li >
                            <a href="#" className={`links ${currentFilterIndex === 0 ? 'active' : ''}`} onClick={() => { applyFilter("All", 0) }}>All</a>
                        </li>
                        <li>
                            <a href="#" className={`links ${currentFilterIndex === 1 ? 'active' : ''}`} onClick={() => { applyFilter("Web Application", 1) }}>Web</a>
                        </li>
                        <li>
                            <a href="#" className={`links ${currentFilterIndex === 2 ? 'active' : ''}`} onClick={() => { applyFilter("Android Application", 2) }}>Android</a>
                        </li>
                        <li>
                            <a href="#" className={`links ${currentFilterIndex === 3 ? 'active' : ''}`} onClick={() => { applyFilter("Game", 3) }}>Game</a>
                        </li>
                    </ul>
                </div>
                <Projects />
                <Project />
            </motion.div>
        </>
    );
}