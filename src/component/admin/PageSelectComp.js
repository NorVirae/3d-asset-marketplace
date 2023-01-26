import Suscribers from "../user/Suscribers";
import AffiliateAdmin from "./inpage/AfiliatesAdmin";
import CartsAdmin from "./inpage/CartsAdmin";
import HomeAdmin from "./inpage/HomeAdmin";
import PayoutsAdmin from "./inpage/PayoutsAdmin";
import ProductAdmin from "./inpage/ProductAdmin";
import StoreAdmin from "./inpage/StoreAdmin";
import TagsCatAdmin from "./inpage/TagsCatAdmin";
import UsersAdmin from "./inpage/UsersAdmin";


const PageSelectComp = ({ inPageName }) => {
    switch (inPageName) {
      case "home":
        return <HomeAdmin />;
      case "users":
        return <UsersAdmin />;
  
      case "stores":
        return <StoreAdmin />;
  
      case "affiliates":
        return <AffiliateAdmin />;
  
      case "payouts":
        return <PayoutsAdmin />;
  
      case "products":
        return <ProductAdmin />;
  
      case "tags&categories":
        return <TagsCatAdmin />;
  
      case "carts&wishlist":
        return <CartsAdmin />;
  
      default:
        return <></>;
    }
  };

  export default PageSelectComp
