import NavBar from "../component/navbar/navbar"
import {FaComment, FaPlusCircle, FaStripe, FaTimes} from "react-icons/fa"
import {BsPaypal, BsTags} from "react-icons/bs"
import {MdOutlineMoreVert} from "react-icons/md"
import {VscTriangleDown, VscTriangleUp} from "react-icons/vsc"
import IdentityBtn from "../component/buttons/identityBtn"
import {AiTwotoneHeart} from "react-icons/ai"
import {GrPaypal} from 'react-icons/gr'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillDislike, AiFillLike} from 'react-icons/ai'

import {BsInstagram} from 'react-icons/bs'
import {SiLinkedin} from 'react-icons/si'
import "../styles/buy/buy.css"
import {RiStarSFill} from "react-icons/ri"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MainTags } from "./upload"
import CarouselSec from "../component/buy/CarouselSec"
import FilePurchaseSec from "../component/buy/FilePurchaseSec"














const BuyPage = () => {
    const [descCommToggleMode, setDescCommToggleMode] = useState(true)
    const navigate = useNavigate()
    return (
        <div>
            <header>
                <NavBar shortSearch={true} search={true}/>
            </header>

            <main>
                <section className="buy__empty-divider">

                </section>

                <section className="buy__buy-preview-container">
                    <div className="buy__btn-close-back">
                        <button onClick={() =>  navigate("/") } className="buy__page-close-btn">
                            <FaTimes className="buy__page-close-btn-icon"/>
                        </button>
                    </div>
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