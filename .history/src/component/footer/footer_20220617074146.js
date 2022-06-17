import LoootyLogo from "../loootyLogo"
import {BsFacebook, BsLinkedin} from "react-icons/bs"
import {FaTwitter} from "react-icons/fa"
import {RiInstagramFill} from "react-icons/ri"


export const SuscribeInput = () => {
    return (
        <form className="landing__news-letter-form">
            <div className="landing__news-letter-form-group">
                <input className="landing__news-letter-form-control" />
                <button className="landing__news-letter-btn">
                    <span className="landing__news-letter-btn-text">SUSCRIBE</span>
                </button>
            </div>
        </form>
    )
}

const Footer = () => {

    return <div className="landing__footer-inner">
                <div className="landing__footer-socials">
                    <LoootyLogo style={{height: "60px"}}/>
                    <div className="landing__socials-container">
                        <RiInstagramFill style={{fontSize: "1.5rem", padding: ".2rem", borderRadius: ".4rem", color:"white", backgroundColor: "#D22D89"}}/>
                        <FaTwitter style={{fontSize: "1.5rem", padding: ".2rem", borderRadius: ".4rem", color:"#54ABEE", backgroundColor: "transparent"}}/>
                        <BsFacebook style={{fontSize: "1.5rem", padding: ".2rem", borderRadius: ".4rem", color:"white", backgroundColor: "#3B5997"}}/>
                        <BsLinkedin style={{fontSize: "1.5rem", padding: ".2rem", borderRadius: ".4rem", color:"white", backgroundColor: "#3B5997"}}/>

                    </div>

                    <div className="landing__copyright-container">
                        2022 {"(c)"} Loooty.com. All rights reserved.
                    </div>

                </div>

                <div className="landing__footer-resources">
                    <h2 className="landing__footer-resources-header">
                        RESOURCES
                    </h2>

                    <div className="landing__footer-resources-list-cont">
                        <span className="landing__footer-resource-list">
                            CG Tuorials
                        </span>

                        <span className="landing__footer-resource-list">
                            Art draw Tuorials
                        </span>
                    </div>
                </div>

                <div className="landing__footer-resources">
                    <h2 className="landing__footer-resources-header">
                        COMMUNITY
                    </h2>

                    <div className="landing__footer-resources-list-cont">
                        <span className="landing__footer-resource-list">
                            CG Tuorials
                        </span>

                        <span className="landing__footer-resource-list">
                            Art draw Tuorials
                        </span>

                        <span className="landing__footer-resource-list">
                            CG Tuorials
                        </span>

                        <span className="landing__footer-resource-list">
                            Art draw Tuorials
                        </span>

                        <span className="landing__footer-resource-list">
                            CG Tuorials
                        </span>

                        <span className="landing__footer-resource-list">
                            Art draw Tuorials
                        </span>

                        <span className="landing__footer-resource-list">
                            CG Tuorials
                        </span>

                        <span className="landing__footer-resource-list">
                            Art draw Tuorials
                        </span>
                    </div>
                </div>

                <div className="landing__footer-resources">
                    <h2 className="landing__footer-resources-header">
                        COMPANY
                    </h2>

                    <div className="landing__footer-resources-list-cont">
                        <span className="landing__footer-resource-list">
                            CG Tuorials
                        </span>

                        <span className="landing__footer-resource-list">
                            Art draw Tuorials
                        </span>

                        <span className="landing__footer-resource-list">
                            Art draw Tuorials
                        </span>

                        <span className="landing__footer-resource-list">
                            Art draw Tuorials
                        </span>

                        <span className="landing__footer-resource-list">
                            Art draw Tuorials
                        </span>

                        <span className="landing__footer-resource-list">
                            Art draw Tuorials
                        </span>
                    </div>
                </div>

                <div className="landing__footer-news-letter">
                    <h2 className="landing__footer-news-letter-header">
                        NEWSLETTER
                    </h2>

                    <p className="landing__footer-news-letter-info">
                        <p>Suscribe to the loooty news letter to get your weekly dose of
                        news,</p>
                        <p> updates, tips and special offers.</p>
                    </p>

                    <SuscribeInput />
                </div>


        </div>
}

export default Footer