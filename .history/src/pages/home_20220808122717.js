import LandCard from "../component/card/landCard"
import WolfGuyImg from "../assets/image/wolfguyfeather.jpg"
import TsunamiImg from "../assets/image/tsunami.jpg"
import ScaryImg from "../assets/image/scary.jpg"
import CatmanImg from "../assets/image/catman.jpg"
import coloredhouseImg from "../assets/image/coloredhouse.webp"

import MonkeyFaceImg from "../assets/image/monkeyface.jpg"
import CatHatImg from "../assets/image/cathat.jpg"
import CatPinImg from "../assets/image/catpin.jpg"
import MonkeyheadsetImg from "../assets/image/monkeyheadset.jpg"
import WolfDogImg from "../assets/image/wolfdog.jpg"
import NavBar from "../component/navbar/navbar"
import Slogan from "../component/landing/slogan"
import SearchBar from "../component/search/SearchBar"
import ProductTags from "../component/tags/productTags"
import StartSelling from "../component/landing/startSelling"
import DoubleCard from "../component/card/doubleCard"
import PartnerStore from "../component/sections/partnerStore"
import Footer from "../component/footer/footer"
import SignUpModal from "../component/auth/signUpModal"
import { useContext, useEffect, useState } from "react"
import { RegisterContext } from "../component/auth/context/registerContext"
import OpenStoreModal from "../component/auth/openStoreModal"
import CGBar, { CGBarSlim } from "../component/card/cbBar"
import Sidebar from "../component/sidebar/sidebar"
import SignInModal from "../component/auth/signInModal"

import { useMediaQuery } from "react-responsive"






const Home = () => {
    const [yScroll, setYScroll] = useState(0)
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const isMobile = useMediaQuery({minWidth: 320, maxWidth: 480})
   
    

    const handleScroll = (event) => {
        // console.log(window.scrollY, "hey")
        setYScroll(window.scrollY)
        
    }

    useEffect(() => {
        
        window.addEventListener("scroll", (e) =>handleScroll(e));

    },[])

    const [showRegModal, setShowRegModal] = useContext(RegisterContext)
    const ImageGalleryComp = ({img}) =>(
        // <div className="landing__gallery-image-container">
            <img src={img} className="landing__gallery-image" alt="" />
        // </div>
    )

    const RecentPost = () => {
        return (
            <div className="landing__recent-post">
                <h2 className="landing__recent-post-title">
                    CG Arts Tutorials you don't want to miss: Part 1
                </h2>

                <p className="landing__recent-post-body">
                    it never hurts to want to up your game whether its from second vets or....
                </p>

                <div className="landing__recent-prem-cont">
                    <span style={{color:"#34B6EA"}}>Tips and tricks</span>
                    <span>by Sarah</span>
                    <span>16<sup>th</sup> March, 2022 </span>
                </div>
            </div>
        )
    }

    const CommunityPost = () => {
        return (
            <div className="landing__community-post">
                <img src={CatmanImg} className="landing__community-img" alt="" />
                <div className="landing__community-post-inner">
                    <h2 className="landing__community-post-title">
                         Leo art Journey
                    </h2>

                    <p className="landing__community-post-body">
                        it never hurts to want to up your game whether you want to learn from second vets or....
                    </p>

                    <div className="landing__community-prem-cont">
                        <span style={{color:"#34B6EA"}}>Leirie</span>
                        <span>16<sup>th</sup> March, 2022 </span>
                    </div>
                </div>
                
            </div>
        )
    }

   const  [slideIn, setSlideIn] = useState(false)

    
    return (
        <section className="landing__main-app">

            {showRegModal.isSidebarOpen && <Sidebar className={slideIn? 'fade-out-sidebar': ''} />}
            {/* <div className="landing__app-container"> */}
                { showRegModal.isSidebarOpen && <section onClick={() => {
                    setSlideIn(old => true)
                    setTimeout(() =>{
                        setSlideIn(false)
                        setShowRegModal({...showRegModal, isSidebarOpen: false})
                        //  setFadeOut(false)
                        }, 700)


                }} className= {`landing__overlay ${slideIn? "landing__overlay-dismiss": ''}`}></section>}
                {/* { showRegModal.register && <SignUpModal /> }
                { showRegModal.login && <SignInModal /> }

                { showRegModal.openStore && <OpenStoreModal/>} */}

                {/* <header className="landing__header"> */}
                    {/* <NavBar shortSearch={yScroll > 470 } style={{paddingBottom: "0"}} search={yScroll > 470 }/> */}
                    
                    {/* <Slogan/> */}
                {/* </header> */}

                
{/* 
            <footer className="landing__footer">
                <Footer />
            </footer> */}
        {/* </div> */}
    </section>
        )
}

export default Home
