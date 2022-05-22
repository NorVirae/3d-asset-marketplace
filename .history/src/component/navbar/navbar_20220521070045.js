import { useState } from "react"
import { Link } from "react-router-dom"
import LoginModal from "../auth/loginModal"
import SignUpModal from "../auth/signUpModal"
import LoootyLogo from "../loootyLogo"



const NavBar = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)


    return (
        <nav className="landing__navbar">
                    <Link className="landing__navbar-brand" to = "/"><LoootyLogo /></Link>

                    <ul className="landing__navbar-inner-container">
                        <li className={"landing__nav-item"}>
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

                        <li onClick={e=>setShowRegister(!showRegister)} className={"landing__nav-item signup"}>
                            <Link className="landing__nav-link" to={"#"}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>

                </nav>
    )
}

export default NavBar