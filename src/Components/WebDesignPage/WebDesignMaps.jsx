import Express from "../Images/express.svg"
import Transfer from "../Images/transfer.svg"
import Photon from "../Images/photon.svg"
import Builder from "../Images/builder.svg"
import Blogr from "../Images/blogr.svg"
import Camp from "../Images/camp.svg"
import AppDesign from "../Images/appleDesign.svg"
import GraphicDesign from "../Images/thirdOne.svg"
export default function WebDesignMaps () {
    return (
        <div className="container">
            <div className="WebDesignDiv">
                <h1>Web Design</h1>
                <span>We build websites that serve as powerful marketing tools and bring memorable brand experiences.</span>
            </div>
            <div className="DesignPageBlocks">
                <div>
                        <img src={Express} />
                        <h3>EXPRESS</h3>
                        <span>A multi-carrier shipping website for ecommerce businesses</span>
                </div>
                <div>
                        <img src={Transfer} />
                        <h3>TRANSFER</h3>
                        <span>Site for low-cost money transfers and sending money within seconds</span>
                </div>
                <div>
                        <img src={Photon} />
                        <h3>PHOTON</h3>
                        <span>A state-of-the-art music player with high-resolution audio and DSP effects</span>
                </div>
                <div>
                        <img src={Builder} />   
                        <h3>BUILDER</h3>
                        <span>Connects users with local contractors based on their location</span>
                </div>
                <div>
                        <img src={Blogr} />
                        <h3>BLOGR</h3>
                        <span>Blogr is a platform for creating an online blog or publication</span>
                </div>
                <div>
                        <img src={Camp} />
                        <h3>CAMP</h3>
                        <span>Get expert training in coding, data, design, and digital marketing</span>
                </div>
            </div>

                <div className="DesignTwoPicDiv">
                        <div className="appDesignWeb">
                                <img src={AppDesign}/>
                        </div>
                        <div>
                                <img src={GraphicDesign}/>   
                        </div>
                </div>
        </div>
    )
}