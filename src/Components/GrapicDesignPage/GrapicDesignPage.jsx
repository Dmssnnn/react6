import React from 'react'
import TimBrownPic from "../Images/TimBrown.svg"
import BoxedWaterPic from "../Images/BoxedWater.svg"
import SciencePic from "../Images/Science.svg"
import AppDesign from "../Images/appleDesign.svg"
import GraphicDesign from "../Images/WebDesignSmallPic.svg"
import WebDesignBigPic from "../Images/mac.png"
export default function GrapicDesignPage  () {
  return (
    <div className='container'>
        <div className='GrapicDesignBorder'>
            <div>
                <h1>Graphic Design</h1>
                <span>We deliver eye-catching branding materials that are tailored to meet your business objectives.</span>
            </div>
        </div>
        <div className='GrapicDesignPageBlocksWrapper'>
            <div>
                <img src={TimBrownPic}/>
                <h2>Tim Brown</h2>
                <span>A book cover designed for Tim Brown’s new release, ‘Change’</span>
            </div>
            <div>
                <img src={BoxedWaterPic}/>
                <h2>BOXED WATER</h2>
                <span>A simple packaging concept made for Boxed Water</span>
            </div>
            <div>
                <img src={SciencePic}/>
                <h2>SCIENCE !</h2>
                <span>A poster made in collaboration with the Federal Art Project</span>
            </div>

        </div>
        <div className="DesignTwoPicDiv">
                        <div className="appDesignWeb">
                                <img src={AppDesign}/>
                        </div>
                        <div className='MacDiv'>
                                <img src={WebDesignBigPic}/>   
                        </div>
                </div>
    </div>
  )
}
