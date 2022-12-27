import Collections from "./Collections";
import Library from "./Library";
import Messages from "./Messages";
import Profile from "./ProFile";
import Sales from "./Sales";
import Settings from "./Settings";
import Store from "./Store";
import Suscribers from "./Suscribers";


const PageSelectComp = ({ inPageName }) => {
    switch (inPageName) {
      case "profile":
        return <Profile />;
      case "store":
        return <Store />;
  
      case "library":
        return <Library />;
  
      case "collections":
        return <Collections />;
  
      case "suscribers":
        return <Suscribers />;
  
      case "messages":
        return <Messages />;
  
      case "settings":
        return <Settings />;
  
      case "sales":
        return <Sales />;
  
      default:
        return <Store />;
    }
  };

  export default PageSelectComp