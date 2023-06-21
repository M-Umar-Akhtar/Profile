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
                        <Link to='/' className={links[0]}>HOME</Link>
                    </li>
                    <li>
                        <Link to='/about' className={links[1]}>ABOUT</Link>
                    </li>
                    <li>
                        <Link to='/portfolio' className={links[2]}>PORTFOLIO</Link>
                    </li>
                    <li>
                        <Link to='/contact' className={links[3]}>CONTACT</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}