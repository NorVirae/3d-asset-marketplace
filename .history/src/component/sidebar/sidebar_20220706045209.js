import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { RegisterContext } from "../auth/context/registerContext"
import LoginModal from "../auth/loginModal"
import IdentityBtn from "../buttons/identityBtn"
import LoootyLogo from "../loootyLogo"
import { FaMailBulk, FaTwitter } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaQq } from "react-icons/fa"
import { FaTerminal } from "react-icons/fa"
import { FaPrint } from "react-icons/fa"







const Sidebar = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegModal, setShowRegModal] = useContext(RegisterContext)
    const navigate = useNavigate()
    return (
        <section className="sidebar">
            <section className="sidebar__auth-sec">
                <li style={{width: "100%"}} onClick={e=>setShowLogin(!showLogin)} className={"landing__nav-item login"}>
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
    
                <IdentityBtn style={{width: "100%", borderLeft: `1rem solid #7C187A`}} text={"WEEKLY FREEBIES"}/>
                <IdentityBtn style={{width: "100%", borderLeft: `1rem solid #353449`}} text={"WEEKLY FREEBIES"}/>
                <IdentityBtn style={{width: "100%", borderLeft: `1rem solid #353449`}} text={"WEEKLY FREEBIES"}/>
                <IdentityBtn style={{width: "100%", borderLeft: `1rem solid #353449`}} text={"WEEKLY FREEBIES"}/>
                <IdentityBtn style={{width: "100%", borderLeft: `1rem solid #353449`}} text={"WEEKLY FREEBIES"}/>
                <IdentityBtn style={{width: "100%", borderLeft: `1rem solid #353449`}} text={"WEEKLY FREEBIES"}/>

                
            </section>

            <section className="sidebar__footer">
                <div className="sidebar__top">
                    <LoootyLogo />
                    About
                </div>

                <ul className="sidebar__socials">
                    <li className="sidebar__socials-item"><FaMailBulk/>Newsletter</li>
                    <li className="sidebar__socials-item"><FaFacebook/>Facebook</li>

                    <li className="sidebar__socials-item"><FaInstagramSquare/>Instagram</li>

                    <li className="sidebar__socials-item"><FaTwitter/>Twitter</li>

                </ul>

                <ul className="sidebar__bottom">
                    <li className="sidebar__bottom-item"><FaQq/>F.A.Q</li>
                    <li className="sidebar__bottom-item"><FaTerminal/>Terms of Service</li>
                    <li className="sidebar__bottom-item"><FaPrint/>Privacy Policy</li>

                </ul>

            </section>

        </section>
    )
}

export default Sidebar