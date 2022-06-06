import NavBar from "../component/navbar/navbar"
import {FaComment} from "react-icons/fa"
import {BsTags} from "react-icons/bs"
import {VscTriangleDown} from "react-icons/vsc"
import IdentityBtn from "../component/buttons/identityBtn"
import {AiTwotoneHeart} from "react-icons/ai"
import {GrPaypal} from 'react-icons/gr'
import {BsFacebook} from 'react-icons/bs'

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
                    <div className="buy__carousel-container">
                        <div className="buy__property-container">
                            <span className="buy__product-name">Black Panther | Character Modelling</span>
                            <div className="buy__rating-container">

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
                                            <BsFacebook /> Share
                                        </button>
                                    </div>
                                </section>
                            </section>
                        </div>

                        <div className="buy__purchase-info-container">

                        </div>
                    </div>
                </section>
            </main>

            <footer>

            </footer>
        </div>
    )
}

export default BuyPage