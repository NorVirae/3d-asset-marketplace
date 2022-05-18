import LoootyLogo from "../loootyLogo"




const Footer = () => {

    return <div className="landing__footer-inner">
                <div className="landing__footer-socials">
                    <LoootyLogo />
                    <div className="landing__socials-container">

                    </div>

                    <div className="landing__copyright-container">

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

                </div>

                <div className="landing__footer-news-letter">

                </div>


        </div>
}

export default Footer