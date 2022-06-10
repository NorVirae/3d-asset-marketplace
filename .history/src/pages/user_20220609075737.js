import CGBar from "../component/card/cbBar"
import NavBar from "../component/navbar/navbar"
import CatmanImg from "../assets/image/catman.jpg"
import {RiInstagramFill} from "react-icons/ri"
import {RiImageEditLine} from "react-icons/ri"
import {FaPlusCircle} from "react-icons/fa"
import {GiPriceTag} from "react-icons/gi"
import { useState } from "react"
import IdentityBtn from "../component/buttons/identityBtn"
import WolfGuyImg from "../assets/image/wolfguyfeather.jpg"
import TsunamiImg from "../assets/image/tsunami.jpg"
import ScaryImg from "../assets/image/scary.jpg"
import CatmanImg from "..assets/image/catman.jpg"
import coloredhouseImg from "./assets/image/coloredhouse.webp"

const User = () => {
    const [toggleVisAdmin, setToggleVisAdmin] = useState(false)
    return (
        <section>
            <header>
                <NavBar loggedIn={true} shortSearch={true} style={{paddingBottom: "0"}} search={true}/>
                <div style={{backgroundColor: "#15151C", display: "flex", alignItems: "center", height: "5vh", padding: "0px"}}>
                    <CGBar style={{margin: "1rem auto"}} slim={true}/>
                </div>
            </header>

            <main>
                <section className="user__profile-preview-container">
                    <button className="user__change-cover-btn">
                        <div className="user__change-cover-btn-inner">
                            <RiImageEditLine 
                            style={{color: "white", fontSize: "1.4rem"}}/>
                            Change Cover
                        </div>
                    </button>
                    <div className="user__profile-container">
                        <img src={CatmanImg} className="user__profile-img"/>
                        <h3 className="user__profile-name">Liqair Studios</h3>
                        <div className="user__profile-suscribers">219.9k Subscribers</div>

                    </div>

                    <div className="user__profile-caution">
                        We can only aocept the most qualified candidate, show us why you will the best shop
                        owner
                    </div>

                    <div className="user__location-container">
                       <RiInstagramFill/> Enugu, Nigeria.
                    </div>
                </section>
                <section className="user__product-action-container">
                    <button className="user__upload-products-btn">
                        <div className="user__upload-products-btn-inner">
                            UPLOAD PRODUCTS <FaPlusCircle style={{fontSize: "1.3rem"}}/>
                        </div>
                    </button>
                    <button className="user__upload-products-btn">
                        <div className="user__upload-products-btn-inner">
                            DISCOUNTS <GiPriceTag style={{fontSize: "1.3rem", transform: "scaleX(-1)"}}/>
                        </div>  
                    </button>

                    <div className="user__admin-visitor-container">
                        <button onClick={e=>setToggleVisAdmin(true)} className={`user__AV-btn ${toggleVisAdmin && "user_AV-btn-active"}`}>
                            <span className="user__AV-btn-inner">Admin</span>
                        </button>
                        <button onClick={e=>setToggleVisAdmin(false)} className={`user__AV-btn ${!toggleVisAdmin && "user_AV-btn-active"}`}>
                            <span className="user__AV-btn-inner">Visitor</span>
                        </button>

                    </div>

                </section>

                <section className="user__admin-page-section-header-container">
                    <IdentityBtn style={{padding: "1rem 6rem"}} dropDownList={true} text={"STORE"}/>
                    <IdentityBtn style={{padding: "1rem 6rem"}} text={"PROFILE"}/>
                    <IdentityBtn style={{padding: "1rem 6rem"}} text={"LIBRARY"}/>
                    <IdentityBtn style={{padding: "1rem 6rem"}} text={"MESSAGES"}/>
                    <IdentityBtn style={{padding: "1rem 6rem"}} text={"SALES"}/>
                    <IdentityBtn style={{padding: "1rem 3rem"}} text={"SETTINGS"}/>
                    

                </section>

                <section className="landing__freebies-container">
                            <div className="landing__freebies-inner-container">
                                <LandCard img={WolfGuyImg} title={""} titleAffirm={""}  />
                                <LandCard img={TsunamiImg} title={""} titleAffirm={""}  />
                                <LandCard img={ScaryImg} title={""} titleAffirm={""}  />
                                <LandCard img={CatmanImg} title={""} titleAffirm={""}  />
                                <LandCard img={coloredhouseImg} title={""} titleAffirm={""}  />

                            </div>
                        </section>
            </main>
        </section>
    )
}

export default User