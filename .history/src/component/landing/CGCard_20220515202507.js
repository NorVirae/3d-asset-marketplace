import {BsDisplay} from "react-icons/bs"

const CGCard = ({img}) => {
    return <div className="landing__cg-card">
                <img src={img} className="landing" alt="" />
                <div className="landing__cg-overlay-container">
                    <BsDisplay />
                    <span className="landing__cg-tutorials">
                        CG Tutorials
                    </span>
                </div>
    </div>
}

export default CGCard;