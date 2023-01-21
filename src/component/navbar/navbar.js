import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterContext } from "../auth/context/registerContext";
import LoginModal from "../auth/loginModal";
import LoootyLogo from "../loootyLogo";
import SearchBar from "../search/SearchBar";
import { GoThreeBars } from "react-icons/go";
import { IoSettingsSharp } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { RiNotification3Fill } from "react-icons/ri";
import { GrMail } from "react-icons/gr";
import NavSearchBar from "../search/navSearch";
import { useMediaQuery } from "react-responsive";
import SignUpModal from "../auth/signUpModal";
import SignInModal from "../auth/signInModal";
import OpenStoreModal from "../auth/openStoreModal";
import Sidebar from "../sidebar/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSubPage } from "../../redux/reducers/userStateReducer";

const CatmanImg = "../../assets/image/catman.jpg";

const NotificationItem = ({ selected, setSelected, index }) => {
  return (
    <div
      onClick={() => setSelected(index)}
      className={`landing__notification-item ${
        selected === index && "selected"
      }`}
    >
      <div className="landing__notification-img-container">
        <img src={CatmanImg} className="landing__notification-img" />
      </div>
      <div className="landing__notification-body">
        <h3 className="landing__notification-text">
          Loooty Your product - Sony Vision S has been published.
        </h3>
        <span className="landing__notification-sub">about a month ago</span>
      </div>
    </div>
  );
};

const NotificationDropModal = ({ onMouseEnter, onMouseLeave }) => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate()
  return (
    <section
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="landing__notification-modal"
    >
      <div className="landing__notifier-arrow-up"></div>
      <div className="landing__notification-body">
        <NotificationItem
          index={0}
          selected={selected}
          setSelected={setSelected}
        />
        <NotificationItem
          index={1}
          selected={selected}
          setSelected={setSelected}
        />
        <NotificationItem
          index={2}
          selected={selected}
          setSelected={setSelected}
        />
        <NotificationItem
          index={3}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <div className="landing__notification-footer">
        <span onClick={() => navigate("/notification")} className="landing__footer-text">all notifications</span>
      </div>
    </section>
  );
};

const NavLoggedIn = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()
  return (
    <ul className="landing__navbar-inner-container-li">
      <li
        onClick={() => {
          dispatch(setSelectedSubPage({ selected: "settings" }));

          navigate(`/user/${"settings"}?subpage=${"settings"}`);
        }}
        className="landing__navbar-logo-items"
      >
        <IoSettingsSharp />
      </li>
      <li className="landing__navbar-logo-items">
        <RiNotification3Fill onMouseEnter={() => setShowModal(true)} />
        {showModal && (
          <NotificationDropModal
            onMouseLeave={() => {
              setTimeout(() => {
                setShowModal(false);
              }, 500);
            }}
            onMouseEnter={() => setShowModal(true)}
          />
        )}
      </li>
      <li onClick={() => {
          dispatch(setSelectedSubPage({ selected: "messages" }));

          navigate(`/user/${"messages"}?subpage=${"messages"}`);
        }} className="landing__navbar-logo-items">
        <GrMail />
      </li>
      {/* 
      <li onClick={e=>navigate("/open/store")} className={"landing__nav-item"}>
                <Link className="landing__nav-link" to={"/open/store"}>Open&nbsp;a&nbsp;Store</Link>
            </li>
             */}
      <li className="landing__navbar-profile-container">
        <div
          onClick={() => navigate(`/user?subpage=${"store"}`)}
          className="landing__navbar-profile-img-container"
        >
          <img src={CatmanImg} alt="" className="landing__navbar-profile-img" />
        </div>
        <div
          onClick={() => navigate(`/user?subpage=${"store"}`)}
          className="landing__navbar-user-name"
        >
          {user && user.user ? user.user.name : "Login"}
        </div>
      </li>
    </ul>
  );
};

const NavLoggedOut = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegModal, setShowRegModal] = useContext(RegisterContext);
  const navigate = useNavigate();
  return (
    <ul className="landing__navbar-inner-container">
      <li className={"landing__nav-item"}>
        <Link className="landing__nav-link" to={"#"}>
          Help
        </Link>
      </li>

      <li
        onClick={(e) => {
          // setShowLogin(!showLogin);
          setShowRegModal({
            ...showRegModal,
            loginDrop: !showRegModal.loginDrop,
          });
          e.stopPropagation();
        }}
        className={"landing__nav-item login"}
      >
        <Link className="landing__nav-link" to={"#"}>
          Sign&nbsp;In
        </Link>
        {showRegModal.loginDrop && (
          <LoginModal onClick={(e) => e.stopPropagation()} />
        )}
      </li>

      <li
        onClick={(e) =>
          setShowRegModal({ ...showRegModal, register: !showRegModal.register })
        }
        className={"landing__nav-item signup"}
      >
        <Link className="landing__nav-link" to={"#"}>
          Sign&nbsp;Up
        </Link>
      </li>
    </ul>
  );
};

const NavBar = ({ search, style, shortSearch, pageType, loggedIn }) => {
  const [showRegModal, setShowRegModal] = useContext(RegisterContext);
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 });
  const user = useSelector((state) => state.user);
  const [yScroll, setYScroll] = useState(0);
  const [slideIn, setSlideIn] = useState(false);

  const handleScroll = (event) => {
    setYScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleScroll(e));

    return () => {
      window.removeEventListener("scroll", (e) => handleScroll(e));
    };
  }, []);

  return (
    <nav
      style={{
        ...style,
        background: `${yScroll > 50 ? "#232230" : "transparent"}`,
        width: `${
          isMobile ? "auto" : setShowRegModal.isSidebarOpen ? "82vw" : "100%"
        }`,
        right: `${setShowRegModal.isSidebarOpen ? "-19%" : "0%"}`,
        position: `${yScroll > 400 ? "fixed" : "sticky"}`,
      }}
      className="landing__navbar"
    >
      {showRegModal.register && <SignUpModal />}
      {showRegModal.login && <SignInModal />}

      {showRegModal.openStore && <OpenStoreModal />}

      {showRegModal.isSidebarOpen && (
        <Sidebar
          pageType={pageType}
          className={slideIn ? "fade-out-sidebar" : ""}
        />
      )}
      <div
        className="landing__sidebar-toggle"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {/* {!showRegModal.isSidebarOpen? */}
        <GoThreeBars
          className="landing__sidebar-toggler"
          onClick={() =>
            setShowRegModal((old) => ({ ...old, isSidebarOpen: true }))
          }
          style={{ color: "white", fontSize: "2rem" }}
        />
        {/* :<FaTimes className="landing__sidebar-toggler" onClick={() => setShowRegModal(old => ({...old, isSidebarOpen:false}))} style={{color: "white", fontSize: "2rem"}} /> */}
        {/* } */}
        {/* {search && ( */}
        <div>
          <NavSearchBar
            containerStyle={{ visibility: search ? "visible" : "hidden" }}
            short={shortSearch}
          />
        </div>
        {/* )} */}
      </div>

      <Link className="landing__navbar-brand" to="/">
        {/* <LoootyLogo color={"white"} style={{marginLeft: shortSearch? "-90%": "200%"}}/> */}
        <LoootyLogo
          color={"white"}
          // style={{ marginLeft: isMobile ? 0 : shortSearch ? "-98%" : "193%" }}
        />
      </Link>

      {!isMobile ? (
        user && user.user ? (
          <NavLoggedIn />
        ) : (
          <NavLoggedOut />
        )
      ) : null}
    </nav>
  );
};

export default NavBar;
