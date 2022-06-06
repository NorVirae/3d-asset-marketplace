
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

                    <div className="cart__calc-contai"
                </section>

                <section className="cart__payment-gateway-container">
                    
                </section>
            </main>
        </div>
    )
}

export default Cart