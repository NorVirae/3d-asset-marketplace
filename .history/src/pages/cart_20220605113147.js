
import NavBar from "../component/navbar/navbar"



const Cart = () => {

    return (
        <div className="cart">
            <header>
                <NavBar search={true} />
            </header>

            <main>
                <section className="cart__items-container">

                </section>

                <section className="cart__payment-container">
                    
                </section>
            </main>
        </div>
    )
}

export default Cart