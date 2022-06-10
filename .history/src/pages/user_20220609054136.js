import CGBar from "../component/card/cbBar"
import NavBar from "../component/navbar/navbar"
import {BsFacebook, BsLinkedin} from "react-icons/bs"
import {FaTwitter} from "react-icons/fa"
import {RiInstagramFill} from "react-icons/ri"

const User = () => {

    return (
        <section>
            <header>
                <NavBar loggedIn={true} shortSearch={true} style={{paddingBottom: "0"}} search={true}/>
                <div style={{backgroundColor: "#15151C", display: "flex", alignItems: "center", height: "5vh", padding: "0px"}}>
                    <CGBar style={{margin: "1rem auto"}} slim={true}/>
                </div>
            </header>

            <main>

            </main>
        </section>
    )
}

export default User