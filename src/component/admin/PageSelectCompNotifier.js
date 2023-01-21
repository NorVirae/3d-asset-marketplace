import AllNotificationPage from "../notify-inpage/AllNotificationPage";
import Suscribers from "../user/Suscribers";
import AffiliateAdmin from "./inpage/AfiliatesAdmin";
import CartsAdmin from "./inpage/CartsAdmin";
import HomeAdmin from "./inpage/HomeAdmin";
import PayoutsAdmin from "./inpage/PayoutsAdmin";
import ProductAdmin from "./inpage/ProductAdmin";
import StoreAdmin from "./inpage/StoreAdmin";
import TagsCatAdmin from "./inpage/TagsCatAdmin";
import UsersAdmin from "./inpage/UsersAdmin";


const PageSelectCompNotifier = ({ inPageName }) => {
    switch (inPageName) {
      case "all (3)":
        return <AllNotificationPage />;
      
  
      default:
        return <AllNotificationPage />;
    }
  };

  export default PageSelectCompNotifier
