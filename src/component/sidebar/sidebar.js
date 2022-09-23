import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { RegisterContext } from "../auth/context/registerContext"
import LoginModal from "../auth/loginModal"
import IdentityBtn from "../buttons/identityBtn"
import LoootyLogo from "../loootyLogo"
import { FaMailBulk, FaTimes, FaTwitter } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaQq } from "react-icons/fa"
import { FaTerminal } from "react-icons/fa"
import { FaPrint } from "react-icons/fa"

import { Link as Links} from "react-scroll"
import { GoThreeBars } from "react-icons/go"





const Sidebar = ({className}) => {
    const [showLogin, setShowLogin] = useState(false)
    const [activeSidebar, setActiveSidebar] = useState(1)
    const [showRegModal, setShowRegModal] = useContext(RegisterContext)
    const navigate = useNavigate()
    const  [slideIn, setSlideIn] = useState(false)


    return (
        // { showRegModal.isSidebarOpen && 
        <section onClick={() => {
            setSlideIn(old => true)
            // setTimeout(() =>{
            //     setSlideIn(false)
            //     setShowRegModal({...showRegModal, isSidebarOpen: false})
                //  setFadeOut(false)
                // }, 700)


        }} className= {`landing__overlay ${slideIn? "landing__overlay-dismiss": ''}`}>
     {/* } */}
            <div className="landing__sidebar-toggle-close" style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem"}}>
                {!showRegModal.isSidebarOpen?<GoThreeBars className="landing__sidebar-toggler-close"  style={{color: "white", fontSize: "2rem"}}/>:<FaTimes onClick={() => {
            setSlideIn(old => true)
            setTimeout(() =>{
                setSlideIn(false)
                setShowRegModal({...showRegModal, isSidebarOpen: false})
                //  setFadeOut(false)
                }, 700)


        }} className="landing__sidebar-toggler"  style={{color: "white", fontSize: "2rem"}} />}
            </div>
            <section className={`sidebar ${className}`}>
                <div className="sidebar__inner-container">

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
                        <Links offset={-100} to="freebies" spy={true} smooth={true}><IdentityBtn onClick={() => setActiveSidebar(1)} style={{width: "100%", borderLeft: `1rem solid ${activeSidebar == 1? "#7C187A": "#353449"}`, transform: `translateX(${activeSidebar == 1 ?"0rem": "-2rem"}) skewX(-25deg)`}} text={"WEEKLY FREEBIES"}/></Links>
                        <Links offset={-100} to="picks" spy={true} smooth={true}><IdentityBtn onClick={() => setActiveSidebar(2)} style={{width: "100%", borderLeft: `1rem solid ${activeSidebar == 2? "#7C187A": "#353449"}`, transform: `translateX(${activeSidebar == 2 ?"0rem": "-2rem"}) skewX(-25deg)`}} text={"DAILY PICKS"}/></Links>
                        <Links offset={-100} to="products" spy={true} smooth={true}><IdentityBtn onClick={() => setActiveSidebar(3)} style={{width: "100%", borderLeft: `1rem solid ${activeSidebar == 3? "#7C187A": "#353449"}`, transform: `translateX(${activeSidebar == 3 ?"0rem": "-2rem"}) skewX(-25deg)`}} text={"ALL PRODUCTS"}/></Links>
                        <Links offset={-200} to="collections" spy={true} smooth={true}><IdentityBtn onClick={() => setActiveSidebar(4)} style={{width: "100%", borderLeft: `1rem solid ${activeSidebar == 4? "#7C187A": "#353449"}`, transform: `translateX(${activeSidebar == 4 ?"0rem": "-2rem"}) skewX(-25deg)`}} text={"LATEST COLLECTIONS"}/></Links>
                        <Links offset={-100} to="earn" spy={true} smooth={true}><IdentityBtn onClick={() => setActiveSidebar(5)} style={{width: "100%", borderLeft: `1rem solid ${activeSidebar == 5? "#7C187A": "#353449"}`, transform: `translateX(${activeSidebar == 5 ?"0rem": "-2rem"}) skewX(-25deg)`}} text={"LOOOTY EARN"}/></Links>
                        <Links offset={-100} to="awesome" spy={true} smooth={true}><IdentityBtn onClick={() => setActiveSidebar(6)} style={{width: "100%", borderLeft: `1rem solid ${activeSidebar == 6? "#7C187A": "#353449"}`, transform: `translateX(${activeSidebar == 6 ?"0rem": "-2rem"}) skewX(-25deg)`}} text={"AWESOME ARTS"}/></Links>
                        
                        
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
                </div>


            </section>
    </section>
    )
}

export default Sidebar