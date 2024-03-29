import LandCard from "../component/card/landCard";

import NavBar from "../component/navbar/navbar";
import Slogan from "../component/landing/slogan";
import SearchBar from "../component/search/SearchBar";
import ProductTags from "../component/tags/productTags";
import StartSelling from "../component/landing/startSelling";
import DoubleCard from "../component/card/doubleCard";
import PartnerStore from "../component/sections/partnerStore";
import Footer from "../component/footer/footer";
import { useContext, useEffect, useState } from "react";
import { RegisterContext } from "../component/auth/context/registerContext";
import CGBar, { CGBarSlim } from "../component/card/cbBar";
import data from "../data/data.json";
import { useMediaQuery } from "react-responsive";
import FilterSystem from "../component/landing/FilterSystem";
import { useNavigate } from "react-router-dom";

const WolfGuyImg = process.env.PUBLIC_URL + "/assets/image/wolfguyfeather.jpg";
const TsunamiImg = process.env.PUBLIC_URL + "/assets/image/tsunami.jpg";
const ScaryImg = process.env.PUBLIC_URL + "/assets/image/scary.jpg";
const CatmanImg = process.env.PUBLIC_URL + "/assets/image/catman.jpg";
const coloredhouseImg =
  process.env.PUBLIC_URL + "/assets/image/coloredhouse.webp";

const MonkeyFaceImg = process.env.PUBLIC_URL + "/assets/image/monkeyface.jpg";
const CatHatImg = process.env.PUBLIC_URL + "/assets/image/cathat.jpg";
const CatPinImg = process.env.PUBLIC_URL + "/assets/image/catpin.jpg";
const MonkeyheadsetImg =
  process.env.PUBLIC_URL + "/assets/image/monkeyheadset.jpg";
const WolfDogImg = process.env.PUBLIC_URL + "/assets/image/wolfdog.jpg";

const Home = () => {
  const [yScroll, setYScroll] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [weeklyFreebiesProduct, setWeeklyFreebiesProduct] = useState();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 });

  const handleMainAppClick = () => {
    setShowRegModal((old) => ({ ...old, loginDrop: false }));
  };

  const handleScroll = (event) => {
    setYScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleScroll(e));
  }, []);

  const [showRegModal, setShowRegModal] = useContext(RegisterContext);
  const ImageGalleryComp = ({ img }) => (
    // <div className="landing__gallery-image-container">
    <img src={img} className="landing__gallery-image" alt="" />
    // </div>
  );

  const RecentPost = () => {
    return (
      <div className="landing__recent-post">
        <h2 className="landing__recent-post-title">
          CG Arts Tutorials you don't want to miss: Part 1
        </h2>

        <p className="landing__recent-post-body">
          it never hurts to want to up your game whether its from second vets
          or....
        </p>

        <div className="landing__recent-prem-cont">
          <span style={{ color: "#34B6EA" }}>Tips and tricks</span>
          <span>by Sarah</span>
          <span>
            16<sup>th</sup> March, 2022{" "}
          </span>
        </div>
      </div>
    );
  };

  const CommunityPost = () => {
    return (
      <div className="landing__community-post">
        <img src={CatmanImg} className="landing__community-img" alt="" />
        <div className="landing__community-post-inner">
          <h2 className="landing__community-post-title">Leo art Journey</h2>

          <p className="landing__community-post-body">
            it never hurts to want to up your game whether you want to learn
            from second vets or....
          </p>

          <div className="landing__community-prem-cont">
            <span style={{ color: "#34B6EA" }}>Leirie</span>
            <span>
              16<sup>th</sup> March, 2022{" "}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section onClick={handleMainAppClick} className="landing__main-app">
      <div className="landing__app-container">
        <header className="landing__header">
          <NavBar
            pageType={"home"}
            shortSearch={yScroll > 470}
            style={{ paddingBottom: "0" }}
            search={yScroll > 470}
          />

          <Slogan />
        </header>

        <main className="landing__main">
          <section className="landing__search-section">
            <SearchBar />
          </section>

          <section id="freebies" className="landing__weekly-freebies-container">
            <button className="landing__weekly-freebies-btn">
              <span style={{ transform: "skewX(25deg)" }}>WEEKLY FREEBIES</span>
            </button>
          </section>

          <section className="landing__freebies-container">
            <div className="landing__freebies-inner-container">
              {data
                ? data.products.slice(0, 5).map((prod, index) => {
                    return (
                      <LandCard
                        key={prod.name}
                        onClick={(e) => navigate(`/buy/page/${index}`)}
                        img={prod.image}
                        title={prod.title}
                        ratings={prod.ratings}
                        owner={prod.ownerName}
                        numOfComments={prod.numOfComments}
                        numReviewers={prod.numReviewers}
                        price={prod.price}
                        firstTag={prod.firstTag}
                      />
                    );
                  })
                : null}
            </div>
          </section>

          <section className="landing__cg-tutorials">
            {yScroll > 1200 ? <CGBarSlim /> : null}
            <CGBar
              style={{
                visibility: yScroll < 1200 ? "visible" : "visible",
                //  backgroundColor:`${showRegModal.isSidebarOpen? "": "#15151C"}`, margin: `${showRegModal.isSidebarOpen || yScroll > 1000? "1rem auto": "1rem"}`, maxWidth: `${showRegModal.isSidebarOpen && yScroll > 1000? "80vw": "100%"}`
              }}
            />
          </section>

          <section id="picks" className="landing__weekly-freebies-container">
            <button className="landing__weekly-freebies-btn">
              <span style={{ transform: "skewX(25deg)" }}>DAILY PICKS</span>
            </button>
          </section>

          <section className="landing__freebies-container">
            <div className="landing__freebies-inner-container">
              {data
                ? data.products.slice(0, 5).map((prod) => {
                    return (
                      <LandCard
                        img={prod.image}
                        title={prod.title}
                        ratings={prod.ratings}
                        owner={prod.ownerName}
                        numOfComments={prod.numOfComments}
                        numReviewers={prod.numReviewers}
                        price={prod.price}
                        firstTag={prod.firstTag}
                      />
                    );
                  })
                : null}
            </div>
          </section>

          <section
            id="products"
            style={{ height: "15vh" }}
            className="landing__weekly-freebies-container"
          >
            <button className="landing__weekly-freebies-btn">
              <span style={{ transform: "skewX(25deg)" }}>
                ALL&nbsp;PRODUCTS
              </span>
            </button>

            <div className="landing__daily-picks-filters-container">
              <button
                style={{ backgroundColor: "#15151C", color: "#3E3E4F" }}
                className="landing__daily-picks-filters-btn"
              >
                <span style={{ transform: "skewX(25deg" }}>POPULAR</span>
              </button>
              <button
                style={{ backgroundColor: "#1D1D28", color: "#ffffff" }}
                className="landing__daily-picks-filters-btn"
              >
                <span style={{ transform: "skewX(25deg" }}>RECENT</span>
              </button>
              <button className="landing__daily-picks-filters-btn">
                <span style={{ transform: "skewX(25deg" }}>FREEBIES</span>
              </button>
              <button className="landing__daily-picks-filters-btn">
                <span style={{ transform: "skewX(25deg" }}>ON&amp;SALE</span>
              </button>
            </div>
          </section>
          {/* 
                        <section className="landing__show-filters-container">
                            <div className="landing__show-filters-inner-container">
                                <button className="landing__show-filters-btn">
                                    <span style={{transform: "skewX(25deg)"}}>
                                        SHOW FILTERS
                                    </span>
                                </button>
                            </div>

                            
                        </section> */}
          <FilterSystem />

          <section className="landing__all-products-container">
            <div className="landing__all-products-inner-container">
              {data
                ? data.products.map((prod) => {
                    return (
                      <LandCard
                        img={prod.image}
                        title={prod.title}
                        ratings={prod.ratings}
                        owner={prod.ownerName}
                        numOfComments={prod.numOfComments}
                        numReviewers={prod.numReviewers}
                        price={prod.price}
                        firstTag={prod.firstTag}
                      />
                    );
                  })
                : null}
            </div>
          </section>

          <div className="landing__filter-tag-container">
            <div className="landing__filter-tag-inner-container">
              <ProductTags txt={"BROWSE ALL PRODUCTS"} />
            </div>
          </div>

          <section className="landing__start-selling">
            <StartSelling onClick={(e) => navigate("/open/store")} />
          </section>

          {/* <OpenAStoreMain /> */}

          <section
            id="collections"
            className="landing__weekly-freebies-container"
          >
            <button className="landing__weekly-freebies-btn">
              <span style={{ transform: "skewX(25deg)" }}>
                LATEST COLLECTIONS
              </span>
            </button>
          </section>

          <section className="landing__latest-collection-cont">
            <div className="landing__double-inner-container">
              {data
                ? data.products.slice(0, 2).map((prod) => {
                    return (
                      <DoubleCard
                        title={prod.title}
                        img={prod.image}
                        owner={prod.ownerName}
                        firstTag={prod.firstTag}
                      />
                    );
                  })
                : null}
            </div>
          </section>

          <section className="landing__browse-all-products-container">
            <button className="landing__browse-all-products-btn">
              <span className="landing__browse-all-products-btn-text">
                BROWSE&nbsp;ALL&nbsp;PRODUCTS
              </span>
            </button>
          </section>

          <section
            id="earn"
            style={{ marginTop: "2rem" }}
            className="landing__weekly-freebies-container"
          >
            <button className="landing__weekly-freebies-btn">
              <span style={{ transform: "skewX(25deg)" }}>
                EARN MORE MONEY WITH LOOOTY
              </span>
            </button>
          </section>

          <PartnerStore />

          <section id="awesome" className="landing__awesome-arts-sec">
            <div className="landing__awesome-arts-sec-inner">
              <button className="landing__awesome-arts-btn">
                <span className="landing__awesome-arts-btn-text">
                  AWESOME ARTS BY OUT COMMUNITY
                </span>
              </button>
            </div>
          </section>

          <section className="landing__gallery">
            <div className="landing__gallery-first-move-container">
              <ImageGalleryComp img={CatmanImg} />
              <ImageGalleryComp img={CatmanImg} />
              <ImageGalleryComp img={coloredhouseImg} />
              <ImageGalleryComp img={CatPinImg} />
              <ImageGalleryComp img={MonkeyFaceImg} />
              <ImageGalleryComp img={CatPinImg} />
              <ImageGalleryComp img={CatmanImg} />
              <ImageGalleryComp img={WolfGuyImg} />
              <ImageGalleryComp img={CatmanImg} />
              <ImageGalleryComp img={MonkeyFaceImg} />
            </div>

            <div className="landing__gallery-second-move-container">
              <ImageGalleryComp img={CatmanImg} />
              <ImageGalleryComp img={coloredhouseImg} />
              <ImageGalleryComp img={MonkeyFaceImg} />
              <ImageGalleryComp img={coloredhouseImg} />
              <ImageGalleryComp img={WolfDogImg} />
              <ImageGalleryComp img={WolfGuyImg} />
              <ImageGalleryComp img={CatPinImg} />
              <ImageGalleryComp img={TsunamiImg} />
              <ImageGalleryComp img={CatmanImg} />

              <ImageGalleryComp img={WolfGuyImg} />
            </div>
          </section>

          <section className="landing__post-container">
            {!isMobile ? <div className="landing__divider"></div> : null}
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

              <CommunityPost />
              <CommunityPost />
            </div>
          </section>
        </main>

        <footer className="landing__footer">
          <Footer />
        </footer>
      </div>
    </section>
  );
};

export default Home;
