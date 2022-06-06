
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
                            <div className="cart__ form-group">
                                <div className="cart__form-control-skew">
                                    <input className="cart__form-control"
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Cart