import "./styles/cssLoader";

import Home from "./pages/home";

import { Route, Routes } from "react-router-dom";
import { RegisterProvider } from "./component/auth/context/registerContext";
import OpenAStore from "./pages/openAStore";
import Experiment from "./pages/experiment";
import BuyPage from "./pages/buypage";
import Cart from "./pages/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./component/sidebar/sidebar";
import User from "./pages/user";
import UploadPage from "./pages/upload";
import Admin from "./pages/admin/Admin";
import Expanded from "./pages/admin/Expanded";
import NotificationPage from "./pages/notificationpage";
import ComingSoon from "./pages/comingSoon";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <ToastContainer />
      <RegisterProvider>
        <Routes>
          <Route path="/" element={user ? <Home /> : <ComingSoon />} exact />
          {/* <Route path="/*" element={user ? <Home /> : <ComingSoon />} exact /> */}
          <Route
            path="/open/store"
            element={user ? <OpenAStore /> : <ComingSoon />}
            exact
          />

          <Route
            path="/experiment"
            element={user ? <Experiment /> : <ComingSoon />}
            exact
          />
          <Route
            path="/buy/page/:id"
            element={user ? <BuyPage /> : <ComingSoon />}
            exact
          />
          <Route
            path="/cart"
            element={user ? <Cart /> : <ComingSoon />}
            exact
          />
          <Route
            path="/user/:subpage"
            element={user ? <User /> : <ComingSoon />}
            exact
          />
          <Route
            path="/user/upload"
            element={user ? <UploadPage /> : <ComingSoon />}
            exact
          />
          <Route
            path="/admin/product"
            element={user ? <Admin /> : <ComingSoon />}
            exact
          />
          <Route
            path="/admin/expanded"
            element={user ? <Expanded /> : <ComingSoon />}
            exact
          />
          <Route
            path="/notification"
            element={user ? <NotificationPage /> : <ComingSoon />}
            exact
          />
          <Route path="/coming/soon" element={<ComingSoon />} exact />
        </Routes>
      </RegisterProvider>
    </>
  );
}

export default App;
