import NavBar from "../component/navbar/navbar"
import {FaComment} from "react-icons/fa"
import {BsTags} from "react-icons/bs"
import {VscTriangleDown, VscTriangleUp} from "react-icons/vsc"
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
import { useState } from "react"



const Comment = ({comment="Hey there am commenting", author="Leo - Art Joourney"}) => {
    return (
        <div className="buy__comm-container">
            <div className="buy__comm-first-layer">
                <div>
                    {author}
                </div>

                <button>Customers</button>
                <div className="buy__rating-container">
                    <RiStarSFill style={{color: "#FF9700"}}/>
                    <RiStarSFill style={{color: "#FF9700"}}/>
                    <RiStarSFill style={{color: "#FF9700"}}/>
                    <RiStarSFill style={{color: "#FF9700"}}/>

                </div>

                <div>11th Feb, 2022</div>
                    <RiStarSFill style={{color: "#FF9700"}}/>

                <div>

                </div>
            </div>

            <div className="buy__main-comm">
                {comment}
            </div>

            <div className="buy__reactions-container">
                <div className="buy__like-cont">
                    54
                </div>

                <div className="buy__dislike-cont">
                    12
                </div>

                <span className=""> reply</span>
            </div>

        </div>
    )
}
const CommentSec = () =>{
    return (
        <div className="buy__comments-main-container">
            <div className="buy__send-comment-container">
                <div className="buy__user-profile-comment">
                    <img className="buy__user-profile-img" src={WolfGuyImg} alt="user profile"/>
                </div>
                <form className="buy__copy-url-form">
                    <div className="buy__copy-url-form-group">
                        <input placeholder="write your comment" className="buy__copy-url-form-control" />
                        <button className="buy__copy-url-btn">
                            <span className="buy__copy-url-btn-text">Send</span>
                        </button>
                    </div>
                </form>
            </div>

            <div className="buy__comments-listing-container">
                <Comment />
                <Comment />
                <Comment />

            </div>
        </div>
    )
}

const BuyCart = () => {
    return (
        <div className="buy__cart-buy-container">
            <div className="buy__cart-buy-header">
                Files{" (4)"} <VscTriangleDown style={{color: "#6D6D91"}}/>
            </div>

            <div className="buy__cart-purchase-main-container">
                <div className="buy__purchase-btn-container">
                    <button className="buy__purchase-btn">
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
                        <GrPaypal className="buy__payment-options-logos" />
                        <GrPaypal className="buy__payment-options-logos" />
                        <GrPaypal className="buy__payment-options-logos" />
                        <GrPaypal className="buy__payment-options-logos" />
                        <GrPaypal className="buy__payment-options-logos" />
                        <GrPaypal className="buy__payment-options-logos" />
                        <GrPaypal className="buy__payment-options-logos" />
                        <GrPaypal className="buy__payment-options-logos" />

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
                <BsTags style={{color: '#FF9700'}}/> Tags <VscTriangleUp style={{color: '#6D6D91'}}/>
            </div>

            <div className="buy__tag-select">
                <button className="buy__tag-btn">3D&nbsp;Assets</button>
                <button className="buy__tag-btn">3D&nbsp;Assets</button>
                <button className="buy__tag-btn">3D&nbsp;Assets</button>
                <button className="buy__tag-btn">3D&nbsp;Assets</button>
                <button className="buy__tag-btn">3D&nbsp;Assets</button>
                <button className="buy__tag-btn">3D&nbsp;Assets</button>
                
            </div>
        </div>
    )
}

const FilePurchaseSec = ({descCommToggleMode, setDescCommToggleMode}) => {
    return (
        <div className="buy__file-purchase-container">
            <div className="buy__file-info-container">
                <section className="buy__file-attributed-container">
                    <div className="buy__file-attributed-body">
                        <img src={CatmanImg} className="buy__file-attributed-img" alt=""/>
                        <span>by: <span style={{color: "white", fontSize: "1rem"}}> Maria Makonnen</span></span>
                        <span>in 3D assets {">"} Cartoons, Maya, Fantasy, Basemesh</span>
                    </div>

                    <div className="buy__comment-header">
                        <IdentityBtn onClick={e=>setDescCommToggleMode(true)} style={{backgroundColor: descCommToggleMode?"#232230": "#15151C", borderLeft:`.5rem solid ${descCommToggleMode?"#7C187A": "#232230"}`, padding:".5rem 4rem"}} text={"Description"} />
                        <IdentityBtn onClick={e=>setDescCommToggleMode(false)} style={{backgroundColor: !descCommToggleMode?"#232230": "#15151C", borderLeft:`.5rem solid ${!descCommToggleMode?"#7C187A": "#232230"}`, padding:".5rem 4rem"}} text={"18 comments"} />
                    </div>

                    {descCommToggleMode?<section className="buy__comment-tab-container">
                        <div className="buy__comment-description">
                            Here is the character model from my best-selling
                            tutorial http://cbr.sh/hdsvy made by me -ex senior artist blizzard
                            <span className="buy__read-more">
                                ... Read more
                            </span>
                        </div>
                        {/* <div className="buy__comment-tab">

                        </div> */}

                        <TagsComp />

                        <BuyCart />

                        <div className="buy_socials-container">
                            <button style={{backgroundColor: "#3B5997"}} className="buy__social-btn">
                                <BsFacebook className="buy__socials-logo"/> Share
                            </button>
                            <button style={{backgroundColor: "#54ABEE"}} className="buy__social-btn">
                                <AiFillTwitterCircle className="buy__socials-logo" /> Tweet
                            </button>
                            <button style={{background: "linear-gradient(to right, #5A55CD, #BB2A97, #F87526, #FBA94A )"}} className="buy__social-btn">
                                <BsInstagram className="buy__socials-logo"/> Share
                            </button>
                            <button style={{backgroundColor: "#3B5997"}} className="buy__social-btn">
                                <SiLinkedin className="buy__socials-logo"/> Share
                            </button>
                        </div>

                        <form className="buy__copy-url-form">
                            <div className="buy__copy-url-form-group">
                                <input placeholder="https://loooty.com/dcbucj3/283hbcjdc.blend" className="buy__copy-url-form-control" />
                                <button className="buy__copy-url-btn">
                                    <span className="buy__copy-url-btn-text">Copy</span>
                                </button>
                            </div>
                        </form>
                    </section>: <CommentSec />}
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
    const [descCommToggleMode, setDescCommToggleMode] = useState(true)
    
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
                        
                        <FilePurchaseSec descCommToggleMode={descCommToggleMode} setDescCommToggleMode={setDescCommToggleMode} />                    
                    </div>    
                </section>
            </main>

            <footer>

            </footer>
        </div>
    )
}

export default BuyPage