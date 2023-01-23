import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterContext } from "../auth/context/registerContext";
import LoginModal from "../auth/loginModal";
import IdentityBtn from "../buttons/identityBtn";
import LoootyLogo, { LoootyLogoStatic } from "../loootyLogo";
import { FaMailBulk, FaTimes, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaQq } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";

import { Link as Links } from "react-scroll";
import { GoThreeBars } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { logOutAction } from "../../api/auth";
import { setSelectedSubPage } from "../../redux/reducers/userStateReducer";

const userSubNavl = [
  "STORE",
  "PROFILE",
  "LIBRARY",
  "MESSAGES",
  "SALES",
  "SETTINGS",
  "BALANCE",
  "SUSCRIBERS",
];

const comingSoonList = [
  "Battlecry",
  "Loooty was born..",
  "Features",
  "Are you a creator?",
  "What would you sell?",
  "Loooty is for everyone",
  "Launch with us!",
];

const Sidebar = ({
  className,
  pageType = "home",
  // userSubNavList = userSubNavl,
  isComingSoon,
}) => {
  const [showLogin, setShowLogin] = useState(false);
  const [activeSidebar, setActiveSidebar] = useState(1);
  const [showRegModal, setShowRegModal] = useContext(RegisterContext);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [slideIn, setSlideIn] = useState(false);
  const [userSubNavs, setUserSubNavs] = useState(
    isComingSoon ? comingSoonList : userSubNavl
  );
  const [userNavSelected, setUserNavSelected] = useState("STORE");

  return (
    // { showRegModal.isSidebarOpen &&
    <section
      onClick={() => {
        setSlideIn((old) => true);
        setTimeout(() => {
          setSlideIn(false);
          setShowRegModal({ ...showRegModal, isSidebarOpen: false });
          //  setFadeOut(false)
        }, 600);
      }}
      className={`landing__overlay ${
        slideIn ? "landing__overlay-dismiss" : ""
      }`}
    >
      {/* } */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="landing__sidebar-toggle-close"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {!showRegModal.isSidebarOpen ? (
          <GoThreeBars
            className="landing__sidebar-toggler-close"
            style={{ color: "white", fontSize: "2rem" }}
          />
        ) : (
          <FaTimes
            onClick={() => {
              setSlideIn((old) => true);
              setTimeout(() => {
                setSlideIn(false);
                setShowRegModal({ ...showRegModal, isSidebarOpen: false });
                //  setFadeOut(false)
              }, 600);
            }}
            className="landing__sidebar-toggler"
            style={{ color: "white", fontSize: "2rem" }}
          />
        )}
      </div>
      <section
        onClick={(e) => e.stopPropagation()}
        className={`sidebar ${className}`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="sidebar__inner-container"
        >
          <section className="sidebar__auth-sec">
            {user && user.user ? (
              <>
                {pageType === "user" && (
                  <>
                    {userSubNavs.map((item, index) => {
                      return (
                        <li
                          key={item}
                          onClick={() => {
                            setUserNavSelected(item);
                            navigate(`/user/${item.toLowerCase()}`);
                            dispatch(
                              setSelectedSubPage({
                                selected: item.toLowerCase(),
                              })
                            );
                          }}
                          className={`landing__nav-item login ${
                            userNavSelected === item ? "signup" : "login"
                          }`}
                        >
                          <Link className="landing__nav-link" to={"#"}>
                            {item}
                          </Link>
                        </li>
                      );
                    })}
                  </>
                )}
              </>
            ) : isComingSoon ? (
              <div
                style={{
                  flexDirection: "column",
                  width: "100%",
                }}
                className="coming__soon-navbar-request-access"
              >
                <a
                  style={{ width: "90%" }}
                  target={"_blank"}
                  href="https://docs.google.com/forms/d/1kAtVYoDY54AB-mnQ-MFLvxiIO7fkdBzqUDxwVUsPyqw/edit?usp=drivesdk"
                  className="coming__soon-navbar-request-btn"
                >
                  <span>Request Access</span>
                </a>
                <button
                  style={{ width: "90%" }}
                  onClick={() =>
                    setShowRegModal((old) => ({ ...old, login: true }))
                  }
                  className="coming__soon-navbar-request-btn orange"
                >
                  <span>Sign In</span>
                </button>
              </div>
            ) : (
              <>
                <li
                  style={{ width: "100%" }}
                  onClick={(e) => {
                    setShowRegModal({
                      ...showRegModal,
                      login: !showRegModal.register,
                    });
                  }}
                  className={"landing__nav-item login"}
                >
                  <Link className="landing__nav-link" to={"#"}>
                    Sign&nbsp;In
                  </Link>
                  {/* {showLogin &&<LoginModal onClick={e=>e.stopPropagation()}/>} */}
                </li>

                <li
                  onClick={(e) => {
                    setShowRegModal({
                      ...showRegModal,
                      register: !showRegModal.register,
                    });
                  }}
                  className={"landing__nav-item signup"}
                >
                  <Link
                    onClick={(e) => e.stopPropagation()}
                    className="landing__nav-link"
                    to={"#"}
                  >
                    Sign&nbsp;Up
                  </Link>
                </li>
              </>
            )}
          </section>

          {pageType === "home" && !isComingSoon && (
            <section className="sidebar__tags">
              <Links offset={-100} to="freebies" spy={true} smooth={true}>
                <IdentityBtn
                  onClick={() => setActiveSidebar(1)}
                  style={{
                    width: "100%",
                    fontSize: ".7rem",
                    borderLeft: `1rem solid ${
                      activeSidebar == 1 ? "#7C187A" : "#353449"
                    }`,
                    transform: `translateX(${
                      activeSidebar == 1 ? "0rem" : "-2rem"
                    }) skewX(-25deg)`,
                  }}
                  text={"WEEKLY FREEBIES"}
                />
              </Links>
              <Links offset={-100} to="picks" spy={true} smooth={true}>
                <IdentityBtn
                  onClick={() => setActiveSidebar(2)}
                  style={{
                    width: "100%",
                    fontSize: ".7rem",
                    borderLeft: `1rem solid ${
                      activeSidebar == 2 ? "#7C187A" : "#353449"
                    }`,
                    transform: `translateX(${
                      activeSidebar == 2 ? "0rem" : "-2rem"
                    }) skewX(-25deg)`,
                  }}
                  text={"DAILY PICKS"}
                />
              </Links>
              <Links offset={-100} to="products" spy={true} smooth={true}>
                <IdentityBtn
                  onClick={() => setActiveSidebar(3)}
                  style={{
                    width: "100%",
                    fontSize: ".7rem",
                    borderLeft: `1rem solid ${
                      activeSidebar == 3 ? "#7C187A" : "#353449"
                    }`,
                    transform: `translateX(${
                      activeSidebar == 3 ? "0rem" : "-2rem"
                    }) skewX(-25deg)`,
                  }}
                  text={"ALL PRODUCTS"}
                />
              </Links>
              <Links offset={-200} to="collections" spy={true} smooth={true}>
                <IdentityBtn
                  onClick={() => setActiveSidebar(4)}
                  style={{
                    width: "100%",
                    fontSize: ".7rem",
                    borderLeft: `1rem solid ${
                      activeSidebar == 4 ? "#7C187A" : "#353449"
                    }`,
                    transform: `translateX(${
                      activeSidebar == 4 ? "0rem" : "-2rem"
                    }) skewX(-25deg)`,
                  }}
                  text={"LATEST COLLECTIONS"}
                />
              </Links>
              <Links offset={-100} to="earn" spy={true} smooth={true}>
                <IdentityBtn
                  onClick={() => setActiveSidebar(5)}
                  style={{
                    width: "100%",
                    fontSize: ".7rem",
                    borderLeft: `1rem solid ${
                      activeSidebar == 5 ? "#7C187A" : "#353449"
                    }`,
                    transform: `translateX(${
                      activeSidebar == 5 ? "0rem" : "-2rem"
                    }) skewX(-25deg)`,
                  }}
                  text={"LOOOTY EARN"}
                />
              </Links>
              <Links offset={-100} to="awesome" spy={true} smooth={true}>
                <IdentityBtn
                  onClick={() => setActiveSidebar(6)}
                  style={{
                    width: "100%",
                    fontSize: ".7rem",
                    borderLeft: `1rem solid ${
                      activeSidebar == 6 ? "#7C187A" : "#353449"
                    }`,
                    transform: `translateX(${
                      activeSidebar == 6 ? "0rem" : "-2rem"
                    }) skewX(-25deg)`,
                  }}
                  text={"AWESOME ARTS"}
                />
              </Links>
            </section>
          )}

          {/* coming soon */}
          {isComingSoon && (
            <section className="sidebar__tags">
              <Links offset={-100} to="battlecry" spy={true} smooth={true}>
                <IdentityBtn
                  onClick={() => setActiveSidebar(1)}
                  style={{
                    width: "100%",
                    fontSize: ".7rem",
                    borderLeft: `1rem solid ${
                      activeSidebar == 1 ? "#7C187A" : "#353449"
                    }`,
                    transform: `translateX(${
                      activeSidebar == 1 ? "0rem" : "-2rem"
                    }) skewX(-25deg)`,
                  }}
                  text={"Battlecry"}
                />
              </Links>
              <Links offset={-100} to="born" spy={true} smooth={true}>
                <IdentityBtn
                  onClick={() => setActiveSidebar(2)}
                  style={{
                    width: "100%",
                    fontSize: ".7rem",
                    borderLeft: `1rem solid ${
                      activeSidebar == 2 ? "#7C187A" : "#353449"
                    }`,
                    transform: `translateX(${
                      activeSidebar == 2 ? "0rem" : "-2rem"
                    }) skewX(-25deg)`,
                  }}
                  text={"Loooty was born.."}
                />
              </Links>
              {/* <Links offset={-100} to="products" spy={true} smooth={true}>
                <IdentityBtn
                  onClick={() => setActiveSidebar(3)}
                  style={{
                    width: "100%",
                    fontSize: ".7rem",
                    borderLeft: `1rem solid ${
                      activeSidebar == 3 ? "#7C187A" : "#353449"
                    }`,
                    transform: `translateX(${
                      activeSidebar == 3 ? "0rem" : "-2rem"
                    }) skewX(-25deg)`,
                  }}
                  text={"Features"}
                />
              </Links> */}
              <Links offset={-200} to="creator" spy={true} smooth={true}>
                <IdentityBtn
                  onClick={() => setActiveSidebar(4)}
                  style={{
                    width: "100%",
                    fontSize: ".7rem",
                    borderLeft: `1rem solid ${
                      activeSidebar == 4 ? "#7C187A" : "#353449"
                    }`,
                    transform: `translateX(${
                      activeSidebar == 4 ? "0rem" : "-2rem"
                    }) skewX(-25deg)`,
                  }}
                  text={"Are you a creator?"}
                />
              </Links>
              <Links offset={-100} to="tosell" spy={true} smooth={true}>
                <IdentityBtn
                  onClick={() => setActiveSidebar(5)}
                  style={{
                    width: "100%",
                    fontSize: ".7rem",
                    borderLeft: `1rem solid ${
                      activeSidebar == 5 ? "#7C187A" : "#353449"
                    }`,
                    transform: `translateX(${
                      activeSidebar == 5 ? "0rem" : "-2rem"
                    }) skewX(-25deg)`,
                  }}
                  text={"What would you sell?"}
                />
              </Links>
              <Links offset={-100} to="everyone" spy={true} smooth={true}>
                <IdentityBtn
                  onClick={() => setActiveSidebar(6)}
                  style={{
                    width: "100%",
                    fontSize: ".7rem",
                    borderLeft: `1rem solid ${
                      activeSidebar == 6 ? "#7C187A" : "#353449"
                    }`,
                    transform: `translateX(${
                      activeSidebar == 6 ? "0rem" : "-2rem"
                    }) skewX(-25deg)`,
                  }}
                  text={"Loooty is for everyone"}
                />
              </Links>
              <Links offset={-100} to="supporters" spy={true} smooth={true}>
                <IdentityBtn
                  onClick={() => setActiveSidebar(7)}
                  style={{
                    width: "100%",
                    fontSize: ".7rem",
                    borderLeft: `1rem solid ${
                      activeSidebar == 7 ? "#7C187A" : "#353449"
                    }`,
                    transform: `translateX(${
                      activeSidebar == 7 ? "0rem" : "-2rem"
                    }) skewX(-25deg)`,
                  }}
                  text={"Launch with us!"}
                />
              </Links>

              <Links offset={-100} to="footer" spy={true} smooth={true}>
                <IdentityBtn
                  onClick={() => setActiveSidebar(8)}
                  style={{
                    width: "100%",
                    fontSize: ".7rem",
                    borderLeft: `1rem solid ${
                      activeSidebar == 8 ? "#7C187A" : "#353449"
                    }`,
                    transform: `translateX(${
                      activeSidebar == 8 ? "0rem" : "-2rem"
                    }) skewX(-25deg)`,
                  }}
                  text={"Know when we Launch!"}
                />
              </Links>
            </section>
          )}

          <section className="sidebar__footer">
            <div className="sidebar__top">
              <LoootyLogoStatic />
              About
            </div>

            <ul className="sidebar__socials">
              {!isComingSoon && <li className="sidebar__socials-item">
                <FaMailBulk />
                Newsletter
              </li>}
              <li className="sidebar__socials-item">
                <FaFacebook />
                Facebook
              </li>

              <li className="sidebar__socials-item">
                <FaInstagramSquare />
                Instagram
              </li>

              <li className="sidebar__socials-item">
                <FaTwitter />
                Twitter
              </li>

              <li className="sidebar__socials-item">
                <FaTwitter />
                Twitter
              </li>
            </ul>

            {!isComingSoon && <ul className="sidebar__bottom">
              <li className="sidebar__bottom-item">
                <FaQq />
                F.A.Q
              </li>
              <li className="sidebar__bottom-item">
                <FaTerminal />
                Terms of Service
              </li>
              <li className="sidebar__bottom-item">
                <FaPrint />
                Privacy Policy
              </li>
              {user.user && (
                <li
                  style={{ marginTop: "1rem" }}
                  onClick={async () => dispatch(logOutAction())}
                  className={"landing__nav-item logout"}
                >
                  <Link
                    onClick={(e) => e.stopPropagation()}
                    className="landing__nav-link"
                    to={"#"}
                  >
                    Log&nbsp;Out
                  </Link>
                </li>
              )}
            </ul>}
          </section>
        </div>
      </section>
    </section>
  );
};

export default Sidebar;
