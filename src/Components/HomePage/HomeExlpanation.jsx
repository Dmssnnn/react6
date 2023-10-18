import Passionate from "../Images/PassionateIcon.svg"
import Resourceful from "../Images/resourceful.svg"
import FriendlyIcon from "../Images/friendlyIcon.svg"
export default function Explanation () {
    return (
        <div className="container">
            <div className="ExplanationWrapper">
                <div className="PassionateDiv">
                    <img src={Passionate}/>
                    <h3>PASSIONATE</h3>
                    <p>Each project starts with an in-depth brand research to ensure we only 
                    create products that serve a purpose. We merge art, design, and technology 
                    into exciting new solutions.</p>
                </div>
                <div className="resourcefulDiv">
                    <img src={Resourceful}/>
                    <h3>RESOURCEFUL</h3>
                    <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects 
                    and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
                </div>
                <div className="friendlyDiv">
                    <img src={FriendlyIcon}/>
                    <h3>FRIENDLY</h3>
                    <p> We are a group of enthusiastic folks who know how to put people first. Our success depends
                    on our customers, and we strive to give them the best experience a company can provide.</p>
                </div>
            </div>
            
        </div>
    )
}