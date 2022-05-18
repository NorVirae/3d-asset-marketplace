import { Link } from "react-router-dom"
import LandCard from "../component/landing/cards/landCard"
import CGCard from "../component/landing/cards/CGCard"
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
import DoubleCard from "../component/landing/cards/doubleCard"
import PartnerStore from "../component/sections/partnerStore"





const Home = () => {

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
                <h2 className="landing__community-post-title">
                   Leo art Journey
                </h2>

                <p className="landing__community-post-body">
                    it never hurts to want to up your game whether you want to learn from second vets or....
                </p>

                <div className="landing__community-prem-cont">
                    <span>Leirie</span>
                    <span>16<sup>th</sup> March, 2022 </span>
                </div>
            </div>
        )
    }

    return (
        <div>
            <header className="landing__header">
                <NavBar />

                <Slogan/>

            </header>

            <main className="landing__main">
                

                    <SearchBar />

                    <section className="landing__freebies-container">
                        <div className="landing__freebies-inner-container">
                            <LandCard img={WolfGuyImg} title={""} titleAffirm={""}  />
                            <LandCard img={TsunamiImg} title={""} titleAffirm={""}  />
                            <LandCard img={ScaryImg} title={""} titleAffirm={""}  />
                            <LandCard img={CatmanImg} title={""} titleAffirm={""}  />
                            <LandCard img={coloredhouseImg} title={""} titleAffirm={""}  />


                        </div>
                    </section>

                    <section className="landing__cg-tutorials">
                        <div className="landing__cg-card-container">
                            <CGCard img={CatmanImg} />
                            <CGCard img={CatmanImg} />
                            <CGCard img={CatmanImg} />
                            <CGCard img={CatmanImg} />
                            <CGCard img={CatmanImg} />
                            <CGCard img={CatmanImg} />
                            <CGCard img={CatmanImg} />
                            <CGCard img={CatmanImg} />
                            <CGCard img={CatmanImg} />
                            <CGCard img={CatmanImg} />


                        </div>

                        <div className="landing__weekly-freebies-container">
                            <span>DAILY PICKS</span>
                        </div>
                    </section>
                    <section className="landing__freebies-container">
                        <div className="landing__freebies-inner-container">
                            <LandCard img={MonkeyFaceImg} title={""} titleAffirm={""}  />
                            <LandCard img={CatHatImg} title={""} titleAffirm={""}  />
                            <LandCard img={CatPinImg} title={""} titleAffirm={""}  />
                            <LandCard img={MonkeyheadsetImg} title={""} titleAffirm={""}  />
                            <LandCard img={WolfDogImg} title={""} titleAffirm={""}  />


                        </div>
                    </section>

                    <section className="landing__filters">
                        <div className="landing__weekly-freebies-container">
                            <span>DAILY PICKS</span>
                        </div>
                        
                    </section>

                    <section className="landing__all-products-container">
                        <div className="landing__all-products-inner-container">
                            <LandCard img={MonkeyFaceImg} title={""} titleAffirm={""}  />
                            <LandCard img={CatHatImg} title={""} titleAffirm={""}  />
                            <LandCard img={CatPinImg} title={""} titleAffirm={""}  />
                            <LandCard img={WolfGuyImg} title={""} titleAffirm={""}  />
                            <LandCard img={TsunamiImg} title={""} titleAffirm={""}  />
                            <LandCard img={ScaryImg} title={""} titleAffirm={""}  />
                            <LandCard img={CatmanImg} title={""} titleAffirm={""}  />
                            <LandCard img={coloredhouseImg} title={""} titleAffirm={""}  />
                            <LandCard img={CatPinImg} title={""} titleAffirm={""}  />
                            <LandCard img={MonkeyheadsetImg} title={""} titleAffirm={""}  />
                            <LandCard img={WolfDogImg} title={""} titleAffirm={""}  />
                            <LandCard img={WolfGuyImg} title={""} titleAffirm={""}  />
                            <LandCard img={TsunamiImg} title={""} titleAffirm={""}  />
                            <LandCard img={ScaryImg} title={""} titleAffirm={""}  />
                            <LandCard img={CatmanImg} title={""} titleAffirm={""}  />

                        </div>
                        <div className="landing__filter-tag-container">
                            <ProductTags txt={"Browse All products"} />
                            
                        </div>
                    </section>

                    <section className="landing__start-selling">
                        <StartSelling />
                        <div className="landing__latest-collection-container">
                            <ProductTags txt={"Latest Collections"} />
                        </div>
                    </section>

                    <section className="landing__latest-collection-cont">
                        <div className="landing__double-inner-container">
                            <DoubleCard img={CatmanImg}/>
                            <DoubleCard img={MonkeyFaceImg}/>


                        </div>
                    </section>

                    <section className="landing__browse-all-products-container">
                        <button className="landing__browse-all-products-btn">
                            <span className="landing__browse-all-products-btn-text">BROWSE ALL PRODUCTS</span>
                        </button>
                    </section>

                    <section className="landing__earn-more-container">
                        <div className="landing__earn-more-container-inner">
                            <button className="landing__earn-more-btn">
                                <span className="landing__earn-more-btn-text">
                                    EARN MORE MONEY WITH LOOOTY
                                </span>
                            </button>
                        </div>
                    </section>

                    <PartnerStore />

                    <section className="landing__awesome-arts-sec">
                        <div className="landing__awesome-arts-sec-inner">
                            <button className="landing__awesome-arts-btn">
                                <span className="landing__awesome-arts-btn-text">
                                        Awesome arts by our community
                                </span>
                            </button>
                        </div>
                    </section>

                    <section className="landing__gallery">
                        <div className="landing__gallery-first-move-container">
                            <ImageGalleryComp img={CatmanImg}/>
                            <ImageGalleryComp img={CatmanImg}/>
                            <ImageGalleryComp img={coloredhouseImg}/>
                            <ImageGalleryComp img={CatPinImg}/>
                            <ImageGalleryComp img={MonkeyFaceImg}/>
                            <ImageGalleryComp img={CatPinImg}/>
                            <ImageGalleryComp img={CatmanImg}/>
                            <ImageGalleryComp img={WolfGuyImg}/>
                            <ImageGalleryComp img={CatmanImg}/>
                            <ImageGalleryComp img={MonkeyFaceImg}/>

                        </div>

                        <div className="landing__gallery-second-move-container">
                            <ImageGalleryComp img={CatmanImg}/>
                            <ImageGalleryComp img={coloredhouseImg}/>
                            <ImageGalleryComp img={MonkeyFaceImg}/>
                            <ImageGalleryComp img={coloredhouseImg}/>
                            <ImageGalleryComp img={WolfDogImg}/>
                            <ImageGalleryComp img={WolfGuyImg}/>
                            <ImageGalleryComp img={CatPinImg}/>
                            <ImageGalleryComp img={TsunamiImg}/>
                            <ImageGalleryComp img={CatmanImg}/>
                            
                            <ImageGalleryComp img={WolfGuyImg}/>

                        </div>
                    </section>

                    <section className="landing__post-container">
                        <div className="landing__recent-blog-container">
                            <div className="landing__recent-blog-header-cont">
                                <button className="landing__recent-blog-header-btn">
                                    <span className="landing__recent-blog-header-text">
                                            RECENT BLOG POST
                                    </span>
                                </button>
                            </div>
                            <RecentPost />

                            <RecentPost />



                        </div>

                        <div className="landing__community-blog-container">
                            <div className="landing__community-blog-header-cont">
                                    <button className="landing__community-blog-header-btn">
                                        <span className="landing__recent-blog-header-text">
                                                COMMUNITY POST
                                        </span>
                                    </button>
                            </div>

                            

                        </div>

                    </section>

            </main>

            <footer className="landing__footer">

            </footer>
        </div>
        )
}

export default Home
