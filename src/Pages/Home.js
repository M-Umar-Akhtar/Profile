import NavBar from '../Components/NavBar'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';
import '../assets/css/home.css'
import { motion } from 'framer-motion'

function ImageSection() {
    return (
        <motion.div className='container' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7 }}>
            <div className="gridContainer">
                <div className="nameSection">
                    <div className="detailsContainer">
                        <p>HI THERE! I AM</p>
                        <h1>UMAR AKHTAR</h1>
                        <h2><TypeAnimation
                            sequence={[
                                'WEB DEVELOPER',
                                2000,
                                'GAME DEVELOPER',
                                2000,
                                'ANDROID DEVELOPER',
                                2000,
                                'DESKTOP DEVELOPER',
                                2000,
                            ]}
                            speed={170}
                            repeat={Infinity}
                        /></h2>
                    </div>
                </div>
                <motion.div className='aboutSection' initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ duration: 0.4 }}>
                    <Link to="/about" className='links'>
                        <div className="detailsContainer">
                            <h1 className='headings'><span id="one">ABOUT</span> <span id="two">ME</span></h1>
                        </div>
                    </Link>
                </motion.div>
                <motion.div className='portfolioSection' initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ duration: 0.4 }}>
                    <Link to="/portfolio" className="links">
                        <div className="detailsContainer">
                            <h1 className='headings'><span id="three">MY</span> <span id="four">PORTFOLIO</span></h1>
                        </div>
                    </Link>
                </motion.div>
                <motion.div className='contactSection' initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ duration: 0.4 }}>
                    <Link to="/contact" className="links">
                        <div className="detailsContainer">
                            <h1 className='headings'><span id="five">GET</span> <span id="six">IN TOUCH</span></h1>
                        </div>
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default function Home(props) {
    return (
        <>
            <ImageSection />
        </>
    );
}