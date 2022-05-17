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





const Home = () => {
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
                            <span className="landing__browse-all-products-btn">BROWSE ALL PRODUCTS</span>
                        </button>
                    </section>
            </main>

            <footer className="landing__footer">

            </footer>
        </div>
        )
}

export default Home
