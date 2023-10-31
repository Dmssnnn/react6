import WebDesignBigPic from "../Images/mac.png";
import AppDesign from "../Images/appleDesign.svg";
import GraphicDesign from "../Images/thirdOne.svg"
import { GrapicDesignPage } from "../GrapicDesignPage/GrapicDesignPage";
import {Link} from "react-router-dom"
export default function HomeDesignWrap() {
  return (
    <div className="container">   
            <div className="DesignWrap">
                <div className="designBigPicDiv">
                      <div className="BigPic"><Link to="/WebDesignPage" ><img  src={WebDesignBigPic} alt="Web Design Big Pic" /></Link></div>
                      <div className="BigPiCText">
                      <Link to="/WebDesignPage" ><h2>WEB DESIGN</h2></Link>
                          <span>VIEW PROJECTS</span>
                      </div>
                </div>
                <div>
                  <div className="twoPicDiv">
                    <div className="ApplePicWrap">
                            <div className="applePicDiv"><img src={AppDesign} alt="App Design" /></div>
                                <div className="applePicText">
                                      <h2>APP DESIGN</h2>
                                      <span>VIEW PROJECTS</span>
                                </div>
                    </div>
                      <div>
                      <div className="GrapicDesignPicwrap">
                           <div className="GrapicDesignPic"><Link to="/GrapicDesignPage"><img src={GraphicDesign} alt="Graphic Design" /></Link></div>
                            <div className="GrapicDesignText">
                                  <h2>GRAPIC DESIGN</h2>
                                  <span>VIEW PROJECTS</span>
                            </div>
                      </div>
                        
                      </div>
                
                  </div>
                </div>
              </div>
    </div>
  );
}