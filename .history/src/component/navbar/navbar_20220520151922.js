import { Link } from "react-router-dom"
import LoginModal from "../auth/loginModal"
import LoootyLogo from "../loootyLogo"



const NavBar = () => {

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

                        <li className={"landing__nav-item"}>
                            <Link className="landing__nav-link" to={"landing__nav-link"}>
                                Sign In
                                <LoginModal />
                            </Link>
                        </li>

                        <li className={"landing__nav-item signup"}>
                            <Link className="landing__nav-link" to={"landing__nav-link"}>Sign Up</Link>
                        </li>
                    </ul>

                </nav>
    )
}

export default NavBar