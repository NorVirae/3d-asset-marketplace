import NavBar from "../component/navbar/navbar"
import {FaComment} from "react-icons/FaComment"


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

                        <div className="buy__carousel">

                        </div>

                        <div className="buy__carousel-preview">

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
                                    
                                </div>
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