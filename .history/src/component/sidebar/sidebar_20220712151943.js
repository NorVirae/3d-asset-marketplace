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
    const [activeSidebar, setActiveSidebar] = useState(1)
    const [showRegModal, setShowRegModal] = useContext(RegisterContext)
    const navigate = useNavigate()
    return (
        <section className="sidebar">
            <section className="sidebar__auth-sec">
                <li style={{width: "100%"}} onClick={e=>setShowRegModal({...showRegModal, login:!showRegModal.register})} className={"landing__nav-item login"}>
                        <Link className="landing__nav-link" to={"#"}>
                            Sign In
                        </Link>
                        {/* {showLogin &&<LoginModal onClick={e=>e.stopPropagation()}/>} */}

                    </li>

                    <li onClick={e=>setShowRegModal({...showRegModal, register:!showRegModal.register})} className={"landing__nav-item signup"}>
                        <Link className="landing__nav-link" to={"#"}>
                            Sign Up
                        </Link>
                    </li>
            </section>

            <section className="sidebar__tags">
    
                <IdentityBtn onClick={() => setActiveSidebar(1)} style={{width: "100%", borderLeft: `1rem solid ${activeSidebar == 1? "#7C187A": "#353449"}`, transform: `translateX(${activeSidebar == 1 ?"0rem": "-2rem"}) skewX(-25deg)`}} text={"WEEKLY FREEBIES"}/>
                <IdentityBtn onClick={() => setActiveSidebar(2)} style={{width: "100%", borderLeft: `1rem solid ${activeSidebar == 2? "#7C187A": "#353449"}`, transform: `translateX(${activeSidebar == 2 ?"0rem": "-2rem"}) skewX(-25deg)`}} text={"DAILY PICKS"}/>
                <IdentityBtn onClick={() => setActiveSidebar(3)} style={{width: "100%", borderLeft: `1rem solid ${activeSidebar == 3? "#7C187A": "#353449"}`, transform: `translateX(${activeSidebar == 3 ?"0rem": "-2rem"}) skewX(-25deg)`}} text={"WEEKLY FREEBIES"}/>
                <IdentityBtn onClick={() => setActiveSidebar(4)} style={{width: "100%", borderLeft: `1rem solid ${activeSidebar == 4? "#7C187A": "#353449"}`, transform: `translateX(${activeSidebar == 4 ?"0rem": "-2rem"}) skewX(-25deg)`}} text={"WEEKLY FREEBIES"}/>
                <IdentityBtn onClick={() => setActiveSidebar(5)} style={{width: "100%", borderLeft: `1rem solid ${activeSidebar == 5? "#7C187A": "#353449"}`, transform: `translateX(${activeSidebar == 5 ?"0rem": "-2rem"}) skewX(-25deg)`}} text={"WEEKLY FREEBIES"}/>
                <IdentityBtn onClick={() => setActiveSidebar(6)} style={{width: "100%", borderLeft: `1rem solid ${activeSidebar == 6? "#7C187A": "#353449"}`, transform: `translateX(${activeSidebar == 6 ?"0rem": "-2rem"}) skewX(-25deg)`}} text={"WEEKLY FREEBIES"}/>

                
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