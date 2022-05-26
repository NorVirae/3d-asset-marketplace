import { useContext, useEffect, useState } from "react"
import { RegisterContext } from "../component/auth/context/registerContext"
import OpenStoreModal from "../component/auth/openStoreModal"
import SignUpModal from "../component/auth/signUpModal"
import { IdentityBtnWithBG } from "../component/buttons/identityBtn"
import CGBar from "../component/card/cbBar"
import OddCarousel from "../component/carousel/oddCarousel"
import StartSelling from "../component/landing/startSelling"
import NavBar from "../component/navbar/navbar"


const divider = () => {
    return <div className="opnstore__divider">

    </div>
}

const OpenAStore = () => {
    const [showRegModal, setShowRegModal] = useContext(RegisterContext)
    const [oddActive, setOddActive] = useState(1)
    

    return(
        <div className="opnstore__app-container">
             { showRegModal.register && <SignUpModal /> }
             { showRegModal.openStore && <OpenStoreModal/>}
            <header>
                <NavBar style={{paddingBottom: "0"}} openStore={true}/>
                <CGBar slim={true}/>
                
                <IdentityBtnWithBG style={{backgroundColor: "#15151C"}} type={"light"} text={"Frequently Asked Questions"}/>

                <StartSelling />
                

            </header>

            <main>
                <OddCarousel />

                <section className="opnstore__steps-container">
                    <div className="opnstore__steps-first-layer">
                        <div className="opnstore_step-divider"></div>
                        <div className="opnstore__steps-item">
                            <h2 className="opnstore__step-item-header">
                                Control over your product
                            </h2>


                            <p className="opnstore__step-item-desc">
                                Easiest platform to get started on and completely free.
                            </p>
                        </div>

                        <div className="opnstore__steps-item">
                            <h2 className="opnstore__step-item-header">
                                Track how you are doing
                            </h2>


                            <p className="opnstore__step-item-desc">
                                With powerful analytics at your disposal,
                                it's easy to see how well you are doing
                                and plan for your future of riches.
                            </p>
                        </div>
                    </div>

                    <div className="opnstore__steps-second-layer">
                        <div className="opnstore__steps-item opnstore__step-slant">
                            <h2 style={{transform: "skewX(18deg)"}} className="opnstore__step-item-header">
                                Get paid Often
                            </h2>


                            <p style={{transform: "skewX(18deg)"}} className="opnstore__step-item-desc">
                                Payouts are on the 1st and 15th of each month
                                as long as you reach a balance of $20 for that period.
                                get paid via paypal or wire transfer (some conditions apply)

                            </p>
                        </div>
                    </div>
                </section>

                <section className="opnstore__faq-sec">
                    <div className="opnstore__faq-sec-inner">
                        <div className="opnstore__faq-qa">
                            <h2>How can i open a shop on Loooty?</h2>
                            <p>
                                if you head over to the Open a Store page you'll learn all about why you'll
                                love selling your art resources and assets on Loooty.mn 
                            </p>

                        </div>
                    </div>
                </section>
            </main>

            <footer>

            </footer>
        </div>
    )
}

export default OpenAStore