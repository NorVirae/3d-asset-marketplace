import { FaComment } from "react-icons/fa"
import { RiStarSFill } from "react-icons/ri"


const WolfGuyImg = "/assets/image/wolfguyfeather.jpg"
const CatmanImg = "/assets/image/catman.jpg"
const MonkeyFaceImg = "/assets/image/monkeyface.jpg"

const CarouselSec = () => {
    return (
        <div className="buy__carousel-container">
            <div className="buy__property-container">
                    <div className="buy__product-name">
                        Black Panther <span> | Character Modelling</span>
                    </div>
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

            <section className="upload__image-preview">
            
                        <div className="upload__image-preview-inner">
                            <div className="upload__image-item">
                                <img className="buy_carousel-preview-img" src={WolfGuyImg} alt=""/>
                            </div>

                            <div className="upload__image-item">
                                <img className="buy_carousel-preview-img" src={CatmanImg} alt=""/> 
                            </div>
                            <div className="upload__image-item">
                                <img className="buy_carousel-preview-img" src={MonkeyFaceImg} alt=""/> 
                            </div>
                            <div className="upload__image-item">
                                <img className="buy_carousel-preview-img" src={MonkeyFaceImg} alt=""/> 
                            </div>
                            <div className="upload__image-item">
                                <img className="buy_carousel-preview-img" src={MonkeyFaceImg} alt=""/> 
                            </div>
                        </div>   
                    </section>
        </div>
    )
}

export default CarouselSec