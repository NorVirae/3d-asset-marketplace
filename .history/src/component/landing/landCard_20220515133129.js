
import {RiStarSFill} from "react-icons/ri"
import {BiMessageRounded} from "react-icons"


const LandCard = ({img}) => {
    return(
        <div className="landing__card">
                        <img src={img} alt="" className="landing-card-img"/>
                        <div className={"landing__card-body"}>
                            <h3 className={"landing__product-title"}>
                                Beach House with Rumps
                            </h3>
                            <h5 className="landing__product-title-affirm">
                                by Jay Williams in 3D assets
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
                                        25
                                    </span>
                                </div>
                            </div>

                        </div>

                    </div>
    )
}

export default LandCard;