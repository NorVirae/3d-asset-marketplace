import CGBar, { CGBarSlim } from "../component/card/cbBar"
import NavBar from "../component/navbar/navbar"
import CatmanImg from "../assets/image/catman.jpg"
import {RiInstagramFill} from "react-icons/ri"
import {RiImageEditLine} from "react-icons/ri"
import {FaEdit, FaPaypal} from "react-icons/fa"
import {FaPlusCircle} from "react-icons/fa"
import {MdCloudDownload, MdModeEditOutline} from "react-icons/md"
import {GiPriceTag} from "react-icons/gi"
import { useContext, useEffect, useState } from "react"
import {MdAttachFile} from "react-icons/md"
import {IoMdArrowDropdown} from "react-icons/io"
import {RiMailSendFill} from "react-icons/ri"

import IdentityBtn from "../component/buttons/identityBtn"
import WolfGuyImg from "../assets/image/wolfguyfeather.jpg"
import TsunamiImg from "../assets/image/tsunami.jpg"
import ScaryImg from "../assets/image/scary.jpg"
import coloredhouseImg from "../assets/image/coloredhouse.webp"
import LandCard from "../component/card/landCard"
import SearchBar from "../component/search/SearchBar"
import {BsTrash} from "react-icons/bs"
import {FaSave} from "react-icons/fa"
import {FcSettings} from "react-icons/fc"
import { SuscribeInput } from "../component/footer/footer"
import {ImFolder, ImFolderOpen, ImOpt} from 'react-icons/im'
import { useNavigate } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import { useDispatch, useSelector } from "react-redux"
import { RegisterContext } from "../component/auth/context/registerContext"
import { updateUserAction } from "../api/auth"
import { GrStripe } from "react-icons/gr"


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

const ProfileInput = ({labelName, onChange, value, type}) => {
    const [save, setIsSave] = useState(true)
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
                    <input type={type} disabled={save} onChange={onChange} value={value}  className="user__main-profile-form-control" /> 
                    <span className="user__main-profile-form-control-edit-btn">
                        {save?<FaEdit onClick={() => setIsSave(old => !old)} style={{cursor: "pointer", transform: "skewX(20deg)"}}/>:  <FaSave  onClick={() => setIsSave(old => !old)} style={{cursor: "pointer", transform: "skewX(20deg)"}}/>}
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
    const user = useSelector(state => state.user)
    const [userDetails, setUserDetails] = useState({username: "", email: "", phone: "", description: "", dob: "", location: ""})
    const dispatch = useDispatch()

    useEffect(() => {
        if (user && user.user){
            setUserDetails(old =>({...old, username: user.user.name, email: user.user.email, phone: user.user.phone, description: user.user.description, birth_date: user.user.birth_date, picture: user.user.picture}))
        }
    },[])
    return (
        <section className="user__main-profile-container">
            <form className="user__main-profile-form">
               
                <ProfileInput onClick={e => dispatch(updateUserAction({updateData: userDetails, accessToken: user && user.user? user.user.access_token: ""}))} value={userDetails.username} onChange={e => {setUserDetails(old => ({...old, username: e.target.value})); console.log("called")}} labelName={"USERNAME"}/>
                <ProfileInput onClick={e => dispatch(updateUserAction({updateData: userDetails, accessToken: user && user.user? user.user.access_token: ""}))} value={userDetails.email}  labelName={"EMAIL"}/>

                <ProfileInput onClick={e => dispatch(updateUserAction({updateData: userDetails, accessToken: user && user.user? user.user.access_token: ""}))} onChange={e => setUserDetails(old => ({...old, username: e.target.value}))} labelName={"PHONE"}/>
                <ProfileInput onClick={e => dispatch(updateUserAction({updateData: userDetails, accessToken: user && user.user? user.user.access_token: ""}))} value={userDetails.description} onChange={e => setUserDetails(old => ({...old, description: e.target.value}))} labelName={"BIO"}/>
                <ProfileInput onClick={e => dispatch(updateUserAction({updateData: userDetails, accessToken: user && user.user? user.user.access_token: ""}))} type={"date"} value={userDetails.birth_date} onChange={e => setUserDetails(old => ({...old, birth_date: e.target.value}))} labelName={"DOB"}/>
                <ProfileInput onClick={e => dispatch(updateUserAction({updateData: userDetails, accessToken: user && user.user? user.user.access_token: ""}))} value={userDetails.picture} onChange={e => setUserDetails(old => ({...old, picture: e.target.value}))} labelName={"PROFILE PICTURE"}/>

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

// const Library = () => {
//     return (
//         <section className="user__library">
//             <div className="user__library-inner">
//                 <LibraryCard current={8} percent="80%"/>
//                 <LibraryCard current={10} percent="100%"/>
//                 <LibraryCard current={2} percent="0%"/>

//             </div>
//         </section>
//     )
// }

const LibraryItem = ({onClick, prodNumber, active= false, itemName}) => {
    return (
        <button onClick={onClick} className={`user__library-item ${active && "user__library-item-active"}`}>
            <div className="user__library-item-inner">
                { active ? <ImFolderOpen className="user__lib-folder-large" style={{fontSize: "1.4rem"}}/>:
                <ImFolder  className="user__lib-folder-large" style={{fontSize: "1rem"}}/>}
                <div className="user__library-item-body">
                    <h5 className="user__library-item-name">
                        {itemName}
                    </h5>
                </div>
                
            </div>
            <span className="user__library-item-info-count">
                    {prodNumber} items
            </span>
        </button>
    )
}

const LibraryCollectionCard = ({img}) => {
    return (
        <section className="user__main-lib-card">
            <img className="user__main-lib-card-img" src={img} style={{width: ""}} alt="collections" />
            <div className="user__main-lib-card-body">
                <h3 className="user__card-collection-title">
                    Beach House with Rumps
                </h3>
                <p className="user__card-collection-description">by pascal garten in 3d assets</p>
            </div>

            <div className="user__main-lib-card-footer">
                <MdCloudDownload style={{fontSize: "1.2rem"}}/> DOWNLOAD FILES
            </div>
        </section>
    )
}

const Library = () => {
    const [activeSideUser, setActiveSideUser] = useState(0)
    const settingsItems = ["Notification", "New Folder(1)", "New Folder(2)", "Loooty backup",]
    return (
        <section className="user__library">
            <div className="user__library-inner">

                <section className="user__library-sidebar">
                    <section className="user__library-sidebar-header">
                        <div className="user__library-sidebar-header-item">
                            <span className="user__library-sidebar-header-item-text">
                                {settingsItems[activeSideUser]}
                            </span>
                        </div>
                    </section>

                    <section className="user__library-sidebar-body">
                        <button className="user__library-trash-btn">
                            <span className="user__library-trash-btn-text">Create New Folder</span>
                            <FaPlusCircle  className="user__library-trash-btn-logo"/> 
                        </button>
                    </section>

                    <section className="user__library-sidebar-body">
                       
                        <LibraryItem prodNumber={21} itemName={"All Products"} onClick={() => setActiveSideUser(0)} active={activeSideUser === 0}/>
                        <LibraryItem prodNumber={59} itemName={"New Folder(1)"} onClick={() => setActiveSideUser(1)} active={activeSideUser === 1}/>
                        <LibraryItem prodNumber={0} itemName={"New Folder(2)"} onClick={() => setActiveSideUser(2)} active={activeSideUser === 2}/>
                        <LibraryItem prodNumber={34} itemName={"Loooty backup"} onClick={() => setActiveSideUser(3)} active={activeSideUser === 3}/>

                    </section>
                </section>

                <section className="user__main-lib-container">
                    <div className="user__main-lib-header">
                        
                        <SuscribeInput style={{}} btnStyle={{padding: ".1rem 2rem", height: "1.7rem", right: "1.7%"}} controlStyle={{padding: ".4rem 8rem"}}/>
                    </div>

                    <div className="user__main-lib-body">
                        <LandCard img={WolfGuyImg} title={""} titleAffirm={""}  />
                        <LandCard img={TsunamiImg} title={""} titleAffirm={""}  />
                        <LandCard img={ScaryImg} title={""} titleAffirm={""}  />
                        <LandCard img={CatmanImg} title={""} titleAffirm={""}  />
                        <LandCard img={coloredhouseImg} title={""} titleAffirm={""}  />
                    </div>

                    <div className="user__main-lib-body-collections">
                        <LibraryCollectionCard img={WolfGuyImg}/>
                        <LibraryCollectionCard img={CatmanImg} title={""} titleAffirm={""}  />
                        <LibraryCollectionCard img={TsunamiImg} title={""} titleAffirm={""}  />
                        <LibraryCollectionCard img={ScaryImg} title={""} titleAffirm={""}  />
                        <LibraryCollectionCard img={WolfGuyImg} title={""} titleAffirm={""}  />
                        <LibraryCollectionCard img={coloredhouseImg} title={""} titleAffirm={""}  />
                    </div>



                    <div className="user__main-lib-footer">
                        
                    </div>
                </section>
            </div>

        </section>
    )
}



const MessageFriend = ({onClick, active= false}) => {
    return (
        <button onClick={onClick} className={`user__message-friend ${active && "user__message-friend-active"}`}>
            <div className="user__message-friend-inner">
                <img className="user__message-friend-img" src={WolfGuyImg} alt="" />
                <div className="user__message-friend-body">
                    <h5 className="user__msg-friend-name">
                        Clement Seyfried
                        <span className="user__msg-time">
                            8:00 am
                        </span>
                    </h5>
                    <p className="user__msg-preview">
                        Howfar the zekie file ain't coming...
                    </p>
                </div>
            </div>
        </button>
    )
}

const SenderMsg = () => {
    return (
        <section className="user__main-sender-msg-cont">
            <img className="user__main-sender-msg-img" src={CatmanImg} alt="" />
            <div className="user__main-sender-msg-inner">
                <p className="user__main-sender-talk">Hi There</p>
                <div className="user__main-sender-time">seen 12:00am</div>
            </div>
        </section>
    )
}

const ReceiverMsg = () => {
    return (
        <section className="user__main-receiver-msg-cont">
            <div className="user__main-receiver-msg-inner">
                <p>How  ya doing?</p>
                <div>seen 12:00am</div>
            </div>
            <img className="user__main-receiver-msg-img" src={WolfGuyImg} alt="" />

        </section>
    )
}


const Messages = () => {
    const [activeSideUser, setActiveSideUser] = useState(0)
    return (
        <section className="user__messages">
            <div className="user__messages-inner">
                <section className="user__message-sidebar">
                    <section className="user__message-sidebar-header">
                        <div className="user__message-sidebar-header-item">
                            USERS
                        </div>

                        <div className="user__message-sidebar-header-item">
                            LOOOTY
                            <div className="user__message-notify"></div>
                        </div>
                    </section>

                    <section className="user__message-sidebar-body">
                        <MessageFriend onClick={() => setActiveSideUser(0)} active={activeSideUser === 0}/>
                        <MessageFriend onClick={() => setActiveSideUser(1)} active={activeSideUser === 1}/>
                        <MessageFriend onClick={() => setActiveSideUser(2)} active={activeSideUser === 2}/>


                    </section>

                    <section className="user__message-sidebar-footer">
                        <button className="user__message-trash-btn">
                            <BsTrash  className="user__message-trash-btn-logo"/> 
                            <span className="user__message-trash-btn-text">Trash</span>
                        </button>
                    </section>
                </section>

                <section className="user__main-msg-container">
                    <div className="user__main-msg-header">
                        <span className="user__main-msg-header-text">Clement Seyfried</span>
                    </div>

                    <div className="user__main-msg-body">
                        <SenderMsg />
                        <ReceiverMsg />
                    </div>

                    <div className="user__main-msg-footer">
                        <form className="user__main-msg-send-container">
                            <div className="user__msg-form-group">
                                <div className="user__msg-form-skew-container">
                                    <button className="user__msg-form-doc-btn">
                                        <MdAttachFile />
                                    </button>

                                    <input className="user__msg-form-control" />

                                    <button className="user__msg-form-send-btn">
                                        <RiMailSendFill style={{transform: "skewX(20deg)"}} />
                                        <span style={{transform: "skewX(20deg)"}}> Send</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>

        </section>
    )
}

const SettingsItem = ({onClick, active= false, itemName}) => {
    return (
        <button onClick={onClick} className={`user__settings-item ${active && "user__settings-item-active"}`}>
            <div className="user__settings-item-inner">
                <FcSettings />
                <div className="user__settings-item-body">
                    <h5 className="user__settings-item-name">
                        {itemName}
                    </h5>
                </div>
            </div>
        </button>
    )
}

export const OrderCheckbox = ({isActive=true, setIsActive}) => {
    return (
        <div style={{opacity: "1"}} onClick={() => setIsActive(!isActive) } className="user__main-sett-checkbox">
            <div style={{backgroundColor: `${isActive ? "transparent": "#FF9700"}`}} className="user__main-sett-checkbox-active">
                
            </div>
        </div>
    )
}

const OrderItem = () => {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <div onClick={() => setIsChecked(!isChecked)} className="user__main-sett-item">
            <OrderCheckbox isActive={isChecked} setIsActive={setIsChecked}/>

            <div className="user__main-sett-item-body">
                <h4 className="user__main-sett-item-header"> Order Placed</h4>
                <p className="user__main-sett-item-main">Anytime an order is placed you will notified</p>
            </div>
        </div>
    )
}


const Settings = () => {
    const [activeSideUser, setActiveSideUser] = useState(0)
    const isDesktop = useMediaQuery({minWidth: 768})
    const settingsItems = ["Notification", "Account", "Messaging", "Password", "User Name", "Blocking", "Payment", "Store", "Profile", "Sales"]
    return (
        <section className="user__settings">
            <div className="user__settings-inner">
                <section className="user__settings-sidebar">
                    <section className="user__settings-sidebar-header">
                        <div className="user__settings-sidebar-header-item">
                            <span className="user__settings-sidebar-header-item-text">
                                {settingsItems[activeSideUser]}
                            </span>
                        </div>
                    </section>

                    <section className="user__settings-sidebar-body">
                        <SettingsItem itemName={"Notification"} onClick={() => setActiveSideUser(0)} active={activeSideUser === 0}/>
                        <SettingsItem itemName={"Account"} onClick={() => setActiveSideUser(1)} active={activeSideUser === 1}/>
                        <SettingsItem itemName={"Messaging"} onClick={() => setActiveSideUser(2)} active={activeSideUser === 2}/>
                        <SettingsItem itemName={"Password"} onClick={() => setActiveSideUser(3)} active={activeSideUser === 3}/>
                        <SettingsItem itemName={"User Name"} onClick={() => setActiveSideUser(4)} active={activeSideUser === 4}/>
                        <SettingsItem itemName={"Blocking"} onClick={() => setActiveSideUser(5)} active={activeSideUser === 5}/>
                        <SettingsItem itemName={"Payment"} onClick={() => setActiveSideUser(6)} active={activeSideUser === 6}/>
                        <SettingsItem itemName={"Store"} onClick={() => setActiveSideUser(7)} active={activeSideUser === 7}/>
                        <SettingsItem itemName={"Profile"} onClick={() => setActiveSideUser(8)} active={activeSideUser === 8}/>
                        <SettingsItem itemName={"Sales"} onClick={() => setActiveSideUser(9)} active={activeSideUser === 9}/>
                    </section>

                    <section className="user__settings-sidebar-footer">
                        <button className="user__settings-trash-btn">
                            <FcSettings  className="user__settings-trash-btn-logo"/> 
                            <span className="user__settings-trash-btn-text">STORE</span>
                        </button>
                    </section>
                </section>

                <section className="user__main-sett-container">
                    <div className="user__main-sett-header">
                        <span className="user__main-sett-header-text">
                            the name will appear on your customers billing statement
                        </span>
                        {isDesktop && <SuscribeInput style={{}} btnStyle={{padding: ".1rem 2rem", height: "1.7rem", right: "1.7%"}} controlStyle={{padding: ".4rem 8rem"}}/>}
                    </div>

                    <div className="user__main-sett-body">
                        <div className="user__main-sett-body-left">
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                        </div>
                        
                        <div className="user__main-sett-body-left">
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                        </div>
                    </div>

                    <div className="user__main-sett-footer">
                        
                    </div>
                </section>
            </div>

        </section>
    )
}

const SalesDropdown = ({showDropdown=false, setShowDropdown, onMouseEnter, onMouseLeave, setSelected}) => {
    return (
       showDropdown? <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="user__sales-mc-dropdown-container">
            <span onClick={e => setSelected("$30")}>$30</span>
            <span onClick={e => setSelected("$40")}>$40</span>
        </div>: null)
}

const Sales = () => {
    const [activeSideUser, setActiveSideUser] = useState(0)
    const settingsItems = ["Notification", "New Folder(1)", "New Folder(2)", "Loooty backup",]
    const [toggleFiatCrypto, setToggleFiatCrypto] = useState("fiat")
    const [priceSelect, setPriceSelect] = useState("$20")
    const [selectedPaymentGateway, setSelectedPaymentGateway] = useState("paypal")
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <section className="user__sales">
            <div className="user__sales-sidebar">
                <section className="user__sales-sidebar-header">
                    <div onClick={e => setToggleFiatCrypto("fiat")} className={`user__sales-sidebar-header-item ${toggleFiatCrypto == "fiat" && "user__sales-shi-selected"}`}>
                        FIAT
                    </div>

                    <div onClick={e => setToggleFiatCrypto("crypto")} className={`user__sales-sidebar-header-item ${toggleFiatCrypto == "crypto" && "user__sales-shi-selected"}`}>
                        CRYPTO
                    </div>
                </section>

                <section className="user__sales-sidebar-body">
                    <div onClick={e => setSelectedPaymentGateway("paypal")} className={`user__sales-sidebar-body-item ${selectedPaymentGateway === "paypal" && "user__sales-sidebar-bi-selected"}`}>
                        <span><FaPaypal/> Paypal</span>
                    </div>

                    <div onClick={e => setSelectedPaymentGateway("stripe")} className={`user__sales-sidebar-body-item ${selectedPaymentGateway === "stripe" && "user__sales-sidebar-bi-selected"}`}>
                        <span><GrStripe/> Stripe</span>
                    </div>
                </section>

            </div>
            <div className="user__sales-main-content">
                <section className="user__sales-mc-header">
                    <div className="user__sales-mc-left">
                        Notice:
                    </div>
                    <div className="user__sales-mc-right">
                        We send out payment every 1<sup>st</sup> and 15<sup>th</sup> of every month
                        You must have a balance of $20 or more at the time to be eligible.
                        <p>if you do not meet the minimum balance, no worries, we will try again next time.</p>
                    </div>
                </section>

                <section className="user__sales-mc-body">
                    <div className="user__sales-mc-item-container">
                        <div className="user__sales-mc-item-header">
                            PAYOUT BALANCE
                        </div>

                        <div className="user__sales-mc-item-body">
                            <div className="user__sales-form-group">
                                <div onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)} className="user__sales-mc-dropdown">
                                    <span>{priceSelect}</span>
                                </div>

                                <SalesDropdown setSelected={setPriceSelect} onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)} showDropdown={showDropdown} setShowDropdown={setShowDropdown}/>
                                <IoMdArrowDropdown className="user__sales-mc-dropdown-icon"/>
                            </div>
                            <p>Payouts will only be sent when your balance reaches $20</p>
                        </div>
                    </div>

                    <div className="user__sales-mc-item-container">
                        <div className="user__sales-mc-item-header">
                            PAYPAL EMAIL
                        </div>

                        <div className="user__sales-mc-item-body">
                            <div className="user__sales-form-group">
                                <div className="user__sales-skew-container">
                                    <input placeholder="Fill in your Email here" className="user__sales-mc-input"/>
                                </div>
                                <div className="user__sales-mc-input-edit-skew-container">
                                    <MdModeEditOutline className="user__sales-mc-input-edit"/>
                                </div>
                            </div>
                            <p>This is the Email we use for payouts</p>
                        </div>
                    </div>

                    <div className="user__sales-mc-item-container button">
                        <button className="user__sales-mc-item-btn">
                            <span>SAVE</span>
                        </button>
                    </div>
                </section>
            </div>
        </section>
    )
}

const TagsComp = ({selectedTag, setSelectedTag}) => {
    return (
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

        case "settings":
            return <Settings />

        case "sales":
            return <Sales />
    

        default:
            return <Store />
    }
}


const TagheaderCompDesktop = ({setActiveInPageHeader, activeInpageHeader, toggleVisAdmin}) => (
    
    <section className="user__admin-page-section-header-container">
    
        <IdentityBtn onClick={e=>setActiveInPageHeader("store")} 
        style={{padding: "1rem 6rem", 
        marginRight: `${!toggleVisAdmin ? '61.5vw': '0'}`,
        backgroundColor: `${activeInpageHeader==="store"?"#15151C":"#191921"}`,
        color: `${activeInpageHeader==="store"?"#CECED8":"#4D4D6B"}`,
        borderLeft: `1rem solid ${activeInpageHeader==="store"?"#7C187A":"#353449"}`}} 
        dropDownList={true} text={"STORE"}/>

        { toggleVisAdmin && <><IdentityBtn onClick={e=>setActiveInPageHeader("profile")} 
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
        text={"SETTINGS"}/></>}
        

    </section>
)

const TagheaderCompMobile = ({setActiveInPageHeader, activeInpageHeader, toggleVisAdmin}) => (
    <section className="user__admin-page-section-header-container">
    
        <IdentityBtn onClick={e=>setActiveInPageHeader("store")} 
        style={{padding: "1rem 6rem", 
        marginRight: `${!toggleVisAdmin ? '61.5vw': '0'}`,
        backgroundColor: `${activeInpageHeader==="store"?"#15151C":"#191921"}`,
        color: `${activeInpageHeader==="store"?"#CECED8":"#4D4D6B"}`,
        borderLeft: `1rem solid ${activeInpageHeader==="store"?"#7C187A":"#353449"}`}} 
        dropDownList={true} text={"STORE"}/>

        { toggleVisAdmin && <><IdentityBtn onClick={e=>setActiveInPageHeader("profile")} 
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
        text={"SETTINGS"}/></>}
        
    </section>
)

const User = () => {
    const [toggleVisAdmin, setToggleVisAdmin] = useState(true)
    const isMobile = useMediaQuery({minWidth: 481, maxWidth: 768})
    const user = useSelector(state => state.user)
    const [showRegModal, setShowRegModal] = useContext(RegisterContext)

    const [selectedTag, setSelectedTag] = useState("feature")//Enum Types: feature, recent sellers, popular
    const [activeInpageHeader, setActiveInPageHeader] = useState('messages')//Enum types: store, profile, library, messages, sales, settings
    const navigate = useNavigate()
    useEffect(() => {
        if (!toggleVisAdmin){
            setActiveInPageHeader("store")
        }

        if (!user || !user.user){
            navigate("/")
            setShowRegModal({...showRegModal, login:true})

        }


    }, [toggleVisAdmin])
    return (
        <section className="user__main-container">
            <header>
                <NavBar loggedIn={true} shortSearch={true} style={{paddingBottom: "0", paddingTop: "0"}} search={true}/>
                <CGBarSlim style={{overflow: "scroll", position: "relative",}}/>

            </header>

            <main className="user__main">

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
                        We can only accept the most qualified candidate, show us why you will the best shop
                        owner
                    </div>

                    <div className="user__location-container">
                       <RiInstagramFill/> Enugu, Nigeria.
                    </div>
                </section>
                <section className="user__product-action-container">
                    <button className="user__upload-products-btn">
                        <div onClick={e => navigate("/user/upload")} className="user__upload-products-btn-inner">
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

                { isMobile? <TagheaderCompDesktop toggleVisAdmin={toggleVisAdmin} setActiveInPageHeader={setActiveInPageHeader} activeInpageHeader={activeInpageHeader}/>:
                <TagheaderCompMobile toggleVisAdmin={toggleVisAdmin} setActiveInPageHeader={setActiveInPageHeader} activeInpageHeader={activeInpageHeader}/>}

                {/* <TagsComp selectedTag={selectedTag} setSelectedTag={setSelectedTag}/> */}

                <PageSelectComp inPageName={activeInpageHeader} />

            </main>
        </section>
    )
}

export default User