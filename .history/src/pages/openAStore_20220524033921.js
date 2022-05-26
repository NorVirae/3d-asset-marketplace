import { useContext } from "react"
import { RegisterContext } from "../component/auth/context/registerContext"
import OpenStoreModal from "../component/auth/openStoreModal"
import SignUpModal from "../component/auth/signUpModal"
import { IdentityBtnWithBG } from "../component/buttons/identityBtn"
import CGBar from "../component/card/cbBar"
import OddCard from "../component/card/oddcard"
import StartSelling from "../component/landing/startSelling"
import NavBar from "../component/navbar/navbar"




const OpenAStore = () => {
    const [showRegModal, setShowRegModal] = useContext(RegisterContext)

    return(
        <div className="opnstore__app-container">
             { showRegModal.register && <SignUpModal /> }
             { showRegModal.openStore && <OpenStoreModal/>}
            <header>
                <NavBar opn/>
                <CGBar />
                
                <IdentityBtnWithBG style={{backgroundColor: "#15151C"}} type={"light"} text={"Frequently Asked Questions"}/>

                <StartSelling />
                

            </header>

            <main>
                <section className="opnstore__start-selling-container">
                    <div className="opnstore__start-selling-inner-container">
                        <OddCard />

                    </div>
                </section>
            </main>

            <footer>

            </footer>
        </div>
    )
}

export default OpenAStore