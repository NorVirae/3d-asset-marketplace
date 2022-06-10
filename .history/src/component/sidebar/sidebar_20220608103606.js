import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { RegisterContext } from "../auth/context/registerContext"
import LoginModal from "../auth/loginModal"
import IdentityBtn from "../buttons/identityBtn"
import LoootyLogo from "../loootyLogo"
import "./sidebar.css"


const Sidebar = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegModal, setShowRegModal] = useContext(RegisterContext)
    const navigate = useNavigate()
    return (
        <section>
            <section className="sidebar__auth-sec">
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
            </section>

            <section className="sidebar__tags">
                <IdentityBtn />
                <IdentityBtn />

                <IdentityBtn />

                <IdentityBtn />

                <IdentityBtn />

                <IdentityBtn />

            </section>

            <section className="sidebar__footer">
                <div className="sidebar__top">
                    <LoootyLogo />
                    About
                </div>

                <ul className="sidebar__middle">
                    <li>news</li>
                </ul>
            </section>

        </section>
    )
}

export default Sidebar