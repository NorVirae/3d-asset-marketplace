import { useContext, useEffect, useState } from "react";
import {
  MdAttachFile,
  MdCloudDownload,
  MdEdit,
  MdModeEditOutline,
} from "react-icons/md";
import LandCard from "../../component/card/landCard";
import IdentityBtn from "../../component/buttons/identityBtn";
import WolfGuyImg from "../../assets/image/wolfguyfeather.jpg";
import TsunamiImg from "../../assets/image/tsunami.jpg";
import ScaryImg from "../../assets/image/scary.jpg";
import CatmanImg from "../../assets/image/catman.jpg";

import coloredhouseImg from "../../assets/image/coloredhouse.webp";
import SearchBar from "../../component/search/SearchBar";
import {
  FaArrowAltCircleDown,
  FaArrowDown,
  FaFacebook,
  FaFacebookMessenger,
  FaInstagram,
  FaLinkedin,
  FaPaypal,
  FaPlusCircle,
  FaSave,
  FaSearch,
  FaSearchLocation,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../../api/auth";
import { ImFolder, ImFolderOpen } from "react-icons/im";
import { SuscribeInput } from "../../component/footer/footer";
import { BsTrash } from "react-icons/bs";
import { RiMailSendFill } from "react-icons/ri";
import { FcSettings } from "react-icons/fc";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { setSelectedSubPage } from "../../redux/reducers/userStateReducer";
import NavBar from "../../component/navbar/navbar";
import { GiPriceTag } from "react-icons/gi";
import { BiMailSend } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiFillFileZip, AiTwotoneMessage } from "react-icons/ai";
import { GrStripe } from "react-icons/gr";
import { RegisterContext } from "../../component/auth/context/registerContext";
import FilterSystem from "../../component/landing/FilterSystem";

const Store = () => {
  const [activeSideTab, setActiveSideTab] = useState("users");
  return (
    <section className="user__freebies-container">
      <section className="user__freebies-sidebar">
        <div className="user__freebies-header">
          <section className="user__freebies-sidebar-header">
            <div
              onClick={() => setActiveSideTab("all-products")}
              className={`user__freebies-sidebar-header-item ${
                activeSideTab === "all-products" &&
                "user__freebies-sidebar-header-item-active"
              }`}
            >
              ALL&nbsp;PRODUCTS
            </div>

            <div
              onClick={() => setActiveSideTab("features")}
              className={`user__freebies-sidebar-header-item ${
                activeSideTab === "features" &&
                "user__freebies-sidebar-header-item-active"
              }`}
            >
              FEATURES
            </div>

            <div
              onClick={() => setActiveSideTab("daily-picks")}
              className={`user__freebies-sidebar-header-item ${
                activeSideTab === "daily-picks" &&
                "user__freebies-sidebar-header-item-active"
              }`}
            >
              DAILY&nbsp;PICKS
            </div>
          </section>
          <div className="user__sidebar-profile-container">
            <div className="user__sidebar-img-container">
              <img
                className="user__sidebar-img"
                src={WolfGuyImg}
                alt="wolf-img"
              />
            </div>
            <h3>Beach House with Rumps</h3>
            <h6>By Pascal Garten in 3D assets</h6>
            <div className="user__sidebar-rating-container">
              <span className="user__main-rating-container">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span>4</span>
              </span>

              <span className="user__sidebar-message-container">
                <AiTwotoneMessage />
                <span>0</span>
              </span>
            </div>
          </div>

          <section className="user__sidebar-info">
            <div className="user__sidebar-info-field">
              <span className="user__sidebar-info-field-left">Rating</span>
              <span className="user__sidebar-info-field-right">Excellent</span>
            </div>

            <div className="user__sidebar-info-field">
              <span className="user__sidebar-info-field-left">
                views this month
              </span>
              <span className="user__sidebar-info-field-right">814</span>
            </div>

            <div className="user__sidebar-info-field">
              <span className="user__sidebar-info-field-left">Total Views</span>
              <span className="user__sidebar-info-field-right">714,436</span>
            </div>

            <div className="user__sidebar-info-field">
              <span className="user__sidebar-info-field-left">WishList</span>
              <span className="user__sidebar-info-field-right">49</span>
            </div>

            <div className="user__sidebar-info-field">
              <span className="user__sidebar-info-field-left">Purchases</span>
              <span className="user__sidebar-info-field-right">16</span>
            </div>
          </section>
        </div>
      </section>
      <div className="user__freebies-inner-container">
        {/* <FilterSystem /> */}
        <TagsComp />
        <div className="user__freebies-inner-container-inner">
          <LandCard img={WolfGuyImg} title={""} titleAffirm={""} />
          <LandCard img={TsunamiImg} title={""} titleAffirm={""} />
          <LandCard img={ScaryImg} title={""} titleAffirm={""} />
          <LandCard img={CatmanImg} title={""} titleAffirm={""} />
          <LandCard img={coloredhouseImg} title={""} titleAffirm={""} />
          <LandCard img={WolfGuyImg} title={""} titleAffirm={""} />
          <LandCard img={TsunamiImg} title={""} titleAffirm={""} />
          <LandCard img={ScaryImg} title={""} titleAffirm={""} />
          <LandCard img={CatmanImg} title={""} titleAffirm={""} />
          <LandCard img={coloredhouseImg} title={""} titleAffirm={""} />
        </div>
      </div>
    </section>
  );
};

const ProfileInput = ({ labelName, onChange, value, type }) => {
  const [save, setIsSave] = useState(true);
  return (
    <div className="user__main-profile-form-group">
      <div className="user__label-container">
        <label className="user__main-profile-label">
          <span className={"user__main-profile-label-inner"}>{labelName}</span>
        </label>
      </div>

      <section className="user__main-profile-form-control-container">
        <div className="user__main-profile-skew-container">
          <input
            type={type}
            disabled={save}
            onChange={onChange}
            value={value}
            className="user__main-profile-form-control"
          />
          <span className="user__main-profile-form-control-edit-btn">
            {save ? (
              <MdEdit
                onClick={() => setIsSave((old) => !old)}
                style={{ cursor: "pointer", transform: "skewX(20deg)" }}
              />
            ) : (
              <FaSave
                onClick={() => setIsSave((old) => !old)}
                style={{ cursor: "pointer", transform: "skewX(20deg)" }}
              />
            )}
          </span>
        </div>

        <span className="user__main-profile-info">
          This name will appear on your customers billing statement
        </span>
      </section>
    </div>
  );
};

const SocialMediaInput = ({ labelName, onChange, value, type }) => {
  const [save, setIsSave] = useState(true);

  return (
    <div className="user__main-profile-form-group">
      <div className="user__label-container">
        <label className="user__main-profile-label">
          <span className={"user__main-profile-label-inner"}>{labelName}</span>
        </label>
      </div>

      <section className="user__main-profile-form-control-container-social">
        <section className="user__main-profile-form-control-container-social-inner">
          <div className="user__main-profile-skew-container-social">
            <div className="user__main-profile-social-icon-container">
              <FaInstagram
                style={{
                  color: "385797",
                  fontSize: "2.1rem",
                  transform: "skewX(20deg)",
                }}
              />
            </div>
            <input
              type={type}
              disabled={save}
              onChange={onChange}
              value={value}
              className="user__main-profile-form-control-social"
            />
            <span className="user__main-profile-form-control-edit-btn">
              {save ? (
                <MdEdit
                  onClick={() => setIsSave((old) => !old)}
                  style={{ cursor: "pointer", transform: "skewX(20deg)" }}
                />
              ) : (
                <FaSave
                  onClick={() => setIsSave((old) => !old)}
                  style={{ cursor: "pointer", transform: "skewX(20deg)" }}
                />
              )}
            </span>
          </div>

          <div className="user__main-profile-skew-container-social">
            <div className="user__main-profile-social-icon-container">
              <FaTwitter
                style={{
                  color: "385797",
                  fontSize: "2.1rem",
                  transform: "skewX(20deg)",
                }}
              />
            </div>
            <input
              type={type}
              disabled={save}
              onChange={onChange}
              value={value}
              className="user__main-profile-form-control-social"
            />
            <span className="user__main-profile-form-control-edit-btn">
              {save ? (
                <MdEdit
                  onClick={() => setIsSave((old) => !old)}
                  style={{ cursor: "pointer", transform: "skewX(20deg)" }}
                />
              ) : (
                <FaSave
                  onClick={() => setIsSave((old) => !old)}
                  style={{ cursor: "pointer", transform: "skewX(20deg)" }}
                />
              )}
            </span>
          </div>
        </section>

        <section className="user__main-profile-form-control-container-social-inner">
          <div className="user__main-profile-skew-container-social">
            <div className="user__main-profile-social-icon-container">
              <FaFacebook
                style={{
                  color: "385797",
                  fontSize: "2.1rem",
                  transform: "skewX(20deg)",
                }}
              />
            </div>
            <input
              type={type}
              disabled={save}
              onChange={onChange}
              value={value}
              className="user__main-profile-form-control-social"
            />
            <span className="user__main-profile-form-control-edit-btn">
              {save ? (
                <MdEdit
                  onClick={() => setIsSave((old) => !old)}
                  style={{ cursor: "pointer", transform: "skewX(20deg)" }}
                />
              ) : (
                <FaSave
                  onClick={() => setIsSave((old) => !old)}
                  style={{ cursor: "pointer", transform: "skewX(20deg)" }}
                />
              )}
            </span>
          </div>

          <div className="user__main-profile-skew-container-social">
            <div className="user__main-profile-social-icon-container">
              <FaLinkedin
                style={{
                  color: "385797",
                  fontSize: "2.1rem",
                  transform: "skewX(20deg)",
                }}
              />
            </div>
            <input
              type={type}
              disabled={save}
              onChange={onChange}
              value={value}
              className="user__main-profile-form-control-social"
            />
            <span className="user__main-profile-form-control-edit-btn">
              {save ? (
                <MdEdit
                  onClick={() => setIsSave((old) => !old)}
                  style={{ cursor: "pointer", transform: "skewX(20deg)" }}
                />
              ) : (
                <FaSave
                  onClick={() => setIsSave((old) => !old)}
                  style={{ cursor: "pointer", transform: "skewX(20deg)" }}
                />
              )}
            </span>
          </div>
        </section>
      </section>
    </div>
  );
};

const Profile = () => {
  const user = useSelector((state) => state.user);
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    phone: "",
    description: "",
    dob: "",
    location: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.user) {
      setUserDetails((old) => ({
        ...old,
        username: user.user.name,
        email: user.user.email,
        phone: user.user.phone,
        description: user.user.description,
        birth_date: user.user.birth_date,
        picture: user.user.picture,
      }));
    }
  }, []);
  return (
    <section className="user__main-profile-container">
      <form className="user__main-profile-form">
        <ProfileInput
          onClick={(e) =>
            dispatch(
              updateUserAction({
                updateData: userDetails,
                accessToken: user && user.user ? user.user.access_token : "",
              })
            )
          }
          value={userDetails.username}
          onChange={(e) => {
            setUserDetails((old) => ({ ...old, username: e.target.value }));
            console.log("called");
          }}
          labelName={"USERNAME"}
        />
        <ProfileInput
          onClick={(e) =>
            dispatch(
              updateUserAction({
                updateData: userDetails,
                accessToken: user && user.user ? user.user.access_token : "",
              })
            )
          }
          value={userDetails.email}
          labelName={"EMAIL"}
        />

        <ProfileInput
          onClick={(e) =>
            dispatch(
              updateUserAction({
                updateData: userDetails,
                accessToken: user && user.user ? user.user.access_token : "",
              })
            )
          }
          onChange={(e) =>
            setUserDetails((old) => ({ ...old, username: e.target.value }))
          }
          labelName={"PHONE"}
        />
        <ProfileInput
          onClick={(e) =>
            dispatch(
              updateUserAction({
                updateData: userDetails,
                accessToken: user && user.user ? user.user.access_token : "",
              })
            )
          }
          value={userDetails.description}
          onChange={(e) =>
            setUserDetails((old) => ({ ...old, description: e.target.value }))
          }
          labelName={"BIO"}
        />
        <ProfileInput
          onClick={(e) =>
            dispatch(
              updateUserAction({
                updateData: userDetails,
                accessToken: user && user.user ? user.user.access_token : "",
              })
            )
          }
          type={"date"}
          value={userDetails.birth_date}
          onChange={(e) =>
            setUserDetails((old) => ({ ...old, birth_date: e.target.value }))
          }
          labelName={"DOB"}
        />
        <ProfileInput
          onClick={(e) =>
            dispatch(
              updateUserAction({
                updateData: userDetails,
                accessToken: user && user.user ? user.user.access_token : "",
              })
            )
          }
          value={userDetails.picture}
          onChange={(e) =>
            setUserDetails((old) => ({ ...old, picture: e.target.value }))
          }
          labelName={"PROFILE PICTURE"}
        />
        <SocialMediaInput
          onClick={(e) =>
            dispatch(
              updateUserAction({
                updateData: userDetails,
                accessToken: user && user.user ? user.user.access_token : "",
              })
            )
          }
          value={userDetails.picture}
          onChange={(e) =>
            setUserDetails((old) => ({ ...old, socialMedia: e.target.value }))
          }
          labelName={"SOCIAL MEDIA LINKS"}
        />
      </form>
    </section>
  );
};

const LibraryItem = ({ onClick, prodNumber, active = false, itemName }) => {
  return (
    <button
      onClick={onClick}
      className={`user__library-item ${active && "user__library-item-active"}`}
    >
      <div className="user__library-item-inner">
        {active ? (
          <ImFolderOpen
            className="user__lib-folder-large"
            style={{ fontSize: "1.4rem" }}
          />
        ) : (
          <ImFolder
            className="user__lib-folder-large"
            style={{ fontSize: "1rem" }}
          />
        )}
        <div className="user__library-item-body">
          <h5 className="user__library-item-name">{itemName}</h5>
        </div>
      </div>
      <span className="user__library-item-info-count">{prodNumber} items</span>
    </button>
  );
};

const LibraryCollectionCard = ({ img, id, setIsActive, isActive }) => {
  return (
    <section
      style={{ transform: isActive == id && "scale(1)" }}
      onClick={() => setIsActive(id)}
      className="user__main-lib-card"
    >
      <img
        className="user__main-lib-card-img"
        src={img}
        style={{ width: "" }}
        alt="collections"
      />
      <div className="user__main-lib-card-body">
        <h3 className="user__card-collection-title">Beach House with Rumps</h3>
        <p className="user__card-collection-description">
          by pascal garten in 3d assets
        </p>
      </div>

      <div className="user__main-lib-card-footer">
        <MdCloudDownload style={{ fontSize: "1.2rem" }} /> DOWNLOAD FILES
      </div>

      {isActive === id && <div className="user__pointy-arrow"></div>}
    </section>
  );
};

const Library = () => {
  const [activeSideUser, setActiveSideUser] = useState(0);
  const settingsItems = [
    "Notification",
    "New Folder(1)",
    "New Folder(2)",
    "Loooty backup",
  ];
  return (
    <section className="user__library">
      <div className="user__library-inner">
        <section className="user__library-sidebar">
          <section className="user__library-sidebar-header">
            <div className="user__library-sidebar-header-item">
              <span className="user__library-sidebar-header-item-text">
                {settingsItems[activeSideUser]}
              </span>
            </div>
          </section>

          <section className="user__library-sidebar-body">
            <button className="user__library-trash-btn">
              <span className="user__library-trash-btn-text">
                Create New Folder
              </span>
              <FaPlusCircle className="user__library-trash-btn-logo" />
            </button>
          </section>

          <section className="user__library-sidebar-body">
            <LibraryItem
              prodNumber={21}
              itemName={"All Products"}
              onClick={() => setActiveSideUser(0)}
              active={activeSideUser === 0}
            />
            <LibraryItem
              prodNumber={59}
              itemName={"New Folder(1)"}
              onClick={() => setActiveSideUser(1)}
              active={activeSideUser === 1}
            />
            <LibraryItem
              prodNumber={0}
              itemName={"New Folder(2)"}
              onClick={() => setActiveSideUser(2)}
              active={activeSideUser === 2}
            />
            <LibraryItem
              prodNumber={34}
              itemName={"Loooty backup"}
              onClick={() => setActiveSideUser(3)}
              active={activeSideUser === 3}
            />
          </section>
        </section>

        <section className="user__main-lib-container">
          <div className="user__main-lib-header">
            <SuscribeInput
              style={{}}
              btnStyle={{
                padding: ".1rem 2rem",
                height: "1.7rem",
                right: "1.7%",
              }}
              controlStyle={{ padding: ".4rem 8rem" }}
            />
          </div>

          <div className="user__main-lib-body">
            <LandCard img={WolfGuyImg} title={""} titleAffirm={""} />
            <LandCard img={TsunamiImg} title={""} titleAffirm={""} />
            <LandCard img={ScaryImg} title={""} titleAffirm={""} />
            <LandCard img={CatmanImg} title={""} titleAffirm={""} />
            <LandCard img={coloredhouseImg} title={""} titleAffirm={""} />
          </div>

          <div className="user__main-lib-footer"></div>
        </section>
      </div>
    </section>
  );
};

const MessageFriend = ({ onClick, active = false }) => {
  return (
    <button
      onClick={onClick}
      className={`user__message-friend ${
        active && "user__message-friend-active"
      }`}
    >
      <div className="user__message-friend-inner">
        <img className="user__message-friend-img" src={WolfGuyImg} alt="" />
        <div className="user__message-friend-body">
          <h5 className="user__msg-friend-name">
            Clement Seyfried
            <span className="user__msg-time">8:00 am</span>
          </h5>
          <p className="user__msg-preview">
            Howfar the zekie file ain't coming...
          </p>
        </div>
      </div>
    </button>
  );
};

const SenderMsg = () => {
  return (
    <section className="user__main-sender-msg-cont">
      <img className="user__main-sender-msg-img" src={CatmanImg} alt="" />
      <div className="user__main-sender-msg-inner">
        <p className="user__main-sender-talk">Hi There</p>
        <div className="user__main-sender-time">seen 12:00am</div>
      </div>
    </section>
  );
};

const ReceiverMsg = () => {
  return (
    <section className="user__main-receiver-msg-cont">
      <div className="user__main-receiver-msg-inner">
        <p>How ya doing?</p>
        <div>seen 12:00am</div>
      </div>
      <img className="user__main-receiver-msg-img" src={WolfGuyImg} alt="" />
    </section>
  );
};

const SuscribersCard = () => {
  return (
    <div className="users__suscribers-card">
      <div className="users__top-bg-image">
        <img className="users__top-bg-image-img" src={WolfGuyImg} />
      </div>

      <div className="users__bottom-bg-image-container">
        <img className="users__top-bg-image-profile" src={CatmanImg} />
        <div className="users__suscribers-count-container">
          <h3 className="users__suscribers-count-title">Liqair Studios</h3>
          <small className="users__suscribers-count">219.9k suscribers</small>
        </div>

        <p className="users__suscribers-count-info">
          we can only accept the most qualified setters at the moment
        </p>
        <div className="users__suscribers-location">
          <FaSearchLocation /> Enugu, Nigeria.
        </div>
        <button className="users__suscribers-btn">
          <span>Suscribed</span>
        </button>
      </div>
    </div>
  );
};

const Suscribers = () => {
  return (
    <section className="users__suscribers-container">
      <div className="users__suscribers-container-inner">
        <SuscribersCard />
        <SuscribersCard />
        <SuscribersCard />
        <SuscribersCard />
        <SuscribersCard />
      </div>
    </section>
  );
};

const Messages = () => {
  const [activeSideUser, setActiveSideUser] = useState(0);
  const [activeSideTab, setActiveSideTab] = useState("users");
  return (
    <section className="user__messages">
      <div className="user__messages-inner">
        <section className="user__message-sidebar">
          <section className="user__message-sidebar-header">
            <div
              onClick={() => setActiveSideTab("users")}
              className={`user__message-sidebar-header-item ${
                activeSideTab === "users" &&
                "user__message-sidebar-header-item-active"
              }`}
            >
              USERS
            </div>

            <div
              onClick={() => setActiveSideTab("loooty")}
              className={`user__message-sidebar-header-item ${
                activeSideTab === "loooty" &&
                "user__message-sidebar-header-item-active"
              }`}
            >
              LOOOTY
              <div className="user__message-notify"></div>
            </div>
          </section>

          <section className="user__message-sidebar-body">
            <MessageFriend
              onClick={() => setActiveSideUser(0)}
              active={activeSideUser === 0}
            />
            <MessageFriend
              onClick={() => setActiveSideUser(1)}
              active={activeSideUser === 1}
            />
            <MessageFriend
              onClick={() => setActiveSideUser(2)}
              active={activeSideUser === 2}
            />
          </section>

          <section className="user__message-sidebar-footer">
            <button className="user__message-trash-btn">
              <BsTrash className="user__message-trash-btn-logo" />
              <span className="user__message-trash-btn-text">Trash</span>
            </button>
          </section>
        </section>

        <section className="user__main-msg-container">
          <div className="user__main-msg-header">
            <span className="user__main-msg-header-text">Clement Seyfried</span>
          </div>

          <div className="user__main-msg-body">
            <SenderMsg />
            <ReceiverMsg />
          </div>

          <div className="user__main-msg-footer">
            <form className="user__main-msg-send-container">
              <div className="user__msg-form-group">
                <div className="user__msg-form-skew-container">
                  <button className="user__msg-form-doc-btn">
                    <MdAttachFile />
                  </button>

                  <input className="user__msg-form-control" />

                  <button className="user__msg-form-send-btn">
                    <RiMailSendFill style={{ transform: "skewX(20deg)" }} />
                    <span style={{ transform: "skewX(20deg)" }}> Send</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};

const SettingsItem = ({ onClick, active = false, itemName }) => {
  return (
    <button
      onClick={onClick}
      className={`user__settings-item ${
        active && "user__settings-item-active"
      }`}
    >
      <div className="user__settings-item-inner">
        <FcSettings />
        <div className="user__settings-item-body">
          <h5 className="user__settings-item-name">{itemName}</h5>
        </div>
      </div>
    </button>
  );
};

export const OrderCheckbox = ({ isActive = true, setIsActive }) => {
  return (
    <div
      style={{ opacity: "1" }}
      onClick={() => setIsActive(!isActive)}
      className="user__main-sett-checkbox"
    >
      <div
        style={{ backgroundColor: `${isActive ? "transparent" : "#FF9700"}` }}
        className="user__main-sett-checkbox-active"
      ></div>
    </div>
  );
};

const OrderItem = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      onClick={() => setIsChecked(!isChecked)}
      className="user__main-sett-item"
    >
      <OrderCheckbox isActive={isChecked} setIsActive={setIsChecked} />

      <div className="user__main-sett-item-body">
        <h4 className="user__main-sett-item-header"> Order Placed</h4>
        <p className="user__main-sett-item-main">
          Anytime an order is placed you will notified
        </p>
      </div>
    </div>
  );
};

const Settings = () => {
  const [activeSideUser, setActiveSideUser] = useState(0);
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const settingsItems = [
    "Notification",
    "Account",
    "Messaging",
    "Password",
    "User Name",
    "Blocking",
    "Payment",
    "Store",
    "Profile",
    "Sales",
  ];
  return (
    <section className="user__settings">
      <div className="user__settings-inner">
        <section className="user__settings-sidebar">
          <section className="user__settings-sidebar-header">
            <div className="user__settings-sidebar-header-item">
              <span className="user__settings-sidebar-header-item-text">
                {settingsItems[activeSideUser]}
              </span>
            </div>
          </section>

          <section className="user__settings-sidebar-body">
            <SettingsItem
              itemName={"Notification"}
              onClick={() => setActiveSideUser(0)}
              active={activeSideUser === 0}
            />
            <SettingsItem
              itemName={"Account"}
              onClick={() => setActiveSideUser(1)}
              active={activeSideUser === 1}
            />
            <SettingsItem
              itemName={"Messaging"}
              onClick={() => setActiveSideUser(2)}
              active={activeSideUser === 2}
            />
            <SettingsItem
              itemName={"Password"}
              onClick={() => setActiveSideUser(3)}
              active={activeSideUser === 3}
            />
            <SettingsItem
              itemName={"User Name"}
              onClick={() => setActiveSideUser(4)}
              active={activeSideUser === 4}
            />
            <SettingsItem
              itemName={"Blocking"}
              onClick={() => setActiveSideUser(5)}
              active={activeSideUser === 5}
            />
            <SettingsItem
              itemName={"Payment"}
              onClick={() => setActiveSideUser(6)}
              active={activeSideUser === 6}
            />
            <SettingsItem
              itemName={"Store"}
              onClick={() => setActiveSideUser(7)}
              active={activeSideUser === 7}
            />
            <SettingsItem
              itemName={"Profile"}
              onClick={() => setActiveSideUser(8)}
              active={activeSideUser === 8}
            />
            <SettingsItem
              itemName={"Sales"}
              onClick={() => setActiveSideUser(9)}
              active={activeSideUser === 9}
            />
          </section>

          <section className="user__settings-sidebar-footer">
            <button className="user__settings-trash-btn">
              <FcSettings className="user__settings-trash-btn-logo" />
              <span className="user__settings-trash-btn-text">STORE</span>
            </button>
          </section>
        </section>

        <section className="user__main-sett-container">
          <div className="user__main-sett-header">
            <span className="user__main-sett-header-text">
              the name will appear on your customers billing statement
            </span>
            {isDesktop && (
              <SuscribeInput
                style={{}}
                btnStyle={{
                  padding: ".1rem 2rem",
                  height: "1.7rem",
                  right: "1.7%",
                }}
                controlStyle={{ padding: ".4rem 8rem" }}
              />
            )}
          </div>

          <div className="user__main-sett-body">
            <div className="user__main-sett-body-left">
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
            </div>

            <div className="user__main-sett-body-left">
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
            </div>
          </div>

          <div className="user__main-sett-footer"></div>
        </section>
      </div>
    </section>
  );
};

const SalesDropdown = ({
  showDropdown = false,
  setShowDropdown,
  onMouseEnter,
  onMouseLeave,
  setSelected,
}) => {
  return showDropdown ? (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="user__sales-mc-dropdown-container"
    >
      <span onClick={(e) => setSelected("$30")}>$30</span>
      <span onClick={(e) => setSelected("$40")}>$40</span>
    </div>
  ) : null;
};

const CollectionDescription = () => {
  const [showDescription, setShowDescription] = useState(true);
  const [showFiles, setShowfiles] = useState(true);
  return (
    <div className="user__main-collection-preview">
      <div className="user__collection-preview">
        <img className="user__main-images-main-preview" src={WolfGuyImg} />
        <div className="user__main-images-preview-container">
          <img className="user__main-images-preview" src={ScaryImg} />
          <img className="user__main-images-preview" src={TsunamiImg} />
          <img className="user__main-images-preview" src={CatmanImg} />
          <img className="user__main-images-preview" src={CatmanImg} />
        </div>
      </div>

      <section className="user__collection-details">
        <h3>Black Panther | Character Modelling</h3>
        <div className="user__collection-details-body">
          <img className="user__main-img-owner" src={WolfGuyImg} />
          <span className="user__span-text">by:</span>
          <span className="user__collection-author-name">Jay Hills</span>
          <span className="user__span-text">in 3D Assets...</span>
          <button className="user__collection-send-message-btn">
            <span>
              <BiMailSend style={{ fontSize: "1.1rem" }} /> Message
            </span>
          </button>
        </div>

        <div className="user__collection-description">
          Description{" "}
          <IoMdArrowDropdown className="user__collection-drop-icon" />
        </div>

        <div className="user__collection-file-container-title">
          <span
            onClick={() => setShowfiles(!showFiles)}
            className="user__collection-file"
          >
            Files{" "}
            <IoMdArrowDropdown
              style={{
                transform: `${showFiles ? "rotate(-45deg) " : "rotate(0deg)"}`,
              }}
              className="user__collection-drop-icon"
            />
          </span>
          <button className="user__collection-download-all-btn">
            <span>
              <FaArrowAltCircleDown /> Download All
            </span>
          </button>
        </div>

        {showFiles && (
          <section className="user__collection-file-container">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div className="user__collection-main-file">
                <div className="user__collection-main-file-inner">
                  <AiFillFileZip className="user__collection-drop-icon" />
                  <span>MaleBody </span>
                  <span className="user__span-text">ZIP / 1.6 GB </span>
                </div>
                <FaArrowAltCircleDown className="user__collection-individual-download" />
              </div>
            ))}
          </section>
        )}
      </section>
    </div>
  );
};

const Collections = () => {
  const [activeSideUser, setActiveSideUser] = useState(0);
  const settingsItems = [
    "Notification",
    "New Folder(1)",
    "New Folder(2)",
    "Loooty backup",
  ];
  const [isActive, setIsActive] = useState(null);
  return (
    <section className="user__library">
      <div className="user__library-inner">
        <section className="user__library-sidebar">
          <section className="user__library-sidebar-header">
            <div className="user__library-sidebar-header-item">
              <span className="user__library-sidebar-header-item-text">
                {settingsItems[activeSideUser]}
              </span>
            </div>
          </section>

          <section className="user__library-sidebar-body">
            <button className="user__library-trash-btn">
              <span className="user__library-trash-btn-text">
                Create New Folder
              </span>
              <FaPlusCircle className="user__library-trash-btn-logo" />
            </button>
          </section>

          <section className="user__library-sidebar-body">
            <LibraryItem
              prodNumber={21}
              itemName={"All Products"}
              onClick={() => setActiveSideUser(0)}
              active={activeSideUser === 0}
            />
            <LibraryItem
              prodNumber={59}
              itemName={"New Folder(1)"}
              onClick={() => setActiveSideUser(1)}
              active={activeSideUser === 1}
            />
            <LibraryItem
              prodNumber={0}
              itemName={"New Folder(2)"}
              onClick={() => setActiveSideUser(2)}
              active={activeSideUser === 2}
            />
            <LibraryItem
              prodNumber={34}
              itemName={"Loooty backup"}
              onClick={() => setActiveSideUser(3)}
              active={activeSideUser === 3}
            />
          </section>
        </section>

        <section className="user__main-lib-container">
          <div className="user__main-lib-header">
            <SuscribeInput
              style={{}}
              btnStyle={{
                padding: ".1rem 2rem",
                height: "1.7rem",
                right: "1.7%",
              }}
              controlStyle={{ padding: ".4rem 8rem" }}
            />
          </div>

          <div className="user__main-lib-body-collections">
            <LibraryCollectionCard
              isActive={isActive}
              setIsActive={setIsActive}
              id={1}
              img={WolfGuyImg}
            />
            <LibraryCollectionCard
              isActive={isActive}
              setIsActive={setIsActive}
              id={2}
              img={CatmanImg}
              title={""}
              titleAffirm={""}
            />
            <LibraryCollectionCard
              isActive={isActive}
              setIsActive={setIsActive}
              id={3}
              img={TsunamiImg}
              title={""}
              titleAffirm={""}
            />
            <LibraryCollectionCard
              isActive={isActive}
              setIsActive={setIsActive}
              id={4}
              img={ScaryImg}
              title={""}
              titleAffirm={""}
            />
            <LibraryCollectionCard
              isActive={isActive}
              setIsActive={setIsActive}
              id={5}
              img={WolfGuyImg}
              title={""}
              titleAffirm={""}
            />
            <LibraryCollectionCard
              isActive={isActive}
              setIsActive={setIsActive}
              id={6}
              img={coloredhouseImg}
              title={""}
              titleAffirm={""}
            />
          </div>

          {isActive && <CollectionDescription />}

          <div className="user__main-lib-footer"></div>
        </section>
      </div>
    </section>
  );
};

const Sales = () => {
  const [activeSideUser, setActiveSideUser] = useState(0);
  const settingsItems = [
    "Notification",
    "New Folder(1)",
    "New Folder(2)",
    "Loooty backup",
  ];
  const [toggleFiatCrypto, setToggleFiatCrypto] = useState("fiat");
  const [priceSelect, setPriceSelect] = useState("$20");
  const [selectedPaymentGateway, setSelectedPaymentGateway] =
    useState("paypal");
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <section className="user__sales">
      <div className="user__sales-sidebar">
        <section className="user__sales-sidebar-header">
          <div
            onClick={(e) => setToggleFiatCrypto("fiat")}
            className={`user__sales-sidebar-header-item ${
              toggleFiatCrypto == "fiat" && "user__sales-shi-selected"
            }`}
          >
            FIAT
          </div>

          <div
            onClick={(e) => setToggleFiatCrypto("crypto")}
            className={`user__sales-sidebar-header-item ${
              toggleFiatCrypto == "crypto" && "user__sales-shi-selected"
            }`}
          >
            CRYPTO
          </div>
        </section>

        <section className="user__sales-sidebar-body">
          <div
            onClick={(e) => setSelectedPaymentGateway("paypal")}
            className={`user__sales-sidebar-body-item ${
              selectedPaymentGateway === "paypal" &&
              "user__sales-sidebar-bi-selected"
            }`}
          >
            <span>
              <FaPaypal /> Paypal
            </span>
          </div>

          <div
            onClick={(e) => setSelectedPaymentGateway("stripe")}
            className={`user__sales-sidebar-body-item ${
              selectedPaymentGateway === "stripe" &&
              "user__sales-sidebar-bi-selected"
            }`}
          >
            <span>
              <GrStripe /> Stripe
            </span>
          </div>
        </section>
      </div>
      <div className="user__sales-main-content">
        <section className="user__sales-mc-header">
          <div className="user__sales-mc-left">Notice:</div>
          <div className="user__sales-mc-right">
            We send out payment every 1<sup>st</sup> and 15<sup>th</sup> of
            every month You must have a balance of $20 or more at the time to be
            eligible.
            <p>
              if you do not meet the minimum balance, no worries, we will try
              again next time.
            </p>
          </div>
        </section>

        <section className="user__sales-mc-body">
          <div className="user__sales-mc-item-container">
            <div className="user__sales-mc-item-header">PAYOUT BALANCE</div>

            <div className="user__sales-mc-item-body">
              <div className="user__sales-form-group">
                <div
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                  className="user__sales-mc-dropdown"
                >
                  <span>{priceSelect}</span>
                </div>

                <SalesDropdown
                  setSelected={setPriceSelect}
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                  showDropdown={showDropdown}
                  setShowDropdown={setShowDropdown}
                />
                <IoMdArrowDropdown className="user__sales-mc-dropdown-icon" />
              </div>
              <p>Payouts will only be sent when your balance reaches $20</p>
            </div>
          </div>

          <div className="user__sales-mc-item-container">
            <div className="user__sales-mc-item-header">PAYPAL EMAIL</div>

            <div className="user__sales-mc-item-body">
              <div className="user__sales-form-group">
                <div className="user__sales-skew-container">
                  <input
                    placeholder="Fill in your Email here"
                    className="user__sales-mc-input"
                  />
                </div>
                <div className="user__sales-mc-input-edit-skew-container">
                  <MdModeEditOutline className="user__sales-mc-input-edit" />
                </div>
              </div>
              <p>This is the Email we use for payouts</p>
            </div>
          </div>

          <div className="user__sales-mc-item-container button">
            <button className="user__sales-mc-item-btn">
              <span>SAVE</span>
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

const FilterSearchBar = ({search, setSearch}) => {
  return (
    <div className="user__input-filter-search-bar">
      <div className="user__input-filter-skew-container">
        <input className="user__input-filter-form-control" value={search} onChange={e => setSearch(e.target.value)}/>
        <button className="user__filter-search-button"><FaSearch style={{transform: "skewX(25deg)"}}/></button>
      </div>
      
    </div>
  )
}

const FilterSelector = () => {
  return (
    <section className="user_tags-filter-selector-container">
      <div className="user_tags-filter-selector-container-inner">
        <div className="user__filter-label">
          Category
        </div>
        <div className="user__filter-main-value">
          Show All <FaArrowDown/>
        </div>
      </div>
    </section>
  )
}

const TagsComp = ({ selectedTag, setSelectedTag }) => {
  return (
    <section className="user__tags-container">
      <div className="user__feature-tags-container">
        <FilterSearchBar />
        <FilterSelector/>
      </div>
    </section>
  );
};

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

const TagheaderCompDesktop = ({ activeInpageHeader, toggleVisAdmin }) => {
  const dispatch = useDispatch();
  const tagbuttonWidth = "15rem";
  return (
    <section className="user__admin-page-section-header-container-admin">
      <div className="user__admin-page-section-header-container-admin-inner">
        <IdentityBtn
          onClick={(e) => dispatch(setSelectedSubPage({ selected: "store" }))}
          style={{
            padding: "1rem 6rem",
            width: tagbuttonWidth,
            marginRight: `0`,
            transform:
              activeInpageHeader === "store" ? `scaleY(1.1) skewX(-28deg)` : "",
            backgroundColor: `${
              activeInpageHeader === "store" ? "#15151C" : "#191921"
            }`,
            color: `${activeInpageHeader === "store" ? "#CECED8" : "#4D4D6B"}`,
            borderLeft: `1rem solid ${
              activeInpageHeader === "store" ? "#7C187A" : "#353449"
            }`,
          }}
          dropDownList={["SUSCRIBERS", "STORE"]}
          text={"HOME"}
        />

        {toggleVisAdmin && (
          <>
            <IdentityBtn
              onClick={(e) =>
                dispatch(setSelectedSubPage({ selected: "profile" }))
              }
              style={{
                padding: "1rem 6rem",
                width: tagbuttonWidth,
                transform:
                  activeInpageHeader === "profile"
                    ? `scaleY(1.1) skewX(-28deg)`
                    : "",
                backgroundColor: `${
                  activeInpageHeader === "profile" ? "#15151C" : "#191921"
                }`,
                color: `${
                  activeInpageHeader === "profile" ? "#CECED8" : "#4D4D6B"
                }`,
                borderLeft: `1rem solid ${
                  activeInpageHeader === "profile" ? "#7C187A" : "#353449"
                }`,
              }}
              text={"USERS"}
            />

            <IdentityBtn
              onClick={(e) =>
                dispatch(setSelectedSubPage({ selected: "library" }))
              }
              style={{
                padding: "1rem 6rem",
                width: tagbuttonWidth,
                transform:
                  activeInpageHeader === "library"
                    ? `scaleY(1.1) skewX(-28deg)`
                    : "",
                backgroundColor: `${
                  activeInpageHeader === "library" ? "#15151C" : "#191921"
                }`,
                color: `${
                  activeInpageHeader === "library" ? "#CECED8" : "#4D4D6B"
                }`,
                borderLeft: `1rem solid ${
                  activeInpageHeader === "library" ? "#7C187A" : "#353449"
                }`,
              }}
              dropDownList={["COLLECTIONS", "LIBRARY"]}
              text={"STORES"}
            />

            <IdentityBtn
              onClick={(e) =>
                dispatch(setSelectedSubPage({ selected: "messages" }))
              }
              style={{
                padding: "1rem 6rem",
                width: tagbuttonWidth,
                transform:
                  activeInpageHeader === "messages"
                    ? `scaleY(1.1) skewX(-28deg)`
                    : "",
                backgroundColor: `${
                  activeInpageHeader === "messages" ? "#15151C" : "#191921"
                }`,
                color: `${
                  activeInpageHeader === "messages" ? "#CECED8" : "#4D4D6B"
                }`,
                borderLeft: `1rem solid ${
                  activeInpageHeader === "messages" ? "#7C187A" : "#353449"
                }`,
              }}
              text={"AFFILIATES"}
            />

            <IdentityBtn
              onClick={(e) =>
                dispatch(setSelectedSubPage({ selected: "sales" }))
              }
              style={{
                padding: "1rem 6rem",
                width: tagbuttonWidth,
                transform:
                  activeInpageHeader === "sales"
                    ? `scaleY(1.1) skewX(-28deg)`
                    : "",
                backgroundColor: `${
                  activeInpageHeader === "sales" ? "#15151C" : "#191921"
                }`,
                color: `${
                  activeInpageHeader === "sales" ? "#CECED8" : "#4D4D6B"
                }`,
                borderLeft: `1rem solid ${
                  activeInpageHeader === "sales" ? "#7C187A" : "#353449"
                }`,
              }}
              text={"PAYOUTS"}
            />

            <IdentityBtn
              onClick={(e) =>
                dispatch(setSelectedSubPage({ selected: "settings" }))
              }
              style={{
                padding: "1rem 3rem",
                width: tagbuttonWidth,
                transform:
                  activeInpageHeader === "settings"
                    ? `scaleY(1.1) skewX(-28deg)`
                    : "",
                backgroundColor: `${
                  activeInpageHeader === "settings" ? "#15151C" : "#191921"
                }`,
                color: `${
                  activeInpageHeader === "settings" ? "#CECED8" : "#4D4D6B"
                }`,
                borderLeft: `1rem solid ${
                  activeInpageHeader === "settings" ? "#7C187A" : "#353449"
                }`,
              }}
              text={"PRODUCTS"}
            />

            <IdentityBtn
              onClick={(e) =>
                dispatch(setSelectedSubPage({ selected: "settings" }))
              }
              style={{
                padding: "1rem 3rem",
                width: tagbuttonWidth,
                transform:
                  activeInpageHeader === "settings"
                    ? `scaleY(1.1) skewX(-28deg)`
                    : "",
                backgroundColor: `${
                  activeInpageHeader === "settings" ? "#15151C" : "#191921"
                }`,
                color: `${
                  activeInpageHeader === "settings" ? "#CECED8" : "#4D4D6B"
                }`,
                borderLeft: `1rem solid ${
                  activeInpageHeader === "settings" ? "#7C187A" : "#353449"
                }`,
              }}
              text={"PRODUCTS"}
            />
          </>
        )}
      </div>
    </section>
  );
};

const TagheaderCompMobile = ({ activeInpageHeader, toggleVisAdmin }) => {
  const dispatch = useDispatch();
  return (
    <section className="user__admin-page-section-header-container">
      <IdentityBtn
        onClick={(e) => dispatch(setSelectedSubPage({ selected: "store" }))}
        style={{
          padding: "1rem 6rem",
          marginRight: `${!toggleVisAdmin ? "61.5vw" : "0"}`,
          backgroundColor: `${
            activeInpageHeader === "store" ? "#15151C" : "#191921"
          }`,
          color: `${activeInpageHeader === "store" ? "#CECED8" : "#4D4D6B"}`,
          borderLeft: `1rem solid ${
            activeInpageHeader === "store" ? "#7C187A" : "#353449"
          }`,
        }}
        dropDownList={["COLLECTIONS"]}
        text={"STORE"}
      />

      {toggleVisAdmin && (
        <>
          <IdentityBtn
            onClick={(e) =>
              dispatch(setSelectedSubPage({ selected: "profile" }))
            }
            style={{
              padding: "1rem 6rem",
              backgroundColor: `${
                activeInpageHeader === "profile" ? "#15151C" : "#191921"
              }`,
              color: `${
                activeInpageHeader === "profile" ? "#CECED8" : "#4D4D6B"
              }`,
              borderLeft: `1rem solid ${
                activeInpageHeader === "profile" ? "#7C187A" : "#353449"
              }`,
            }}
            text={"PROFILE"}
          />

          <IdentityBtn
            onClick={(e) =>
              dispatch(setSelectedSubPage({ selected: "library" }))
            }
            style={{
              padding: "1rem 6rem",
              backgroundColor: `${
                activeInpageHeader === "library" ? "#15151C" : "#191921"
              }`,
              color: `${
                activeInpageHeader === "library" ? "#CECED8" : "#4D4D6B"
              }`,
              borderLeft: `1rem solid ${
                activeInpageHeader === "library" ? "#7C187A" : "#353449"
              }`,
            }}
            text={"LIBRARY"}
          />

          <IdentityBtn
            onClick={(e) =>
              dispatch(setSelectedSubPage({ selected: "messages" }))
            }
            style={{
              padding: "1rem 6rem",
              backgroundColor: `${
                activeInpageHeader === "messages" ? "#15151C" : "#191921"
              }`,
              color: `${
                activeInpageHeader === "messages" ? "#CECED8" : "#4D4D6B"
              }`,
              borderLeft: `1rem solid ${
                activeInpageHeader === "messages" ? "#7C187A" : "#353449"
              }`,
            }}
            text={"MESSAGES"}
          />

          <IdentityBtn
            onClick={(e) => dispatch(setSelectedSubPage({ selected: "sales" }))}
            style={{
              padding: "1rem 6rem",
              backgroundColor: `${
                activeInpageHeader === "sales" ? "#15151C" : "#191921"
              }`,
              color: `${
                activeInpageHeader === "sales" ? "#CECED8" : "#4D4D6B"
              }`,
              borderLeft: `1rem solid ${
                activeInpageHeader === "sales" ? "#7C187A" : "#353449"
              }`,
            }}
            text={"SALES"}
          />

          <IdentityBtn
            onClick={(e) =>
              dispatch(setSelectedSubPage({ selected: "settings" }))
            }
            style={{
              padding: "1rem 3rem",
              backgroundColor: `${
                activeInpageHeader === "settings" ? "#15151C" : "#191921"
              }`,
              color: `${
                activeInpageHeader === "settings" ? "#CECED8" : "#4D4D6B"
              }`,
              borderLeft: `1rem solid ${
                activeInpageHeader === "settings" ? "#7C187A" : "#353449"
              }`,
            }}
            text={"SETTINGS"}
          />

          <IdentityBtn
            onClick={(e) =>
              dispatch(setSelectedSubPage({ selected: "settings" }))
            }
            style={{
              padding: "1rem 3rem",
              backgroundColor: `${
                activeInpageHeader === "settings" ? "#15151C" : "#191921"
              }`,
              color: `${
                activeInpageHeader === "settings" ? "#CECED8" : "#4D4D6B"
              }`,
              borderLeft: `1rem solid ${
                activeInpageHeader === "settings" ? "#7C187A" : "#353449"
              }`,
            }}
            text={"TAGS & CATEGORIES"}
          />

          <IdentityBtn
            onClick={(e) =>
              dispatch(setSelectedSubPage({ selected: "settings" }))
            }
            style={{
              padding: "1rem 3rem",
              backgroundColor: `${
                activeInpageHeader === "settings" ? "#15151C" : "#191921"
              }`,
              color: `${
                activeInpageHeader === "settings" ? "#CECED8" : "#4D4D6B"
              }`,
              borderLeft: `1rem solid ${
                activeInpageHeader === "settings" ? "#7C187A" : "#353449"
              }`,
            }}
            text={"WISHLIST"}
          />
        </>
      )}
    </section>
  );
};

const ProductAdmin = () => {
  const [toggleVisAdmin, setToggleVisAdmin] = useState(true);
  const isMobile = useMediaQuery({ minWidth: 481, maxWidth: 768 });
  const user = useSelector((state) => state.user);
  const [showRegModal, setShowRegModal] = useContext(RegisterContext);
  const userSubPageSelected = useSelector((state) => state.userSubPageState);
  const dispatch = useDispatch();

  const [selectedTag, setSelectedTag] = useState("feature"); //Enum Types: feature, recent sellers, popular
  const activeInpageHeader = useSelector(
    (state) => state.userSubPageState.selected
  ); //Enum types: store, profile, library, messages, sales, settings
  const navigate = useNavigate();
  useEffect(() => {
    if (!toggleVisAdmin) {
      dispatch(setSelectedSubPage({ selected: "store" }));
      // setActiveInPageHeader("store")
    }

    // if (!user || !user.user){
    //     navigate("/")
    //     setShowRegModal({...showRegModal, login:true})

    // }
  }, [toggleVisAdmin]);
  return (
    <section className="user__main-container">
      <header>
        <NavBar
          pageType={"user"}
          loggedIn={true}
          shortSearch={true}
          style={{ paddingBottom: "0", paddingTop: "0" }}
          search={true}
        />
        {/* <CGBarSlim style={{overflow: "scroll", position: "relative",}}/> */}
      </header>

      <main className="user__main">
        <div className="user__separator"></div>
        {!isMobile ? (
          <TagheaderCompDesktop
            toggleVisAdmin={toggleVisAdmin}
            activeInpageHeader={activeInpageHeader}
          />
        ) : (
          <TagheaderCompMobile
            toggleVisAdmin={toggleVisAdmin}
            activeInpageHeader={activeInpageHeader}
          />
        )}

        {/* <TagsComp selectedTag={selectedTag} setSelectedTag={setSelectedTag}/> */}

        <PageSelectComp inPageName={activeInpageHeader} />
      </main>
    </section>
  );
};

export default ProductAdmin;
