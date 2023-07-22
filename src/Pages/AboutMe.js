import React from 'react';
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/about.css'
import { motion } from 'framer-motion'

function Information() {

    return (
        <div>
            <div className="infoContainer">
                <h2><i class="fas fa-user" style={{ fontSize: '20px', color: 'var(--variable-color)' }}></i> PERSONAL INFORMATION</h2>
                <p>I am a passionate web developer. I have experience with Frontend and Backend of a website.
                    I am team player and understand the dynamics and working of a functional team. </p>
            </div>
            <div className="detailedInfoContainer">
                <div className="col1">
                    <ul>
                        <li>First Name: Umar</li>
                        <li>Last Name: Akhtar</li>
                        <li>Date of birth: 9 january 2001</li>
                        <li>Nationality: Pakistani</li>
                        <li>LinkedIn Profile: <a href="https://www.linkedin.com/in/muhammad-umar-akhtar-074780270/" className="customLinks" target="_blank" rel="noopener noreferrer"> Click me!</a></li>
                    </ul>
                </div>
                <div className="col2">
                    <ul>
                        <li>Contact: +923365447778</li>
                        <li>City: Rawalpind/Islamabad</li>
                        <li>Email: umarakhtar.ms@gmail.com</li>
                        <li>Spoken Langages: Urdu - English</li>
                        <li>Github Profile: <a href="https://github.com/M-Umar-Akhtar" className="customLinks" target="_blank" rel="noopener noreferrer"> Click me!</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <a href="https://drive.google.com/file/d/1XQa3wPeu9CxIfmZB25EFuEMoitm7u3Kc/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="resumeButton">VIEW RESUME <i className="fas fa-file-pdf"></i></button></a>
            </div>
        </div>
    );
}

/*
*
*   Sample data for education, certificates and skills   
* 
*/
const sampleData = {
    EDUCATION: [
        {
            key: "1",
            title: "BACHELOR'S OF SCIENCE IN SOFTWARE ENGINEERING - AIR UNIVERSITY ISLAMABAD",
            date: "2019 - 2023",
        },
        {
            key: "2",
            title: "FSC PRE-ENGINEERING - ARMY PUBLIC SCHOOL AND COLLEGE",
            date: "2017 - 2019",
        },
        {
            key: "3",
            title: "MATRIC - ARMY PUBLIC SCHOOL AND COLLEGE",
            date: "2015 - 2017",
        },
    ],

    CERTIFICATES: [
        {
            key: "4",
            title: "HASH CODE 2022 - GOOGLE",
            date: "2/2022 - 3/2022",
        },
        {
            key: "5",
            title: "MERN STACK ADVANCED - PSEB IT INDUSTRY ACADEMIA BRIDGE PROGRAM",
            date: "7/2022 - 9/2022",
        },
    ],

    SKILLS: [
        {
            title: "HTML",
            stars: 5
        },
        {
            title: "CSS",
            stars: 5
        },
        {
            title: "Javascript",
            stars: 4
        },
        {
            title: "React.js",
            stars: 4
        },
        {
            title: "Node.js",
            stars: 3
        },
        {
            title: "MongoDB",
            stars: 4
        },
        {
            title: "PHP",
            stars: 3
        },
        {
            title: "MySQL",
            stars: 3
        },
        {
            title: "C++",
            stars: 5
        },
        {
            title: "C#",
            stars: 3
        },
        {
            title: "Java",
            stars: 5
        },
        {
            title: "Git/GitHub",
            stars: 3
        },
        {
            title: "Jenkins/Tomcat",
            stars: 3
        },
        {
            title: "Unity3D",
            stars: 4
        },
    ]
}

function Achivements() {
    // state to handle component render i:e education,certificate or skills
    const styleButton = ["activeButton", "", ""];

    /* useRef for the cards */

    const firstCard = useRef(null);
    const secondCard = useRef(null);
    const thirdCard = useRef(null);
    const cardsReference = [firstCard, secondCard, thirdCard];
    const currentCard = useRef(0);

    /* useRef for the buttons */

    const firstButton = useRef(null);
    const secondButton = useRef(null);
    const thirdButton = useRef(null);
    const buttonsReference = [firstButton, secondButton, thirdButton];
    const currentButton = useRef(0);

    function swapCards(index) {
        const current = cardsReference[index];
        const onFront = cardsReference[currentCard.current];
        const currentStyles = window.getComputedStyle(current.current);
        const onFrontStyles = window.getComputedStyle(onFront.current);
        let zIndex = currentStyles.zIndex;
        let top = currentStyles.top;
        let left = currentStyles.left;
        let opacity = currentStyles.opacity;
        current.current.style.opacity = onFrontStyles.opacity;
        current.current.style.zIndex = onFrontStyles.zIndex;
        current.current.style.top = onFrontStyles.top;
        current.current.style.left = onFrontStyles.left;
        onFront.current.style.opacity = opacity;
        onFront.current.style.zIndex = zIndex;
        onFront.current.style.top = top;
        onFront.current.style.left = left;
        /*setTimeout(()=>{
            current.current.style.opacity = "1";
            onFront.current.style.opacity = "1";
        },900);*/
        currentCard.current = index;
    }

    function swapButtons(index) {
        const current = buttonsReference[currentButton.current];
        const clicked = buttonsReference[index];
        current.current.style.backgroundColor = "var(--less-blackish)";
        current.current.style.borderColor = "grey";
        current.current.style.color = "grey";
        clicked.current.style.backgroundColor = "var(--variable-color)";
        clicked.current.style.borderColor = "var(--variable-color)";
        clicked.current.style.color = "white";
        currentButton.current = index;
    }

    function onClick(index) {
        if (index === currentButton.current)
            return;
        swapCards(index);
        swapButtons(index);
    }

    /*
    *
    *   Education and certificates component    
    * 
    */

    function Education_certificates(props) {
        const { card, index, id, cardIndex } = props;
        const icons = ["fas fa-graduation-cap", "fas fa-certificate"];
        return (
            <div id={id} className={cardIndex} ref={cardsReference[index]}>
                <div className="titleContainer">
                    <h2 className="title"><i class={icons[index]}></i> {card}</h2>
                </div>
                <div className="certificate-education">
                    <ul className="list">
                        {sampleData[card].map(data => (
                            <li className="item" key={data.key}>
                                <h2>{data.title}</h2>
                                <p><i className="far fa-calendar-alt" style={{ color: 'grey' }}></i> {data.date}</p>
                                <hr></hr>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        );
    }

    /*
    *
    *   Skills component   
    * 
    */

    function Skills({ cardIndex }) {

        let halfLength = sampleData["SKILLS"].length / 2;

        function initSkillsList(arr) {
            const list = arr.map((data) => {
                let stars = [];
                const filled = <i class="fas fa-star"></i>;
                const notFilled = <i class="far fa-star"></i>
                for (let i = 0; i < 5; i++) {
                    stars.push(i < data.stars ? filled : notFilled);
                }
                return (
                    <li>
                        <h3>{data.title}</h3>
                        {stars}
                    </li>
                );
            });
            return list;
        }

        return (
            <div id="skl" className={cardIndex} ref={cardsReference[2]}>
                <div className="titleContainer">
                    <h2 className="title"><i class="fas fa-star"></i> SKILLS</h2>
                </div>
                <div className="skillsContainer">
                    <ul className="skillsList">
                        {initSkillsList(sampleData["SKILLS"].slice(0, halfLength))}
                    </ul>
                    <ul className="skillsList">
                        {initSkillsList(sampleData["SKILLS"].slice(halfLength))}
                    </ul>
                </div>
            </div>
        );
    }




    /*
    *
    *   Main wrapper component  
    * 
    */

    return (
        <>
            <div style={{ marginBottom: "50px" }}>
                <h2 style={{ marginTop: "0px" }}><i class="fas fa-trophy" style={{ fontSize: '20px', color: 'var(--variable-color)' }}></i> ACHIEVEMENTS</h2>
                <p style={{ marginTop: "0px" }}>Click on the buttons below to view the cards </p>
            </div>
            <div className="achivements">
                <div className="navigationContainer">
                    <div className="navigation">
                        <button ref={buttonsReference[0]} className={"navigationButton"} style={{ color: "white", backgroundColor: " var(--variable-color)", borderColor: "var(--variable-color)" }} onClick={() => onClick(0)}><i class="fas fa-graduation-cap"></i> EDUCATION</button>
                        <button ref={buttonsReference[1]} className={"navigationButton"} onClick={() => onClick(1)}><i class="fas fa-certificate"></i> CERTIFICATES</button>
                        <button ref={buttonsReference[2]} className={"navigationButton"} onClick={() => onClick(2)}><i class="fas fa-star"></i> SKILLS</button>
                    </div>
                </div>
                <div className="cardsContainer">
                    <Education_certificates card={"EDUCATION"} index={0} id={"edu"} cardIndex={"first card"} />
                    <Education_certificates card={"CERTIFICATES"} index={1} id={"cer"} cardIndex={"second card"} />
                    <Skills cardIndex={"third card"} />
                </div>

            </div>
        </>
    );

}

export default function AboutMe(props) {
    return (
        <>

            <motion.div className="aboutMe" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}  transition={{duration: 0.7}}>
                <Link to="/" className="cross-button" ><i class="fas fa-times closeIcon"></i></Link>
                <div className="headingContainer">
                    <h1>ABOUT <span style={{ color: "var(--variable-color)" }}>ME</span></h1>
                    <div className="breakerContainer">
                        <hr className="hr"></hr>
                        <i class="far fa-id-card" style={{ fontSize: '25px', color: 'var(--variable-color)' }}></i>
                        <hr className="hr"></hr>
                    </div>
                </div>
                <Information />
                <hr className="hr" style={{ width: "100%", margin: "70px 0px" }}></hr>
                <Achivements />
            </motion.div>
        </>
    );
}