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





const Home = () => {
    return (
        <div>
            <header className="landing__header">
                <nav className="landing__navbar">
                    <Link className="landing__navbar-brand" to = "/">Loooty</Link>

                    <ul className="landing__navbar-inner-container">
                        <li className={"landing__nav-item"}>
                            <Link className="landing__nav-link" to={"landing__nav-link"}>Open a Store</Link>
                        </li>

                        <li className={"landing__nav-item"}>
                            <Link className="landing__nav-link" to={"landing__nav-link"}>Help</Link>
                        </li>

                        <li className={"landing__nav-item"}>
                            <Link className="landing__nav-link" to={"landing__nav-link"}>Sign In</Link>
                        </li>

                        <li className={"landing__nav-item"}>
                            <Link className="landing__nav-link" to={"landing__nav-link"}>Sign Up</Link>
                        </li>
                    </ul>

                </nav>

                <div className="landing__slogan">
                    <div className ="landing__slogan-first-text">
                        Welcome to the first marketplace for all things CG
                    </div>

                    <div className="landing__slogan-second-text">
                        Shop for curated Tools and more
                    </div>

                    <div className="landing__instruct-btn-container">
                        <button
                            className="landing__slogan-browse-text">
                            <span className="landing__slogan-browse">BROWSE</span>
                        </button>

                        <button
                            className="landing__slogan-sell">
                                <span className=""></span>SELL</button>
                    </div>
                </div>

            </header>

            <main className="landing__main">
                

                    <section className="landing__search-section">
                        <div className="landing__search-group-container">
                            <input placeholder="Search for products artist or stores" className="landing__search-stuff" />
                        </div>

                        <div className="landing__weekly-freebies-container">
                            <span>WEEKLY FREEBIES</span>
                        </div>
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
                            <span className="landing__filter-tags">Browse All products</span>

                        </div>
                    </section>
            </main>

            <footer className="landing__footer">

            </footer>
        </div>
        )
}

export default Home
