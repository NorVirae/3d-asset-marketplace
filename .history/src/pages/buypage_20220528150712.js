import NavBar from "../component/navbar/navbar"



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

                                <div className=""
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