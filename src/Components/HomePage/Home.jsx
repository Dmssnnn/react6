import awardWinning from "../Images/iphone.png"

export default function homePage () {
    return (
        <div className="Homecontainer">
                <div className="awardDiv">
                    <img src={awardWinning}/>

                    <div className="awardWinningText">
                        <div className="awardWinningSpan">
                            <span>Award-winning custom designs and digital branding solutions</span>
                        </div>
                    
                        <div className="awardWinningPara" >
                            <p>With over 10 years in the industry, we are experienced in creating fully
                            responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                        </div>
                    

                        <button className="awardWinningButton">LEARN MORE</button>
                </div>
            </div>
        </div>
    )
}   