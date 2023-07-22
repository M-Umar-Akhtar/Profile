import '../assets/css/navbar.css'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
    const links=['links','links','links','links'];
    links[props.index] += ' active';
    return (
        <>
            <div className="navbar">
                <ul>
                    <li >
                        <a href="" className={links[0]}>HOME</a>
                    </li>
                    <li>
                        <a href="" className={links[1]}>ABOUT</a>
                    </li>
                    <li>
                        <a href="" className={links[2]}>PORTFOLIO</a>
                    </li>
                    <li>
                        <a href="" className={links[3]}>CONTACT</a>
                    </li>
                </ul>
            </div>
        </>
    );
}