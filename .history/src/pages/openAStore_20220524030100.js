import { useContext } from "react"
import { RegisterContext } from "../component/auth/context/registerContext"
import OpenStoreModal from "../component/auth/openStoreModal"
import SignUpModal from "../component/auth/signUpModal"
import IdentityBtn from "../component/buttons/identityBtn"
import StartSelling from "../component/landing/startSelling"
import NavBar from "../component/navbar/navbar"




const OpenAStore = () => {
    const [showRegModal, setShowRegModal] = useContext(RegisterContext)

    return(
        <div className="opnstore__app-container">
             { showRegModal.register && <SignUpModal /> }
             { showRegModal.openStore && <OpenStoreModal/>}
            <header>
                <NavBar />
                <section className="opnstore__faq">
                    <div className=""
                    <IdentityBtn text={"Frequently Asked Questions"}/>
                </section>
                <StartSelling />
                

            </header>

            <main>
                hello
            </main>

            <footer>

            </footer>
        </div>
    )
}

export default OpenAStore