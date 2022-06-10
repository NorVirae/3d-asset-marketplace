import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { RegisterContext } from "../auth/context/registerContext"
import LoginModal from "../auth/loginModal"
import LoootyLogo from "../loootyLogo"
import SearchBar from "../search/SearchBar"
import {GoThreeBars} from "react-icons/go"


const NavLoggedIn = () => {
    return (

    )
}


const NavLoggedOut = () => {
    return(

    )
}

const NavBar = ({search, style, shortSearch, loggedIn}) => {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegModal, setShowRegModal] = useContext(RegisterContext)
    const navigate = useNavigate()

    return (
        <nav style={style} className="landing__navbar">
            <div className="landing__sidebar-toggle" style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem"}}>
                <GoThreeBars style={{color: "white", fontSize: "2rem"}}/>
                {search && <SearchBar short={shortSearch}/>}
            </div>
            
            <Link className="landing__navbar-brand" to = "/">
                <LoootyLogo color={"white"} style={{marginLeft: shortSearch? "-90%": "200%"}}/>
            </Link>

                

            

            <ul className="landing__navbar-inner-container">
                <li></li>
            </ul>

        </nav>
    )
}

export default NavBar