import DesignoLogo from "../Images/Designo-logo.svg"
import {Link} from "react-router-dom"
export default function Navigation () {
    return (
        <div className="container">
            <div className="NaviWrapper">
                <div className="LogoDiv" >
                    <img className="NaviLOGO" src={DesignoLogo} alt="Designo Logo" />
                    <h2>D E S I G N O</h2>
                </div>
                <nav>
                    <ul>
                        <li>
                        <Link to="/Home">HOME</Link>
                        </li>
                        <li>
                        <Link>OUR COMPANY</Link>
                        </li> 
                        <li> <Link to="/Locations">LOCATIONS</Link></li> 
                        <li>CONTACT</li> 
                    </ul>
                </nav>
            </div>
        </div>
    )
}