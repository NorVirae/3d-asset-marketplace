
import NavBar from "../component/navbar/navbar"
import { useNavigate } from "react-router-dom"
import CGBar from "../component/card/cbBar"
import WolfGuyImg from "../assets/image/wolfguyfeather.jpg"
import {AiFillCreditCard} from "react-icons/ai"
import {FaStripeS} from "react-icons/fa"
import {SiFlutter} from "react-icons/si"
import "../styles/cart/cart.css"
import {VscTriangleUp} from "react-icons/vsc"
import { useState } from "react"

const CartItem = () => {
    return (
        <div className="cart__cart-item">
            <img className="cart__item-img" src={WolfGuyImg} alt="" />
            <div className="cart__item-title">Beach House with Rumps</div>
            <div className="cart__item-license-type">Commercial License</div>
            <button className="cart__item-price-btn"><span style={{transform: "skewX(20deg)"}}>$ 500</span></button>
            <button className="cart__item-price-close-btn">
                <span style={{transform: "skewX(20deg)", zIndex: "1"}}>x</span>
                <span className="cart__cart-item-builder-close"></span>
            </button>
        </div>
    )
}

const CustomSelect = () => {
    const [selectToggle, setSelectToggle] = useState(false)
    return (
        <div className="cart__form-select-skew">
            <div onClick={e=>setSelectToggle(!selectToggle)} className="cart__select-preview">
                Nigeria
                <VscTriangleUp className="cart__form-arrow" style={{color: '#6D6D91', transform: selectToggle? "rotate(0deg)": "rotate(180deg)"}}/>
            </div>
            {selectToggle?
                <ul className="cart__country-select">
                    <li className="cart__country-select-item">
                        Nigeria
                    </li>
                </ul>: null
            }

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
                            <section className="cart__payment-type">
                                <div className="cart__payment-type-btn cart__payment-type-btn-selected">
                                    <AiFillCreditCard /> Card
                                </div>

                                <div className="cart__payment-type-btn">
                                   <FaStripeS /> Stripe
                                </div>

                                <div className="cart__payment-type-btn">
                                    <SiFlutter />Flutterwave
                                </div>
                            </section>

                            <form className="cart__card-insertion-container">
                                <section className="cart__form-group">
                                    <label className="cart__form-label">Card Number</label>
                                    <div className="cart__form-control-skew">
                                        <AiFillCreditCard className="cart__form-card-logo"/>
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
                                            <AiFillCreditCard className="cart__form-card-logo"/>
                                            <input className="cart__form-control" placeholder="Card Number"/>
                                        </div>
                                    </section>
                                </div>

                                <section className="cart__form-group">
                                        <CustomSelect />
                                </section>

                                <div className="buy__purchase-btn-container">
                                    <button style={{width: "60%", justifyContent: "center"}} onClick={e=>navigate("/cart")} className="buy__purchase-btn">
                                        <span style={{transform: "SkewX(20deg)"}}>PAY&nbsp;NOW </span>
                                    
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