import CGBar from "../component/card/cbBar"
import NavBar from "../component/navbar/navbar"
import CatmanImg from "../assets/image/catman.jpg"
import {RiInstagramFill} from "react-icons/ri"
import {RiImageEditLine} from "react-icons/ri"
import {FaEdit} from "react-icons/fa"
import {FaPlusCircle} from "react-icons/fa"
import {MdCloudDownload} from "react-icons/md"
import {GiPriceTag} from "react-icons/gi"
import { useState } from "react"
import IdentityBtn from "../component/buttons/identityBtn"
import WolfGuyImg from "../assets/image/wolfguyfeather.jpg"
import TsunamiImg from "../assets/image/tsunami.jpg"
import ScaryImg from "../assets/image/scary.jpg"
import coloredhouseImg from "../assets/image/coloredhouse.webp"
import LandCard from "../component/card/landCard"
import SearchBar from "../component/search/SearchBar"
import {BsTrash} from "react-icons/bs"

const Store = () => {
    return (
        <section className="landing__freebies-container">
            <div className="landing__freebies-inner-container">
                <LandCard img={WolfGuyImg} title={""} titleAffirm={""}  />
                <LandCard img={TsunamiImg} title={""} titleAffirm={""}  />
                <LandCard img={ScaryImg} title={""} titleAffirm={""}  />
                <LandCard img={CatmanImg} title={""} titleAffirm={""}  />
                <LandCard img={coloredhouseImg} title={""} titleAffirm={""}  />

            </div>
        </section>
    )
}

const ProfileInput = ({labelName}) => {
    return (
        <div className="user__main-profile-form-group">
            <div className="user__label-container">

                <label className="user__main-profile-label">
                    <span className={"user__main-profile-label-inner"}>
                        {labelName}
                    </span>
                </label>
            </div>
            

            <section className="user__main-profile-form-control-container">
                <div className="user__main-profile-skew-container">
                    <input className="user__main-profile-form-control" /> 
                    <span className="user__main-profile-form-control-edit-btn">
                        <FaEdit style={{transform: "skewX(20deg)"}}/>
                    </span>
                </div>

                <span className="user__main-profile-info">
                    This name will appear on your customers billing statement
                </span>
            </section>
        </div>
    )
}

const Profile = () => {
    return (
        <section className="user__main-profile-container">
            <form className="user__main-profile-form">
                <ProfileInput labelName={"FIRST NAME"}/>
                <ProfileInput labelName={"BIO"}/>
                <ProfileInput labelName={"USERNAME"}/>
                <ProfileInput labelName={"LOCATION"}/>


            </form>
        </section>
    )
}

const LibraryCard = ({percent="100%", current}) => {
    return (
        <div className="user__library-card">
            <img src={WolfGuyImg} className="user__library-card-img" alt="" />
            <div className="user__library-card-body">
                <div className="user__library-card-name">
                    <span style={{transform: "skewX(20deg)"}}>PRODUCT NAME</span>
                    <div className="user__upload-pg-container">
                        <MdCloudDownload style={{fontSize: "2.5rem"}}/>
                        <span className="user__upload-pg-stats">{current} of 10</span>
                    </div>

                </div>
                <div className="user__library-card-pg-container">
                    <div style={{width: percent, backgroundColor: percent === "100%"? "#1AC422": "#FF9700"}} className={`user__library-pg-bar`}></div>

                </div>
            </div>
        </div>
    )
}

const Library = () => {
    return (
        <section className="user__library">
            <div className="user__library-inner">
                <LibraryCard current={8} percent="80%"/>
                <LibraryCard current={10} percent="100%"/>
                <LibraryCard current={2} percent="0%"/>

            </div>
        </section>
    )
}

const MessageFriend = () => {
    return (
        <button className="user__message-friend">
            <div className="user__message-friend-inner">
                <img src={WolfGuyImg} alt="" />
                <div className="user__message-friend-body">
                    <h5 className="user__msg-friend-name">
                        Clement Seyfried
                        <span className="user__msg-time">
                            8:00 am
                        </span>
                    </h5>
                </div>
            </div>
        </button>
    )
}

const Messages = () => {
    return (
        <section className="user__messages">
            <div className="user__messages-inner">
                <section className="user__message-sidebar">
                    <section className="user__message-sidebar-header">
                        <div className="user__message-sidebar-header-item">
                            USERS
                        </div>

                        <div className="user__message-sidebar-header-item">
                            LOOTY
                            <span className="user__message-notify"></span>
                        </div>
                    </section>

                    <section className="user__message-sidebar-body">
                        <MessageFriend />
                        <MessageFriend />

                    </section>

                    <section className="user__message-sidebar-body">
                        <button className="user__message-trash-btn">
                            <BsTrash /> Trash
                        </button>
                    </section>
                </section>

                <section className="user__main-msg-container">
                    <div className="user__main-msg-header">
                        <span>Clement Seyfried</span>
                    </div>

                    <div className="user__main-msg-body">
                        <section className="user__main-left-msg">
                            <
                        </section>
                    </div>
                </section>
            </div>

        </section>
    )
}

const PageSelectComp = ({inPageName}) => {
    switch(inPageName){
        case "profile":
            return <Profile />
        case "store":
            return <Store />

        case "library":
            return <Library />

        case "messages":
            return <Messages />
    

        default:
            return <Store />
    }
}



const User = () => {
    const [toggleVisAdmin, setToggleVisAdmin] = useState(true)
    const [selectedTag, setSelectedTag] = useState("feature")//Enum Types: feature, recent sellers, popular
    const [activeInpageHeader, setActiveInPageHeader] = useState('library')//Enum types: store, profile, library, messages, sales, settings
    return (
        <section>
            <header>
                <NavBar loggedIn={true} shortSearch={true} style={{paddingBottom: "0", paddingTop: "0"}} search={true}/>
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
                    
                    {!toggleVisAdmin && <button onClick={e=>setToggleVisAdmin(true)} className="user__profile-switch-admin-btn">
                        Switch Admin Mode
                    </button>}

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
                        <button onClick={e=>setToggleVisAdmin(false)} className={`user__AV-btn ${!toggleVisAdmin && "user_AV-btn-active-dup"}`}>
                            <span className="user__AV-btn-inner">Visitor</span>
                        </button>

                    </div>

                </section>

                <section className="user__admin-page-section-header-container">
                
                    <IdentityBtn onClick={e=>setActiveInPageHeader("store")} 
                    style={{padding: "1rem 6rem", 
                    backgroundColor: `${activeInpageHeader==="store"?"#15151C":"#191921"}`,
                    color: `${activeInpageHeader==="store"?"#CECED8":"#4D4D6B"}`,
                    borderLeft: `1rem solid ${activeInpageHeader==="store"?"#7C187A":"#353449"}`}} 
                    dropDownList={true} text={"STORE"}/>

                    <IdentityBtn onClick={e=>setActiveInPageHeader("profile")} 
                    style={{padding: "1rem 6rem", 
                    backgroundColor: `${activeInpageHeader==="profile"?"#15151C":"#191921"}`,
                    color: `${activeInpageHeader==="profile"?"#CECED8":"#4D4D6B"}`,
                    borderLeft: `1rem solid ${activeInpageHeader==="profile"?"#7C187A":"#353449"}`}} 
                    text={"PROFILE"}/>

                    <IdentityBtn onClick={e=>setActiveInPageHeader("library")} 
                    style={{padding: "1rem 6rem", 
                    backgroundColor: `${activeInpageHeader==="library"?"#15151C":"#191921"}`,
                    color: `${activeInpageHeader==="library"?"#CECED8":"#4D4D6B"}`,
                    borderLeft: `1rem solid ${activeInpageHeader==="library"?"#7C187A":"#353449"}`}} 
                    text={"LIBRARY"}/>

                    <IdentityBtn onClick={e=>setActiveInPageHeader("messages")} 
                    style={{padding: "1rem 6rem", 
                    backgroundColor: `${activeInpageHeader==="messages"?"#15151C":"#191921"}`,
                    color: `${activeInpageHeader==="messages"?"#CECED8":"#4D4D6B"}`,
                    borderLeft: `1rem solid ${activeInpageHeader==="messages"?"#7C187A":"#353449"}`}} 
                    text={"MESSAGES"}/>

                    <IdentityBtn onClick={e=>setActiveInPageHeader("sales")} 
                    style={{padding: "1rem 6rem", 
                    backgroundColor: `${activeInpageHeader==="sales"?"#15151C":"#191921"}`,
                    color: `${activeInpageHeader==="sales"?"#CECED8":"#4D4D6B"}`,
                    borderLeft: `1rem solid ${activeInpageHeader==="sales"?"#7C187A":"#353449"}`}} 
                    text={"SALES"}/>

                    <IdentityBtn onClick={e=>setActiveInPageHeader("settings")} 
                    style={{padding: "1rem 3rem", 
                    backgroundColor: `${activeInpageHeader==="settings"?"#15151C":"#191921"}`,
                    color: `${activeInpageHeader==="settings"?"#CECED8":"#4D4D6B"}`,
                    borderLeft: `1rem solid ${activeInpageHeader==="settings"?"#7C187A":"#353449"}`}} 
                    text={"SETTINGS"}/>
                    

                </section>

                <section className="user__tags-container">
                    <div className="user__feature-tags-container">
                        <span onClick={e=>setSelectedTag("feature")}
                         className={`user__feature-tags-item ${selectedTag === "feature" && "user__feature-tags-item-active"}`}>
                            FEATURED
                        </span>

                        <span onClick={e=>setSelectedTag("popular")} 
                        className={`user__feature-tags-item ${selectedTag === "popular" && "user__feature-tags-item-active"}`}> 
                            POPULAR
                        </span>
                        <span onClick={e=>setSelectedTag("recent")}
                          className={`user__feature-tags-item ${selectedTag === "recent" && "user__feature-tags-item-active"}`}>
                            RECENT
                        </span>
                        <span onClick={e=>setSelectedTag("seller")} 
                        className={`user__feature-tags-item ${selectedTag === "seller" && "user__feature-tags-item-active"}`}> 
                            BEST SELLERS
                        </span>

                    </div>

                    <SearchBar />
                </section>

                <PageSelectComp inPageName={activeInpageHeader} />

            </main>
        </section>
    )
}

export default User