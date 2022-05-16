import {BsDisplay} from "react-icons/bs"

const CGCard = ({img}) => {
    return <div className="landing__cg-card">
                <img src={img} className="landing__cg-img" alt="" />
                <div className="landing__cg-overlay-container">
                    <BsDisplay fontSize={} />
                    <span className="landing__cg-tutorials">
                        CG Tutorials
                    </span>
                </div>
    </div>
}

export default CGCard;