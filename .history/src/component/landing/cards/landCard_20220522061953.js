
import {RiStarSFill} from "react-icons/ri"
import {AiTwotoneMessage} from "react-icons/ai"
import { useState } from "react"


const WhiteList = ({color="#7c187a", degrees, left,  right, top, bottom}) =>{
    return (
        <div style={{transform: `rotate(${degrees})`, left, right, top, bottom}} className="landing__card-whiteList">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.11 91.79">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <polygon points="0.34 91.79 0 0.1 87.11 0 0.34 91.79" style={{fill: color}}/>
                    </g>
                </g>
            </svg>
        </div>
        
    )
}

const LandCard = ({img}) => {
    const [activeCard, setActiveCard] = useState(false)
    return(
        <div onMouseEnter={e=>setActiveCard(true)} onMouseLeave={e=>setActiveCard(false)} className="landing__card">
            acti<WhiteList top={"-2%"} left="-2%"/>
                        <img src={img} alt="" className="landing-card-img"/>
                        <div className={"landing__card-body"}>
                            <h3 className={"landing__product-title"}>
                                Beach House with Rumps
                            </h3>
                            <h5 className="landing__product-title-affirm">
                                by <span className="landing__product-author" 
                                style={{color: activeCard?"#FF9700":"#6D6D91"}}
                                >Jay Williams</span> in 3D assets
                            </h5>

                            <div className="landing__rating-container">
                                <div className="landing__rating-container-inner">
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />

                                </div>
                                <div className="landing__card-stats-container">
                                    <span className="landing__card-stats-views">
                                        241
                                    </span>

                                    <span className="landing__card-stats-comments">
                                       <AiTwotoneMessage /> 25
                                    </span>
                                </div>
                                <WhiteList color={"#FF9700"} degrees={"180deg"} bottom={"0%"} right="0%"/>
                                
                                <div style={{color: activeCard?"#000000":"#ffffff"}} className="landing__price">
                                    $0.0+
                                </div>
                            </div>

                        </div>

                    </div>
    )
}

export default LandCard;