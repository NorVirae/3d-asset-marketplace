import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { RegisterContext } from "../auth/context/registerContext"
import LoginModal from "../auth/loginModal"
import LoootyLogo from "../loootyLogo"
import SearchBar from "../search/SearchBar"
import {GoThreeBars} from "react-icons/go"


const NavBar = ({search, style}) => {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegModal, setShowRegModal] = useContext(RegisterContext)
    const navigate = useNavigate()

    return (
        <nav style={style} className="landing__navbar">
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap}}>
                <GoThreeBars style={{color: "white", fontSize: "2rem"}}/>
                {search && <SearchBar />}
            </div>
            
            <Link className="landing__navbar-brand" to = "/">
                <LoootyLogo color={"white"} style={{paddingLeft: "2"}}/>
            </Link>

                

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

        </nav>
    )
}

export default NavBar