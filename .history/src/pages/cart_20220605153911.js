
import NavBar from "../component/navbar/navbar"
import {AiTwotoneHeart} from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import CGBar from "../component/card/cbBar"
import WolfGuyImg from "../assets/image/wolfguyfeather.jpg"
import "../styles/cart/cart.css"


const CartItem = () => {
    return (
        <div className="cart__cart-item">
            <img className="cart__item-img" src={WolfGuyImg} alt="" />
            <div className="cart__item-title">Beach House with Rumps</div>
            <div className="cart__item-license-type">Commercial License</div>
            <button className="cart__item-price-btn"><span style={{}}>$ 500</span></button>
            <button className="cart__item-price-close-btn">x</button>
        </div>
    )
}

const Cart = () => {
    const navigate = useNavigate()
    return (
        <div className="">
            <header>
                <NavBar style={{paddingBottom: "0"}} search={true}/>
                <div style={{backgroundColor: "#15151C", display: "flex", alignItems: "center", height: "5vh", padding: "0px"}}>
                    <CGBar style={{margin: "1rem auto"}} slim={true}/>
                </div>
            </header>

            <main className="cart">
                <section className="cart__inner-container">
                    <section className="cart__items-container">
                        <div className="cart__category-container">
                            <span className="cart__cat-item">ALL</span>
                            <span className="cart__cat-item">PRODUCT</span>
                            <span className="cart__cat-item">LICENCE</span>
                            <span style={{border: "none"}} className="cart__cat-item">PRICE</span>
                        </div>

                        <div className="cart__cart-items-container">
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />

                        </div>

                        <div className="cart__calc-container">
                            <div className="cart__subtotal-container">
                                <span className="cart__subtotal-title">
                                    SUBTOTAL
                                </span>

                                <span className="cart__subtotal-title">
                                    $1,500
                                </span>
                            </div>
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
                                        <span style={{transform: "SkewX(20deg)"}}>PAY NOW </span>
                                    
                                    </button>
                                    
                                </div>
                            </form>
                        </div>
                    </section>
                </section>
            </main>
        </div>
    )
}

export default Cart