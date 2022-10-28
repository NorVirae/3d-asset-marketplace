
import NavBar from "../component/navbar/navbar"
import { useNavigate } from "react-router-dom"
import CGBar, { CGBarSlim } from "../component/card/cbBar"
import WolfGuyImg from "../assets/image/wolfguyfeather.jpg"
import {AiFillCreditCard} from "react-icons/ai"
import {FaStripeS} from "react-icons/fa"
import {SiFlutter} from "react-icons/si"
import "../styles/cart/cart.css"
import {VscTriangleUp} from "react-icons/vsc"
import { useState } from "react"
import { OrderCheckbox } from "./user"

const CartItem = ({title}) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="cart__cart-item-outer">
            <OrderCheckbox isActive={isActive} setIsActive={setIsActive} />
            <div className="cart__cart-item">
                <div className="cart__item-img-container">
                    <img className="cart__item-img" src={WolfGuyImg} alt="" />
                </div>
                <div className="cart__item-title">Beach&nbsp;House&nbsp;with&nbsp;Rumps</div>
                <div className="cart__item-license-type">Commercial&nbsp;License</div>
                <button className="cart__item-price-btn"><span style={{transform: "skewX(20deg)"}}>$&nbsp;500</span></button>
                <button className="cart__item-price-close-btn">
                    <span className="cart__item-price-close-btn-text" style={{transform: "skewX(20deg)", zIndex: "1"}}>x</span>
                    <span className="cart__cart-item-builder-close"></span>
                </button>
            </div>
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
    const [isActive, setIsActive] = useState(false)
    const [checkboxActiveItems, setCheckboxActiveItems] =  [false, false, false, false, false, false, false]
    return (
        <div className="">
            <header>
                <NavBar shortSearch={true} style={{paddingBottom: "0"}} search={true}/>
                
            </header>

            <main className="cart">
                <section className="cart__inner-container">
                    <section className="cart__items-container">
                        <div className="cart__category-container">
                            <span className="cart__cat-item">
                                <OrderCheckbox isActive={isActive} setIsActive={setIsActive} />
                                ALL
                            </span>
                            <span className="cart__cat-item product">PRODUCT</span>
                            <span className="cart__cat-item borded">LICENCE</span>
                            <span style={{border: "none"}} className="cart__cat-item">PRICE</span>
                        </div>

                        <div className="cart__cart-items-container">
                            <CartItem setCheckboxActiveItems={setCheckboxActiveItems} checkIndex={0} checkBoxActive={checkboxActiveItems[0]}/>
                            <CartItem setCheckboxActiveItems={setCheckboxActiveItems} checkIndex={1} checkBoxActive={checkboxActiveItems[1]}/>
                            <CartItem setCheckboxActiveItems={setCheckboxActiveItems} checkIndex={2} checkBoxActive={checkboxActiveItems[2]}/>
                            <CartItem setCheckboxActiveItems={setCheckboxActiveItems} checkIndex={3} checkBoxActive={checkboxActiveItems[3]}/>
                            <CartItem setCheckboxActiveItems={setCheckboxActiveItems} checkIndex={4} checkBoxActive={checkboxActiveItems[4]}/>
                            <CartItem setCheckboxActiveItems={setCheckboxActiveItems} checkIndex={5} checkBoxActive={checkboxActiveItems[5]}/>
                            <CartItem setCheckboxActiveItems={setCheckboxActiveItems} checkIndex={6} checkBoxActive={checkboxActiveItems[6]}/>

                        </div>

                        <div className="cart__calc-container">
                            <div className="cart__subtotal-container">
                                <span className="cart__subtotal-title">
                                    SUBTOTAL
                                </span>

                                <span className="cart__subtotal-title-price">
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

                                <div style={{ justifyContent: "center"}} className="buy__purchase-btn-container">
                                    <button style={{width: "40%", justifyContent: "center"}} onClick={e=>navigate("/cart")} className="buy__purchase-btn">
                                        <span style={{transform: "SkewX(20deg)"}}>PAY&nbsp;NOW </span>
                                    
                                    </button>
                                    
                                </div>

                                <p className="cart__payment-or"> OR</p>

                                <div className="cart__other-payment-options-container">
                                    <div className="cart-other-pay-inner-container">
                                        <button className="cart__other-paypal-btn">
                                            PAY&nbsp;WITH&nbsp;PAYPAL

                                        </button>
                                        <button className="cart__other-crypto-btn">
                                            PAY&nbsp;WITH&nbsp;CRYPTO

                                        </button>
                                    </div>

                                    <p className="cart__pay-caution">
                                        This should open up a pop up. Check it's not blocked
                                    </p>

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