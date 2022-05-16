import {BsDisplay} from "react-icons/bs"

const CGCard = ({img}) => {
    return <div className="landing__cg-card">
                <img src={img} alt="" />
                <div className="landing__cg-overlay-container">
                    <BsDisplay />
                </div>
    </div>
}