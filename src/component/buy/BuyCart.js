import { AiTwotoneHeart } from "react-icons/ai"
import { BsPaypal } from "react-icons/bs"
import { FaStripe } from "react-icons/fa"
import { GrPaypal } from "react-icons/gr"
import { VscTriangleDown } from "react-icons/vsc"
import { useNavigate } from "react-router-dom"

const BuyCart = () => {
    const navigate = useNavigate()
    return (
        <div className="buy__cart-buy-container">
            <div className="buy__cart-buy-header">
                Files{" (4)"} <VscTriangleDown style={{color: "#6D6D91"}}/>
            </div>

            <div className="buy__cart-purchase-main-container">
                <div className="buy__purchase-btn-container">
                    <button onClick={e=>navigate("/cart")} className="buy__purchase-btn">
                        <span style={{transform: "SkewX(20deg)"}}>BUY NOW </span>
                        <span className="buy__btn-hover-price">
                            $500
                        </span>
                    </button>
                    <button className="buy__heart-btn-container">
                        <AiTwotoneHeart style={{transform: "SkewX(20deg)"}}/>
                    </button>
                </div>
                <div className="buy__payment-methods-container">
                    <p style={{color: "#6D6D91", fontSize: ".8rem"}}>Payment made easy! You can pay with any of this payment system:</p>
                    <div className="buy__payment-options">
                        <GrPaypal className="buy__payment-options-logos" />
                        <FaStripe className="buy__payment-options-logos" />
                        <BsPaypal className="buy__payment-options-logos" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyCart