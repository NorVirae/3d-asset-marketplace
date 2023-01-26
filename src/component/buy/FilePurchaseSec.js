import { AiFillTwitterCircle } from "react-icons/ai"
import { BsFacebook, BsInstagram } from "react-icons/bs"
import { SiLinkedin } from "react-icons/si"
import IdentityBtn from "../buttons/identityBtn"
import BuyCart from "./BuyCart"
import CommentSec from "./CommentSec"
import TagsComp from "./TagsComp"

const CatmanImg = "/assets/image/catman.jpg"
const FilePurchaseSec = ({descCommToggleMode, setDescCommToggleMode}) => {
    return (
        <div className="buy__file-purchase-container">
            <div className="buy__file-info-container">
                <section className="buy__file-attributed-container">
                    <div className="buy__file-attributed-body">
                        <img src={CatmanImg} className="buy__file-attributed-img" alt=""/>
                        <span>by: <span style={{color: "#FF9700", fontSize: "1rem"}}> Maria Makonnen</span></span>
                        <span>in 3D assets {">"} Cartoons, Maya, Fantasy, Basemesh</span>
                    </div>

                    <div className="buy__comment-header">
                        <IdentityBtn onClick={e=>setDescCommToggleMode(true)} style={{backgroundColor: descCommToggleMode?"#232230": "#15151C", borderLeft:`.5rem solid ${descCommToggleMode?"#7C187A": "#232230"}`, padding:".5rem 4rem"}} text={"Description"} />
                        <IdentityBtn onClick={e=>setDescCommToggleMode(false)} style={{backgroundColor: !descCommToggleMode?"#232230": "#15151C", borderLeft:`.5rem solid ${!descCommToggleMode?"#7C187A": "#232230"}`, padding:".5rem 4rem"}} text={"18 comments"} />
                    </div>

                    {descCommToggleMode?
                    <section className="buy__comment-tab-container">
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

                        <div className="buy__copy-url-form">
                            <div className="buy__copy-url-form-group">
                                <input placeholder="https://loooty.com/dcbucj3/283hbcjdc.blend" className="buy__copy-url-form-control" />
                                <button className="buy__copy-url-btn">
                                    <span className="buy__copy-url-btn-text">Copy</span>
                                </button>
                            </div>
                        </div>
                    </section>: <CommentSec />}
                </section>
            </div>

            <div className="buy__purchase-info-container">

            </div>
        </div>
    )
}

export default FilePurchaseSec