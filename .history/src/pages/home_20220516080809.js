import { Link } from "react-router-dom"
import LandCard from "../component/landing/landCard"
import CGCard from "../component/landing/CGCard"
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
                            {/* <LandCard img={TsunamiImg} title={""} titleAffirm={""}  />
                            <LandCard img={ScaryImg} title={""} titleAffirm={""}  />
                            <LandCard img={CatmanImg} title={""} titleAffirm={""}  />
                            <LandCard img={coloredhouseImg} title={""} titleAffirm={""}  />
                            <LandCard img={CatPinImg} title={""} titleAffirm={""}  />
                            <LandCard img={MonkeyheadsetImg} title={""} titleAffirm={""}  />
                            <LandCard img={WolfDogImg} title={""} titleAffirm={""}  />
                            <LandCard img={WolfGuyImg} title={""} titleAffirm={""}  />
                            <LandCard img={TsunamiImg} title={""} titleAffirm={""}  />
                            <LandCard img={ScaryImg} title={""} titleAffirm={""}  />
                            <LandCard img={CatmanImg} title={""} titleAffirm={""}  /> */}

                        </div>
                        <div className="landing__filter-tag-container">
                            <ProductTags txt={"Browse All products"} />
                            

                        </div>
                    </section>

                    <section className="landing__start-selling">
                        <div className="landing__start-selling-container">
                            <h1 className="landing__start-selling-text">
                                Start Selling on Loooty
                            </h1>

                            <h3 className="landing__start-selling-desc">
                                Share your art resources with the world and keep as much as 95% of revenues
                            </h3>

                            <button
                                className="landing__slogan-browse">
                                <span className="landing__slogan-browse-text">OPEN A STORE</span>
                            </button>
                        </div>
                    </section>
            </main>

            <footer className="landing__footer">

            </footer>
        </div>
        )
}

export default Home
