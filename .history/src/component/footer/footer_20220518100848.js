import LoootyLogo from "../loootyLogo"
import {BsFacebook} from "react-icons/bs"
import {FaTwitter} from "react-icons/fa"
import {RiInstagramFill} from "react-icons/"



const Footer = () => {

    return <div className="landing__footer-inner">
                <div className="landing__footer-socials">
                    <LoootyLogo />
                    <div className="landing__socials-container">
                        <BsFacebook />
                        <FaTwitter />
                        <RiInstagramFill />

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

                <div className="landing__footer-community">
                    <h2 className="landing__footer-resources-header">
                        COMMUNITY
                    </h2>

                    <div className="landing__footer-community-list-cont">
                        <span className="landing__footer-community-list">
                            CG Tuorials
                        </span>

                        <span className="landing__footer-community-list">
                            Art draw Tuorials
                        </span>
                    </div>
                </div>

                <div className="landing__footer-company">
                    <h2 className="landing__footer-company-header">
                        COMPANY
                    </h2>

                    <div className="landing__footer-company-list-cont">
                        <span className="landing__footer-resource-list">
                            CG Tuorials
                        </span>

                        <span className="landing__footer-company-list">
                            Art draw Tuorials
                        </span>
                    </div>
                </div>

                <div className="landing__footer-news-letter">
                    <h2 className="landing__footer-news-letter-header">
                        NEWSLETTER
                    </h2>

                    <p className="landing__footer-news-letter-info">
                        Suscribe to the loooty news letter to get your weekly dose of
                        news, updates, tips and special offers.
                    </p>

                    <form className="landing__news-letter-form">
                        <div className="landing__news-letter-form-group">
                            <input className="landing__news-letter-form-control" />
                            <button className="landing__news-letter-btn">
                                <span className="landing__news-letter-btn-text">SUSCRIBE</span>
                            </button>
                        </div>
                    </form>
                </div>


        </div>
}

export default Footer