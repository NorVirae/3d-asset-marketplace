import NavBar from "../component/navbar/navbar"
import {FaComment} from "react-icons/fa"
import {BsTags} from "react-icons/bs"
import {VscTriangleDown} from "react-icons/vsc"
import IdentityBtn from "../component/buttons/identityBtn"
import {AiTwotoneHeart} from "react-icons/ai"
import {GrPaypal} from 'react-icons/gr'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {SiLinkedin} from 'react-icons/si'
import "../styles/buy/buy.css"
import {RiStarSFill} from "react-icons/ri"
import WolfGuyImg from "../assets/image/wolfguyfeather.jpg"
import CatmanImg from "../assets/image/catman.jpg"
import MonkeyFaceImg from "../assets/image/monkeyface.jpg"


const BuyCart = () => {
    return (
        <div className="buy__cart-buy-container">
            <div className="buy__cart-buy-header">
                Files{" (4)"} <VscTriangleDown />
            </div>

            <div className="buy__cart-purchase-main-container">
                <div className="buy__purchase-btn-container">
                    <button className="buy__purchase-btn">BUY NOW </button>
                    <button className="buy__heart-btn-container">
                        <AiTwotoneHeart />
                    </button>
                </div>
                <div className="buy__payment-methods-container">
                    <p>Payment made easy! You can pay with any of this payment system:</p>
                    <div className="buy__payment-options">
                        <GrPaypal />
                        <GrPaypal />
                        <GrPaypal />
                        <GrPaypal />
                        <GrPaypal />
                        <GrPaypal />
                        <GrPaypal />
                        <GrPaypal />
                        <GrPaypal />

                    </div>
                </div>
            </div>
        </div>
    )
}

const TagsComp = () => {
    return (
        <div className="buy__tags-container">
            <div className="buy__tag-header">
                <BsTags /> Tags <VscTriangleDown />
            </div>

            <div className="buy__tag-select">
                <button className="buy__tag-btn">3D Assets</button>
                <button className="buy__tag-btn">3D Assets</button>
                <button className="buy__tag-btn">3D Assets</button>
                <button className="buy__tag-btn">3D Assets</button>
                <button className="buy__tag-btn">3D Assets</button>
                <button className="buy__tag-btn">3D Assets</button>
                
            </div>
        </div>
    )
}

const FilePurchaseSec = () => {
    return (
        <div className="buy__file-purchase-container">
                            <div className="buy__file-info-container">
                                <section className="buy__file-attributed-container">
                                    <div className="buy__file-attributed-body">
                                        by: <span> Maria Makonnen</span>
                                        <span>in 3D assets {">"} Cartoons, Maya, Fantasy, Basemesh
                                        <img className="buy__file-attributed-img" alt=""/>

                                    </div>

                                    <div className="buy__comment-header">
                                        <IdentityBtn text={"Description"} />
                                        <div className="buy__comment-divider"></div>
                                        <span>18 comments</span>
                                    </div>

                                    <section className="buy__comment-tab-container">
                                        <div className="buy__comment-description">
                                            Here is the character model from my best-selling
                                            tutorial http://cbr.sh/hdsvy
                                            <span className="buy__read-more">
                                                ... Read more
                                            </span>
                                        </div>
                                        <div className="buy__comment-tab">

                                        </div>

                                        <TagsComp />

                                        <BuyCart />

                                        <div className="buy_socials-container">
                                            <button className="buy__social-btn">
                                                <BsFacebook /> Share
                                            </button>
                                            <button className="buy__social-btn">
                                                <AiFillTwitterCircle /> Tweet
                                            </button>
                                            <button className="buy__social-btn">
                                                <BsInstagram /> Share
                                            </button>
                                            <button className="buy__social-btn">
                                                <SiLinkedin /> Share
                                            </button>
                                        </div>
                                    </section>
                                </section>
                            </div>

                            <div className="buy__purchase-info-container">

                            </div>
                        </div>
    )
}
const CarouselSec = () => {
    return (
        <div className="buy__carousel-container">
            <div className="buy__property-container">
                <span className="buy__product-name">
                    Black Panther | Character Modelling
                </span>
                <div className="buy__rating-container">
                    <RiStarSFill style={{color: "#FF9700"}}/>
                    <RiStarSFill style={{color: "#FF9700"}}/>
                    <RiStarSFill style={{color: "#FF9700"}}/>
                    <RiStarSFill style={{color: "#FF9700"}}/>

                </div>
                <span className="buy__rating-qty">
                    79
                </span>
                <span className="buy__comments-cont">
                    <FaComment />5
                </span>
            </div>

            <section className="buy__carousel">
                <div className="buy_carousel-inner">
                    <img className="buy__carousel-img" src={MonkeyFaceImg} alt=""/>
                </div>
            </section>

            <div className="buy__carousel-preview">
                <img className="buy_carousel-preview-img" src={WolfGuyImg} alt=""/>
                <img className="buy_carousel-preview-img" src={CatmanImg} alt=""/> 
                <img className="buy_carousel-preview-img" src={MonkeyFaceImg} alt=""/> 
                <img className="buy_carousel-preview-img" src={MonkeyFaceImg} alt=""/>

            </div>
        </div>
    )
}
const BuyPage = () => {
    
    return (
        <div>
            <header>
                <NavBar search={true}/>
            </header>

            <main>
                <section className="buy__empty-divider">

                </section>

                <section className="buy__buy-preview-container">
                    <div className="buy__buy-preview-container-inner">
                        <CarouselSec />
                        <FilePurchaseSec />
                    </div>    
                </section>
            </main>

            <footer>

            </footer>
        </div>
    )
}

export default BuyPage