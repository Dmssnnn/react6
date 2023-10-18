import React from 'react'
import CanadaWrap from "../Images/canadaMap.svg"
const Locations = () => {
  return (
    <div className='container'>
        <div className='mapsWrapper' >
            
                <div className='canadaDetails'>
                    <div className='DetaWrap'>
                        <h1>Canada</h1>
                        <div className='detailsSpan'>
                            <div>
                                <span>Designo Central Office </span> 
                                <span>3886 Wellington Street</span>  
                                <span>Toronto, Ontario M9C 3J5</span>
                            </div>
                            <div>
                                <span>Contact</span> 
                                <span>P : +1 253-3211-523</span>  
                                <span>M : contact@gmail.co</span>
                            </div>
                        </div>
                    </div>
                    <div className='canadaImg'>
                        <img src={CanadaWrap}/>
                    </div>
                </div>

            <div>
                <div className='canadaDetails'>
                    <div className='canadaImg'>
                        <img src={CanadaWrap}/>
                    </div>
                    <div className='DetaWrap'>
                        <h1>Australia</h1>
                        <div className='detailsSpan'>
                            <div>
                                <span>Designo Central Office </span> 
                                <span>3886 Wellington Street</span>  
                                <span>Toronto, Ontario M9C 3J5</span>
                            </div>
                            <div>
                                <span>Contact</span> 
                                <span>P : +1 253-3211-523</span>  
                                <span>M : contact@gmail.co</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div>
                <div className='canadaDetails'>
                    <div className='DetaWrap'>
                        <h1>Canada</h1>
                        <div className='detailsSpan'>
                            <div>
                                <span>Designo Central Office </span> 
                                <span>3886 Wellington Street</span>  
                                <span>Toronto, Ontario M9C 3J5</span>
                            </div>
                            <div>
                                <span>Contact</span> 
                                <span>P : +1 253-3211-523</span>  
                                <span>M : contact@gmail.co</span>
                            </div>
                        </div>
                    </div>
                    <div className='canadaImg'>
                        <img src={CanadaWrap}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Locations