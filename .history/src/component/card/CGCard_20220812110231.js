import {BsDisplay} from "react-icons/bs"

const CGCard = ({img, slim, text, textStyle}) => {
    return <div className="landing__cg-card">
                <img src={img} className="landing__cg-img" alt="" />
                <div style={{flexDirection: slim? "row" : "column"}} className="landing__cg-overlay-container">
                    <BsDisplay style={{fontSize: "2rem", transform: "skewX(17deg)"}} />
                    <span style={textStyle} className="landing__cg-text">
                        {text}
                    </span>
                </div>
    </div>
}

export const CGCardSlim = ({img, text, textStyle, logoStyle}) => {
    return <div className="landing__cg-card-slim">
                <img src={img} className="landing__cg-img-slim" alt="" />
                <div className="landing__cg-overlay-container-slim">
                    <BsDisplay style={{fontSize: "5rem", transform: "skewX(17deg)"}} />
                    <span style={textStyle} className="landing__cg-text-slim">
                       {text}
                    </span>
                </div>
    </div>
}
export default CGCard;