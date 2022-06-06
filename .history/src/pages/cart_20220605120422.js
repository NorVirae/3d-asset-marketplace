
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
                                            <li className="cart"
                                        </ul>

                                    </div>
                            </section>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Cart