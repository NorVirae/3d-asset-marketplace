
import NavBar from "../component/navbar/navbar"



const Cart = () => {

    return (
        <div className="cart">
            <header>
                <NavBar search={true} />
            </header>

            <main>
                <section className="cart__items-container">
                    <div className="cart__category-container">

                    </div>

                    <div className="cart__cart-items-container">

                    </div>

                    <div className="cart__calc-container">

                    </div>
                </section>

                <section className="cart__payment-gateway-container">
                    <div className="cart__gateway-options-container">
                        <form className="cart__card-insertion-container">
                            <section className="cart__form-group">
                                <div className="cart__form-control-skew">
                                    <input className="cart__form-control" placeholder="Card Number"/>
                                </div>
                            </section>

                            <div className="cart__form-double-group">
                                <section className="cart__form-group">
                                    <div className="cart__form-control-skew">
                                        <input className="cart__form-control" placeholder="Card Number"/>
                                    </div>
                                </section>

                                <section className="cart__form-group">
                                    <div className="cart__form-control-skew">
                                        <input className="cart__form-control" placeholder="Card Number"/>
                                    </div>
                                </section>
                            </div>

                            <section className="cart__form-group">
                                    <div className="cart__form-control-skew">
                                        <ul className="cart__country-select">
                                            <li className="cart__country-select-item">
                                                Nigeria
                                            </li>
                                        </ul>

                                    </div>
                            </section>

                            <div className="buy__purchase-btn-container">
                                <button onClick={e=>navigate("/cart")} className="buy__purchase-btn">
                                    <span style={{transform: "SkewX(20deg)"}}>BUY NOW </span>
                                    <span className="buy__btn-hover-price">
                                        $500
                                    </span>
                                </button>
                                <button className="buy__heart-btn-container">
                                    <AiTwotoneHeart style={{transform: "SkewX(20deg)"}}/>
                    </button>
                </div>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Cart