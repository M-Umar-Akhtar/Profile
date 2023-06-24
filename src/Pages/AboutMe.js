import NavBar from "../Components/NavBar";
import React from 'react';
import { useState, useEffect } from 'react'
import '../assets/css/about.css'
import { click } from "@testing-library/user-event/dist/click";

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
    const cardArray = ["first", "second", "third"];
    const [cards, setCards] = useState(cardArray);
    const [indexes, setIndex] = useState([0, 1, 2]);
    const [currentCard, setCurrentCard] = useState(0);
    const [currentButton, setCurrentButton] = useState(styleButton);
    const [componentArray, setComponentArray] = useState([]);

    function onClick(index, value, id) {
        setCurrentButton((prevArray) => {
            const newArray = [...prevArray];
            for (let i = 0; i < 3; i++) {
                if (index === i)
                    newArray[i] = value;
                else
                    newArray[i] = "";
            }

            return newArray;
        });
        setIndex(prevArray => {
            const newArray = [...prevArray];
            const currentIndex = newArray.indexOf(currentCard);
            const newIndex = newArray.indexOf(id);
            const temp = newArray[newIndex]
            newArray[newIndex] = newArray[currentIndex];
            newArray[currentIndex] = temp;
            return newArray
        });
        setCurrentCard(id);
        setComponentArray(createArray());
    }

    /*
    *
    *   Education and certificates component    
    * 
    */

    function education_certificates(props) {
        const { card, index, id, cardIndex } = props;
        const icons = ["fas fa-graduation-cap", "fas fa-certificate"];
        return (
            <div id={id} className={cardIndex} onClick={() => { onClick(index, "activeButton", index) }}>
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

    function skills(cardIndex) {

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
            <div id="skl" className={cardIndex} onClick={() => { onClick(2, "activeButton", 2) }}>
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

    const createArray = () => {
        let comps = [];
        for (let i = 0; i < 3; i++) {
            switch (indexes[i]) {
                case 0:
                    comps.push(education_certificates({ card: "EDUCATION", index: 0, id: "edu", cardIndex: cards[i] + " card" }));
                    break;
                case 1:
                    comps.push(education_certificates({ card: "CERTIFICATES", index: 1, id: "cer", cardIndex: cards[i] + " card" }));
                    break;
                case 2:
                    comps.push(skills(cards[i] + " card"));
            }
        }
        return comps;
    }

    useEffect(() => {
        setComponentArray(createArray());
    }, [indexes, cards]);

    return (
        <>
            <div style={{ marginBottom: "50px" }}>
                <h2 style={{ marginTop: "0px" }}><i class="fas fa-trophy" style={{ fontSize: '20px', color: 'var(--variable-color)' }}></i> ACHIEVEMENTS</h2>
                <p style={{ marginTop: "0px" }}>Hover & click the cards in the back to view them </p>
            </div>
            <div className="achivements">
                <div className="navigationContainer">
                    <div className="navigation">
                        <button className={"navigationButton " + currentButton[0]} ><i class="fas fa-graduation-cap"></i> EDUCATION</button>
                        <button className={"navigationButton " + currentButton[1]} ><i class="fas fa-certificate"></i> CERTIFICATES</button>
                        <button className={"navigationButton " + currentButton[2]} ><i class="fas fa-star"></i> SKILLS</button>
                    </div>
                </div>
                <div className="cardsContainer">
                    {componentArray.map((element, index) => {
                        return (
                            <React.Fragment key={index}>
                                {element}
                            </React.Fragment>
                        );
                    })}
                </div>

            </div>
        </>
    );

}

export default function AboutMe(props) {
    return (
        <>
            <NavBar index={props.index} />
            <div className="aboutMe">
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
            </div>
        </>
    );
}