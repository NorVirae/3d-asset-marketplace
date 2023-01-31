import "./styles/cssLoader";

import Home from "./pages/home";

import { Route, Routes, Navigate } from "react-router-dom";
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
import SignUpExperimental from "./pages/signupExperimental";

function App() {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <ToastContainer />
      <RegisterProvider>
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/coming/soon" />}
            exact
          />
          {/* <Route path="/*" element={user ? <Home /> : <ComingSoon />} exact /> */}
          <Route
            path="/open/store"
            element={user ? <OpenAStore /> : <Navigate to="/coming/soon" />}
            exact
          />

          <Route
            path="/experiment"
            element={user ? <Experiment /> : <Navigate to="/coming/soon" />}
            exact
          />
          <Route
            path="/buy/page/:id"
            element={user ? <BuyPage /> : <Navigate to="/coming/soon" />}
            exact
          />
          <Route
            path="/cart"
            element={user ? <Cart /> : <Navigate to="/coming/soon" />}
            exact
          />
          <Route
            path="/user/:subpage"
            element={user ? <User /> : <Navigate to="/coming/soon" />}
            exact
          />
          <Route
            path="/user/upload"
            element={user ? <UploadPage /> : <Navigate to="/coming/soon" />}
            exact
          />
          <Route
            path="/admin/product"
            element={user ? <Admin /> : <Navigate to="/coming/soon" />}
            exact
          />
          <Route
            path="/admin/expanded"
            element={user ? <Expanded /> : <Navigate to="/coming/soon" />}
            exact
          />
          <Route
            path="/notification"
            element={
              user ? <NotificationPage /> : <Navigate to="/coming/soon" />
            }
            exact
          />

          <Route
            path="/signup/experimental"
            element={
              <SignUpExperimental /> 
            }
            exact
          />
          <Route path="/coming/soon" element={<ComingSoon />} exact />
        </Routes>
      </RegisterProvider>
    </>
  );
}

export default App;
