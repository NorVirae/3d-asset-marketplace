import Collections from "./Collections";
import Library from "./Library";
import Messages from "./Messages";
import Profile from "./Profile";
import Sales from "./Sales";
import Settings from "./Settings";
import Product from "./Product";
import Suscribers from "./Suscribers";
import HomeAdmin from "./HomeAdmin";

const PageSelectComp = ({ inPageName }) => {
    switch (inPageName) {
      case "home":
        return <HomeAdmin />;
      case "users":
        return <Product />;
  
      case "stores":
        return <Library />;
  
      case "affiliates":
        return <Collections />;
  
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
