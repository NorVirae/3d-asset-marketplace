import NavBar from "../component/navbar/navbar"
import {FaComment} from "react-icons/fa"
import {BsTags} from "react-icons/bs"
import {VscTriangleDown} from "react-icons/vsc"
import IdentityBtn from "../component/buttons/identityBtn"


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

                                    <div className="buy__tags-container">
                                        <div className="buy__tag-header">
                                            Files() <VscTriangleDown />
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