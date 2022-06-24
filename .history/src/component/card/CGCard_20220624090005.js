import {BsDisplay} from "react-icons/bs"

const CGCard = ({img, slim}) => {
    return <div style={{border}} className="landing__cg-card">
                <img src={img} className="landing__cg-img" alt="" />
                <div style={{flexDirection: slim? "row" : "column"}} className="landing__cg-overlay-container">
                    <BsDisplay style={{fontSize: "1rem", transform: "skewX(17deg)"}} />
                    <span className="landing__cg-text">
                        CG Tutorials
                    </span>
                </div>
    </div>
}

export default CGCard;