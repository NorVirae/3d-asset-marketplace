import Collections from "./Collections";
import Library from "./Library";
import Messages from "./Messages";
import Profile from "./Profile";
import Sales from "./Sales";
import Settings from "./Settings";
import Product from "./Product";
import Suscribers from "./Suscribers";
import HomeAdmin from "./HomeAdmin";
import UsersAdmin from "./UsersAdmin";
import StoreAdmin from "./StoreAdmin";
import AffiliateAdmin from "./AfiliatesAdmin";

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
        return <Suscribers />;
  
      case "products":
        return <Product />;
  
      case "tags&categories":
        return <Settings />;
  
      case "carts":
        return <Sales />;
  
      default:
        return <></>;
    }
  };

  export default PageSelectComp
