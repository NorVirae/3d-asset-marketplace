import { useContext } from "react"
import { RegisterContext } from "../component/auth/context/registerContext"
import NavBar from "../component/navbar/navbar"




const OpenAStore = () => {
    const [showRegModal, setShowRegModal] = useContext(RegisterContext)

    return(
        <div className="opstore__app-container">
             { showRegModal.register && <SignUpModa /> }
             { showRegModal.openStore && <OpenStoreModal/>}
            <header>
                <NavBar />
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