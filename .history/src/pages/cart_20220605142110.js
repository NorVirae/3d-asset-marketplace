
import NavBar from "../component/navbar/navbar"
import {AiTwotoneHeart} from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import CGBar from "../component/card/cbBar"
import WolfGuyImg from "../assets/image/wolfguyfeather.jpg"


const Cart = () => {
    const navigate = useNavigate()
    return (
        <div className="cart">
            <header>
                <NavBar style={{paddingBottom: "0"}} search={true}/>
                <div style={{backgroundColor: "#15151C", padding: "0px"}}>
                    <CGBar slim={true}/>
                </div>
            </header>

            <main>
                <section className="cart__items-container">
                    <div className="cart__category-container">
                        <span>ALL</span>
                        <span>PRODUCT</span>
                        <span>LICENCE</span>
                        <span>PRICE</span>
                    </div>

                    <div className="cart__cart-items-container">
                        <div>
                            <img src={} alt="" />
                        </div>
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
                                    <span style={{transform: "SkewX(20deg)"}}>PAY NOW </span>
                                   
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