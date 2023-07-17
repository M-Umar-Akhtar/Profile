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
                    <h2>I am a Full stack web developer</h2>
                </div>
            </div>
        </div>
    );
}

export default function Home(props) {
    return (
        <>
            <NavBar index={props.index}/>
            <ImageSection />
        </>
    );
}