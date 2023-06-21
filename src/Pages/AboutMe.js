import NavBar from "../Components/NavBar";
import '../assets/css/about.css'

function Information(){
    return(
        <div className="aboutMe">
            <div className="infoContainer">
                <h2><i class="fas fa-user" style={{fontSize: '20px', color: 'var(--variable-color)'}}></i> PERSONAL INFORMATION</h2>
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

function Achivements(){
    const education = () => {
        return(
            <div className="achivements">
                <div className="titleContainer">
                    <h2 className="title"><i class="fas fa-graduation-cap"></i> EDUCATION</h2>
                </div>
                <div className="">

                </div>
            </div>
        );
    }
}

export default function AboutMe(props){
    return(
        <>
            <NavBar index={props.index}/>
            <Information/>
        </>
    );
}