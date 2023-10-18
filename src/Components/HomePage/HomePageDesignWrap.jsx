import WebDesignBigPic from "../Images/mac.png";
import AppDesign from "../Images/appleDesign.svg";
import GraphicDesign from "../Images/thirdOne.svg"
import {Link} from "react-router-dom"
export default function HomeDesignWrap() {
  return (
    <div className="container">   
            <div className="DesignWrap">
        <div>
            <Link  ><img  src={WebDesignBigPic} alt="Web Design Big Pic" /></Link>
        </div>
        <div className="twoPicDiv">
            <div>
            <img src={AppDesign} alt="App Design" />
            </div>
            <div>
            <img src={GraphicDesign} alt="Graphic Design" />
            </div>
        </div>
        </div>
    </div>
  );
}