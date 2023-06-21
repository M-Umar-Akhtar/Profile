import NavBar from '../Components/NavBar'
import '../assets/css/home.css'

function ImageSection() {
    return (
        <div className="container">
            <div className="imageSection">
                <div className="imageContainer">
                    <img src={require("../assets/images/2.png")}/>
                </div>
                <div className="detailsContainer">
                    <h2>Hi there! I am</h2>
                    <h1>UMAR AKHTAR</h1>
                    <p>I am passionate web developer. I am a fresh graduate and I am actively looking for a postion as front-end web developer.</p>
                </div>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <>
            <NavBar />
            <ImageSection />
        </>
    );
}