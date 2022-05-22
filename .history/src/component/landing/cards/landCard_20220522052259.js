
import {RiStarSFill} from "react-icons/ri"
import {AiTwotoneMessage} from "react-icons/ai"
import { useState } from "react"


const LandCard = ({img}) => {
    const [activeCard, setActiveCard] = useState(false)
    return(
        <div onMouseEnter={e=>set} className="landing__card">
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

                                <div className="landing__price">
                                    $0.0+
                                </div>
                            </div>

                        </div>

                    </div>
    )
}

export default LandCard;