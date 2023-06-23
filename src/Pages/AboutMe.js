import NavBar from "../Components/NavBar";
import React from 'react';
import { useState, useEffect } from 'react'
import '../assets/css/about.css'

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
                    </ul>
                </div>
                <div className="col2">
                    <ul>
                        <li>Contact: +923365447778</li>
                        <li>City: Rawalpind/Islamabad</li>
                        <li>Email: umarakhtar.ms@gmail.com</li>
                        <li>Spoken Langages: Urdu - English</li>
                    </ul>
                </div>
            </div>
            <div>
                <button className="resumeButton">DOWNLOAD RESUME <i className="fas fa-file-pdf"></i></button>
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
            key: "3",
            title: "HASH CODE 2022 - GOOGLE",
            date: "2/2022 - 3/2022",
        },
        {
            key: "4",
            title: "MERN STACK ADVANCED - PSEB IT INDUSTRY ACADEMIA BRIDGE PROGRAM",
            date: "7/2022 - 9/2022",
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
            <div id={id} className={cardIndex} onClick={() => { onClick(index, "activeButton", index)}}>
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
        return (
            <div id="skl" className={cardIndex} onClick={() => { onClick(2, "activeButton", 2)}}>
                <div className="titleContainer">
                    <h2 className="title"><i class="fas fa-star"></i> SKILLS</h2>
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
        <div className="achivements">
            <div className="navigationContainer">
                <div className="navigation">
                    <button className={"navigationButton " + currentButton[0]} onClick={() => { onClick(0, "activeButton", 0) }}><i class="fas fa-graduation-cap"></i> EDUCATION</button>
                    <button className={"navigationButton " + currentButton[1]} onClick={() => { onClick(1, "activeButton", 1) }}><i class="fas fa-certificate"></i> CERTIFICATES</button>
                    <button className={"navigationButton " + currentButton[2]} onClick={() => { onClick(2, "activeButton", 2) }}><i class="fas fa-star"></i> SKILLS</button>
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