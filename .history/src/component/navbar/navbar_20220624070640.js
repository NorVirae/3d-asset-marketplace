import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { RegisterContext } from "../auth/context/registerContext"
import LoginModal from "../auth/loginModal"
import LoootyLogo, { LoootyLogoSplit } from "../loootyLogo"
import SearchBar from "../search/SearchBar"
import {GoThreeBars} from "react-icons/go"
import {FcSettings} from "react-icons/fc"
import {FaTimes} from "react-icons/fa"
import {RiNotification3Fill} from "react-icons/ri"
import {GrMail} from "react-icons/gr"
import CatmanImg from "../../assets/image/catman.jpg"


const NavLoggedIn = () => {
    return (
        <ul className="landing__navbar-inner-container-li">
            <li className="landing__navbar-logo-items"><FcSettings/></li>
            <li className="landing__navbar-logo-items"><RiNotification3Fill/></li>
            <li className="landing__navbar-logo-items"><GrMail/></li>
            <li className="landing__navbar-profile-container">
                <div className="landing__navbar-profile-img-container">
                    <img src={CatmanImg} alt="" className="landing__navbar-profile-img"/>
                 </div>
                 <div className="landing__navbar-user-name">
                     Liqair studios
                 </div>
            </li>
            
        </ul>
    )
}


const NavLoggedOut = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegModal, setShowRegModal] = useContext(RegisterContext)
    const navigate = useNavigate()
    return(
        <ul className="landing__navbar-inner-container">
                <li onClick={e=>navigate("/open/store")} className={"landing__nav-item"}>
                    <Link className="landing__nav-link" to={"/open/store"}>Open a Store</Link>
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
    )
}

const NavBar = ({search, style, shortSearch, loggedIn}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [yScroll, setYScroll] = useState(0)
    const handleScroll = (event) => {
        // console.log(window.scrollY, "hey")
        setYScroll(window.scrollY)
        
    }

    useEffect(() => {
        
        window.addEventListener("scroll", (e) =>handleScroll(e));

    })

    return (
        <nav style={{...style, background: `${yScroll>50?"#232230": "transparent"}`, padding: `${yScroll > 50? "1rem": "2rem"}`, width: `${yScroll > 400? "82vw": "100%"}`, right: `${yScroll > 400? "-19%": "100%"}`, position: `${yScroll > 400? "fixed": "sticky"}`}} className="landing__navbar">
            <div className="landing__sidebar-toggle" style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem"}}>
                {isSidebarOpen?<GoThreeBars onClick={() => setIsSidebarOpen(true)} style={{color: "white", fontSize: "2rem"}}/>:<FaTimes onClick={() => setIsSidebarOpen(true)} style={{color: "white", fontSize: "2rem"}} />}
                {search && <SearchBar short={shortSearch}/>}
            </div>
            
            <Link className="landing__navbar-brand" to = "/">
                <LoootyLogo color={"white"} style={{marginLeft: shortSearch? "-90%": "200%"}}/>
                <LoootyLogoSplit />
            </Link>

                

            {
                loggedIn? <NavLoggedIn />: <NavLoggedOut /> 
            }

            

        </nav>
    )
}

export default NavBar