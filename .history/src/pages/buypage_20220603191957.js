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
                                    <img className="buy__file-attributed-img" alt=""/>
                                    <div className="buy__file-attributed-body">
                                        by: <span> Maria Makonnen</span>
                                        in 3D assets {">"} Cartoons, Maya, Fantasy, Basemesh
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
                    <https://rr2---sn-p5qddn7z.googlevideo.com/videoplayback?expire=1654301851&ei=O1CaYsv-L-KQ2LYPpMaJmA0&ip=3.83.188.98&id=o-AIxU1JhWOgIAFvduutRrgkogbGA16sML96E7apUF6pc_&itag=22&source=youtube&requiressl=yes&mh=kP&mm=31%2C26&mn=sn-p5qddn7z%2Csn-ab5sznz6&ms=au%2Conr&mv=m&mvi=2&pl=17&initcwndbps=885000&vprv=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=8086.836&lmt=1649244391274197&mt=1654279990&fvip=3&fexp=24001373%2C24007246&c=ANDROID&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgH8kxG-RcSCRp7bJ9yyskolyf4q6EHTci88sI_7ur5_MCIBM8kWNob8SYGVqRG1eMmFJTz39zAYg8HfD5uQjU__b8&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgVWg7hhWlECekoEla0-4sFxOlMALFPMcq4GPTg_1b3jYCIDfEgDayakSfaqOG2uzFNXYvi8FJgKVgH7lQs3B5h3i-&title=Coldplay+Greatest+Hits+Full+Album+2022+%7C+Best+Songs+of+Coldplay+2022
                </div>
                <span className="buy__rating-qty">
                    79
                </span>
                <span>
                <FaComment />5
                </span>
            </div>

            <section className="buy__carousel">
                <div className="buy_carousel-inner">
                    <img src="#" alt=""/>
                </div>
            </section>

            <div className="buy__carousel-preview">
                <img src="#" alt=""/>
                <img src="#" alt=""/>    
            </div>
        </div>
    )
}
const BuyPage = () => {
    
    return (
        <div>
            <header>
                <NavBar />
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