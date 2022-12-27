import { useSelector } from "react-redux";
import LandCard from "../card/landCard";

const WolfGuyImg = "/assets/image/wolfguyfeather.jpg";

const Store = () => {
    const products = useSelector((state) => state.products);
    return (
      <section className="user__store-freebies-container">
        <div className="user__store-freebies-inner-container">
          {products ? (
            products.map((product) => (
              <LandCard img={WolfGuyImg} title={""} titleAffirm={""} />
            ))
          ) : (
            <div className="user__no-product-div">
              You do not have any product yet!
            </div>
          )}
  
          {/* <LandCard img={TsunamiImg} title={""} titleAffirm={""} />
          <LandCard img={ScaryImg} title={""} titleAffirm={""} />
          <LandCard img={CatmanImg} title={""} titleAffirm={""} />
          <LandCard img={coloredhouseImg} title={""} titleAffirm={""} /> */}
        </div>
      </section>
    );
  };

  export default Store