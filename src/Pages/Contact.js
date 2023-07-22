import NavBar from "../Components/NavBar"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../assets/css/contact.css'

export default function Contact(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7 }}>
                <div className="aboutMe">
                <Link to="/" className="cross-button" ><i class="fas fa-times closeIcon"></i></Link>
                    <div className="headingContainer">
                        <h1>GET<span style={{ color: "var(--variable-color)" }}>IN TOUCH</span></h1>
                        <div className="breakerContainer">
                            <hr className="hr"></hr>
                            <i class="fas fa-envelope" style={{ fontSize: '25px', color: 'var(--variable-color)' }}></i>
                            <hr className="hr"></hr>
                        </div>
                    </div>
                    <div className="info-form">
                        <div className="infoSide">
                            <ul>
                                <li>
                                    <h2>PHONE</h2>
                                    <p><i class="fas fa-phone icons"></i> +923365447778</p>
                                </li>
                                <li>
                                    <h2>EMAIL</h2>
                                    <p><i class="fas fa-envelope icons"></i> umarakhtar.ms@gmail.com</p>
                                </li>
                                <li>
                                    <h2>ADDRESS</h2>
                                    <p><i class="fas fa-home icons"></i> Islamabad/Rawalpind, Pakistan</p>
                                </li>
                                <li>
                                    <h2>SOCIALS</h2>
                                    <div style={{ display: "flex", marginTop: "15px" }}>
                                        <a href="#" style={{ backgroundColor: "#1877F2" }}><i class="fab fa-facebook-f"></i></a>
                                        <a href="https://www.youtube.com/@modudiswag2083/featured" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#FF0000" }}><i class="fab fa-youtube"></i></a>
                                        <a href="https://github.com/M-Umar-Akhtar" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "rgb(146 24 242)" }}><i class="fab fa-github"></i></a>
                                        <a href="https://www.linkedin.com/in/muhammad-umar-akhtar-074780270/" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "rgb(0 68 157)" }}><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="formSide">
                            <h3 style={{ marginTop: "0px" }}>FEEL FREE TO DROP ME A LINE</h3>
                            <p style={{ width: "82%" }}>If you have any suggestion, project or even if you want to say Hello please fill out the form below and I will reply you shortly.</p>
                            <form onSubmit={handleSubmit}>
                                <label for="name">
                                    <i class="fas fa-user" ></i>
                                    <input type="text" name="name" placeholder="Your Name"></input>
                                </label>
                                <label for="email">
                                    <i class="fas fa-envelope" ></i>
                                    <input type="email" name="email" placeholder="Your Email"></input>
                                </label>
                                <label for="comment">
                                    <i class="fas fa-comments" ></i>
                                    <input type="text" name="comment" placeholder="Your Comment"></input>
                                </label>
                                <button className="emailButton">SEND MESSAGE <i className="fas fa-paper-plane"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}