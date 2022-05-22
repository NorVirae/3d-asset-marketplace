import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { RegisterContext } from "../auth/context/registerContext"
import LoginModal from "../auth/loginModal"
import SignUpModal from "../auth/signUpModal"
import LoootyLogo from "../loootyLogo"



const NavBar = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const [showRegModal, setShowRegModal] = useContext(RegisterContext)



    return (
        <nav className="landing__navbar">
                    <Link className="landing__navbar-brand" to = "/">
                        <LoootyLogo style={{height: "10px"}}/></Link>

                    <ul className="landing__navbar-inner-container">
                        <li onClick={e=>setShowRegModal({...showRegModal, openStore:!showRegModal.openStore})} className={"landing__nav-item"}>
                            <Link className="landing__nav-link" to={"#"}>Open a Store</Link>
                        </li>

                        <li className={"landing__nav-item"}>
                            <Link className="landing__nav-link" to={"#"}>Help</Link>
                        </li>

                        <li onClick={e=>setShowLogin(!showLogin)} className={"landing__nav-item login"}>
                            <Link className="landing__nav-link" to={"#"}>
                                Sign In
                            </Link>
                            {showLogin &&<LoginModal onClick={e=>e.stopPropagation()}/>}

                        </li>

                        <li onClick={e=>setShowRegModal({...showRegModal, register:!showRegModal.register})} className={"landing__nav-item signup"}>
                            <Link className="landing__nav-link" to={"#"}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>

                </nav>
    )
}

export default NavBar