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
import "../styles/buy/buy.c
const FilePurchaseSec
const CarouselSec = () => {
    return (
        <div className="buy__carousel-container">
            <div className="buy__property-container">
                <span className="buy__product-name">
                    Black Panther | Character Modelling
                </span>
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
                        
                    </div>    
                </section>
            </main>

            <footer>

            </footer>
        </div>
    )
}

export default BuyPage