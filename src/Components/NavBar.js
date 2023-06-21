import '../assets/css/navbar.css'
export default function NavBar(){
    return(
        <>
            <div className="navbar">
                <ul>
                    <li className="active">
                        HOME
                    </li>
                    <li>
                        ABOUT
                    </li>
                    <li>
                        PORTFOLIO
                    </li>
                    <li>
                        CONTACT
                    </li>
                </ul>
            </div>
        </>
    );
}