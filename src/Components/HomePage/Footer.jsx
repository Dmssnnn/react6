import DesignoLogo from "../Images/Designo-logo.svg"
import FbIcon from "../Images/FbIcon.svg"
import YoutubeIcon from "../Images/YoutubeIcon.svg"
import TwittIcon from "../Images/Twitt.svg"

export default function Footer () {
    return (
        
        <div className="Footercontainer">
            <div className="TalkAboutcontainer">
                <div className="TalkAboutPageDiv">
                    <div className="TalkAboutText">
                        <h2>Let’s talk about your project</h2>
                        <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                    </div>
                    <div>
                        <button className="TalkABoutButton">GET IN TOUCH</button>
                    </div>
                </div>
            </div>
            <div className="NaviWrapper">
                <div className="LogoDiv" >
                    <img className="NaviLOGO" src={DesignoLogo} alt="Designo Logo" />
                    <h2>D E S I G N O</h2>
                </div>
                <nav>
                    <ul>
                    <li>OUR COMPANY</li> 
                    <li>LOCATIONS</li> 
                    <li>CONTACT</li> 
                    </ul>
                </nav>
            </div>
            <div className="FooterBelowText">
                <div className="FooterCentralOfficeDiv">
                    <span>Designo Central Office</span>
                    <span>3886 Wellington Street</span>
                    <span>Toronto,Ontario, M9C 3J5</span>
                </div>
                <div className="FooterCentralOfficeDiv2">
                    <span>Contact Us (Central Office)</span>
                    <span>P: +1 253-863-8967</span>
                    <span>M : contact@Design.co</span>
                </div>
            </div>
            <div className="FooterBelowNav">
                <nav>
                    <ul>
                        <li><img src={FbIcon}/></li>
                        <li><img src={YoutubeIcon}/></li>
                        <li><img src={TwittIcon}/></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
