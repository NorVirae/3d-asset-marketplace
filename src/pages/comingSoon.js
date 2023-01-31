import emailjs from "@emailjs/browser";
import { useContext, useState } from "react";
import { FaDiscord, FaFacebookF, FaTimes, FaTwitter } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";
import { IoTriangle } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { VscTriangleUp } from "react-icons/vsc";
import { useMediaQuery } from "react-responsive";
import { toast } from "react-toastify";
import { requestAccess } from "../api/coming";
import { RegisterContext } from "../component/auth/context/registerContext";
import LoootyLoader from "../component/loader/loootyLoader";
import LoootyLogo from "../component/loootyLogo";
import NavBar from "../component/navbar/navbar";

const CSNavbar = () => {
  return (
    <div className="coming__soon-navbar">
      <GoThreeBars />
      <LoootyLogo />
      <div className="landing__instruct-btn-container">
        <button className="landing__slogan-browse">
          <span className="landing__slogan-browse-text">REQUEST ACCESS</span>
        </button>

        <button className="landing__slogan-sell">
          <span className="landing__slogan-sell-text">SIGN IN</span>
        </button>
      </div>
    </div>
  );
};

const CsSubNav = () => {
  return (
    <div className="coming__soon-cs-sub-navbar">
      <button className="coming__soon-subnav-btn">
        <span>Company</span>
      </button>
      <button className="coming__soon-subnav-btn">
        <span>Journal</span>
      </button>
      <button className="coming__soon-subnav-btn">
        <span>Developers</span>
      </button>
      <button className="coming__soon-subnav-btn">
        {" "}
        <span>Support</span>
      </button>
    </div>
  );
};

const BattleCryBanner = ({ id }) => {
  const mobile = useMediaQuery({ minWidth: 320, maxWidth: 480 });
  return (
    <div id={id} className="coming__soon-battlecry-container">
      {mobile ? (
        <h3>
          It is time for Africa! We must build our own! Our story is ours to
          tell! We need a marketplace for us, by us, where we can trade
          professionally made African assets to inject our culture into the
          mainstream
        </h3>
      ) : null}
      {mobile ? (
        <img
          className="coming__soon-battlecry-img mobile"
          src="/assets/image/comingsoon/homebattlecymobile.png"
        />
      ) : (
        <img
          className="coming__soon-battlecry-img"
          src="/assets/image/comingsoon/homebattlecry.png"
        />
      )}
    </div>
  );
};

const Supporters = ({ id }) => {
  return (
    <div id={id} className="coming__soon-supporters-container">
      <img
        src="/assets/image/comingsoon/BGPattern.png"
        className="coming__soon-supporters-container-image"
      />
      <section className="coming__soon-supporters-container-inner">
        <div className="coming__soon-tag-button-container">
          <button className="coming__soon-tag-button">
            <span>Happy supporters & Launchers</span>
          </button>
        </div>
        <div className="coming__soon-supporters-scatter-container">
          <div className="coming__soon-brand-image-container">
            <img
              className="coming__soon-brand-image"
              src="/assets/image/comingsoon/liqair.png"
              alt="brands"
            />
            <img
              className="coming__soon-brand-image"
              src="/assets/image/comingsoon/orange.png"
              alt="brands"
            />
          </div>

          <div className="coming__soon-brand-image-container">
            <img
              className="coming__soon-brand-image"
              src="/assets/image/comingsoon/liqair.png"
              alt="brands"
            />
            <img
              className="coming__soon-brand-image"
              src="/assets/image/comingsoon/orange.png"
              alt="brands"
            />
            <img
              className="coming__soon-brand-image"
              src="/assets/image/comingsoon/liqair.png"
              alt="brands"
            />
          </div>

          <div className="coming__soon-brand-image-container">
            <img
              className="coming__soon-brand-image"
              src="/assets/image/comingsoon/liqair.png"
              alt="brands"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
const bornParagraph = `
passionate African creators in the Game and Animation creative spaces who yearn to
tell authentic African stories and have had to create everything they use from scratch. We lack a CG Markketplace where 
our African culture is its centrepiece.
`;

const LoootyAssetExplain = ({
  img = "/assets/image/comingsoon/shield.png",
  title = "Loooty was born from the wishes of",
  description = bornParagraph,
  direction = "row",
  imageStyle,
  id,
}) => {
  return (
    <div id={id} className={`coming__soon-loooty-born-container ${direction}`}>
      <img
        style={imageStyle}
        src="/assets/image/comingsoon/BGPattern.png"
        className="coming__soon-loooty-born-container-image"
      />

      <div className="coming__soon-born-image-container">
        <img src={img} alt="shield" className="coming__soon-born-image" />
      </div>
      <div className="coming__soon-born-body">
        <h3 className="coming__soon-born-header">{title}</h3>
        <p className="coming__soon-born-paragraph">{description}</p>
      </div>
    </div>
  );
};

const EarlyLauchersTag = ({ id }) => {
  return (
    <div id={id} className="coming__soon-early-launchers-tag-container">
      <button className="coming__soon-tag-button orange">
        <span>Featured Works from our Early Launchers</span>
      </button>
    </div>
  );
};

const AssetCard = ({
  img = "/assets/image/comingsoon/takouba.png",
  title = "3D African Takouba Sword",
}) => {
  return (
    <div className="coming__soon-asset-card">
      <div className="coming__soon-asset-image-container">
        <img src={img} alt="takouba" className="coming__soon-asset-image" />
      </div>
      <button className="coming__soon-asset-btn">
        <span>{title}</span>
      </button>
    </div>
  );
};
const EarlyLaunchAsset = ({ id }) => {
  return (
    <div id={id} className="coming__soon-early-lauch-asset">
      <div className="coming__soon-early-lauch-asset-inner">
        <AssetCard
          img={"/assets/image/comingsoon/takouba.png"}
          title={"3D African Takouba Sword"}
        />
        <AssetCard
          img={"/assets/image/comingsoon/shield.png"}
          title={"3D Masai Shield"}
        />

        <AssetCard
          img={"/assets/image/comingsoon/shotel.png"}
          title={"3D Shotel Sword"}
        />

        <AssetCard
          img={"/assets/image/comingsoon/ozappa.png"}
          title={"3D Nzappa"}
        />
      </div>
    </div>
  );
};

const ToSell = ({ id }) => {
  return (
    <div id={id} className="coming__soon-to-sell">
      <img
        src="/assets/image/comingsoon/BGPattern.png"
        className="coming__soon-to-sell-image"
      />
      <section id={id} className="coming__soon-to-sell-inner-container">
        <h3 className="coming__soon-to-sell-title">
          What do you want to sell on Loooty?
        </h3>
        <div className="coming__soon-to-sell-inner">
          <p className="coming__soon-sell-announce-header">
            You can sell any digital works.
          </p>
          <ul className="coming__soon-tags-list">
            <ul className="coming__soon-tags-list-inner">
              <li className="coming__soon-tags-list-item">
                <IoTriangle className="coming__soon-tags-list-item-pointer" />
                <span>2D Assets</span>
              </li>
              <li className="coming__soon-tags-list-item">
                <IoTriangle className="coming__soon-tags-list-item-pointer faint" />

                <span>3D Assets</span>
              </li>
              <li className="coming__soon-tags-list-item">
                <IoTriangle className="coming__soon-tags-list-item-pointer" />

                <span>AR/VR Assets</span>
              </li>

              <li className="coming__soon-tags-list-item">
                <IoTriangle className="coming__soon-tags-list-item-pointer faint" />

                <span>Sounds</span>
              </li>
            </ul>
            <ul className="coming__soon-tags-list-inner">
              <li className="coming__soon-tags-list-item">
                <IoTriangle className="coming__soon-tags-list-item-pointer faint" />

                <span>Plugins</span>
              </li>
              <li className="coming__soon-tags-list-item">
                <IoTriangle className="coming__soon-tags-list-item-pointer" />

                <span>Tools</span>
              </li>
              <li className="coming__soon-tags-list-item">
                <IoTriangle className="coming__soon-tags-list-item-pointer faint" />

                <span>Scripts</span>
              </li>
              <li className="coming__soon-tags-list-item">
                <IoTriangle className="coming__soon-tags-list-item-pointer" />

                <span>VFX Packs etc</span>
              </li>
            </ul>
          </ul>
          <p className="coming__soon-sell-announce-header shorten">
            That can aid fellow creators to tell their stories through their
            various media.
          </p>
        </div>
      </section>
    </div>
  );
};

const ForEveryOne = ({ id }) => {
  return (
    <div id={id} className="coming__soon-for-everyone">
      <img
        src="/assets/image/comingsoon/BGPattern.png"
        className="coming__soon-for-everyone-image"
      />
      <section className="coming__soon-for-everyone-inner">
        <ul className="coming__soon-for-everyone-lister">
          <li className="coming__soon-for-everyone-lister-item">
            Loooty is not just for creators,
          </li>

          <li className="coming__soon-for-everyone-lister-item">
            our ultimate goal is to build a community for
          </li>

          <li className="coming__soon-for-everyone-lister-item">
            everyone interested in creative works from Africa,
          </li>

          <li className="coming__soon-for-everyone-lister-item">
            we even have ways for any user to earn,
          </li>

          <li className="coming__soon-for-everyone-lister-item">
            through our platform,
          </li>
        </ul>

        <div className="coming__soon-for-everyone-header-container">
          <h3 className="coming__soon-for-everyone-header">
            Loooty is for everyone!
          </h3>
          <div className="coming__soon-for-everyone-wavy-container">
            <img
              className="coming__soon-for-everyone-wavy"
              src="/assets/image/comingsoon/wavy.png"
              alt="wave"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const BeFirst = () => {
  const [showRegModal, setShowRegModal] = useContext(RegisterContext);

  return (
    <div className="coming__soon-be-first">
      <div className="coming__soon-first-container">
        <h3 className="coming__soon-first-container-title">
          Be the First to know when we Launch
        </h3>
        <ul className="coming__soon-first-container-paragraph">
          <li>We are excited to have you on board</li>
          <li> if you would like to be featured, send an email</li>
        </ul>
      </div>
      <div className="coming__soon-first-access-container">
        <button
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowRegModal((old) => ({ ...old, isComingSoonOpen: true }));
          }}
          // target={"_blank"}
          // href="https://docs.google.com/forms/d/1kAtVYoDY54AB-mnQ-MFLvxiIO7fkdBzqUDxwVUsPyqw/edit?usp=drivesdk"
          className="coming__soon-first-request-access-btn"
        >
          <span>Request Access</span>
        </button>

        <a
          href="mailto:contact@loooty.com"
          className="coming__soon-first-email-btn"
        >
          <span>EMAIL US</span>
        </a>
      </div>
    </div>
  );
};

const FooterInner = () => {
  return (
    <div className="coming__soon-footer-innner">
      <div className="coming__soon-social-medias">
        <div className="coming__soon-social-media-inner">
          <span>
            <FaFacebookF />
          </span>
          <span>
            <FaTwitter />
          </span>
          <span>
            <RiInstagramFill />
          </span>
          <span>
            <FaDiscord />
          </span>
        </div>
        <p>2023(C) Loooty.com. All Rights Reserved</p>
      </div>
      <LoootyLogo style={{ width: "15rem", height: "10rem" }} />
    </div>
  );
};

const FormDropdown = ({ style }) => {
  const [selected, setSelected] = useState("- select option -");
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div
      style={style}
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
      className="coming__soon-dropdown"
    >
      <span>{selected}</span>
      <VscTriangleUp className="coming__soon-dropdown-arrow" />
      {showDropdown && (
        <ul>
          <li>- select option -</li>
          <li>- select option -</li>
          <li>- select option -</li>
        </ul>
      )}
    </div>
  );
};

const Footer = ({ id }) => {
  return (
    <div id={id} className="coming__soon-footer">
      <img
        src="/assets/image/comingsoon/wavepattern.png"
        className="coming__soon-footer-wave-pattern"
      />
      <img
        src="/assets/image/comingsoon/BGPattern.png"
        className="coming__soon-footer-image"
      />
      <div className="coming__soon-footer-inner">
        <BeFirst />
        <FooterInner />
      </div>
    </div>
  );
};

const creatorParagraph = `
As one of the amazing creators in the African space,
 we know you share the vision of Africa taking the global market by storm.
  We can inch closer by making digital assets we create, open for other creators to use.
   You would be surprised by the amazing stories that your creation will feature over time. 
`;

const FormControlTitle = ({
  style,
  text = "Nickname",
  isCompulsory = true,
}) => {
  return (
    <div className="coming__soon-form-control-title-container">
      <h3 style={style} className="coming__soon-form-control-title">
        <span>
          {text}{" "}
          {isCompulsory && (
            <span style={{ fontSize: "1.1rem", color: "#df4759" }}>*</span>
          )}
        </span>
      </h3>
    </div>
  );
};

const RequestAccessFormControl = ({
  error,
  onClick,
  isCompulsory,
  type,
  style,
  value,
  onChange,
  titleText,
  placeholder = "Stacky",
}) => {
  return (
    <div className="coming__soon-form-group">
      <FormControlTitle isCompulsory={isCompulsory} text={titleText} />
      <div
        style={{ border: `.25rem solid ${error ? "#df4759" : "#4D4D63"} ` }}
        className="coming__soon-form-control-skew-container"
      >
        <input
          onClick={onClick}
          required={true}
          type={type}
          value={value}
          onChange={onChange}
          style={style}
          placeholder={placeholder}
          className="coming__soon-form-control"
        />
      </div>
    </div>
  );
};

const RequestAccessCheckbox = ({
  text = "2D",
  onClick,
  id,
  options,
  optionSelected,
}) => {
  const [selected, setSelected] = useState(false);
  return (
    <div className="coming__soon-request-access-checkbox-container">
      <div
        onClick={() => {
          if (onClick) {
            onClick();
          }
          setSelected(!selected);
        }}
        className="coming__soon-request-access-checkbox"
      >
        <div
          className={`coming__soon-request-access-checkbox-inner ${
            options
              ? optionSelected == id && "selected"
              : selected && "selected"
          }`}
        ></div>
      </div>
      <span className="coming__soon-request-access-checkbox-text">{text}</span>
    </div>
  );
};

const RequestAccessModal = () => {
  const [requestDetails, setRequestAccess] = useState({
    timestamp: "",
    nickname: "",
    country: "",
    email: "",
    wouldSell: "Yes",
    workTeam: "No, Am an Individual",
    tags: [],
    hearAbout: "",
    portfolio: "",
  });

  const [errors, setErrors] = useState({
    timestamp: false,
    nickname: false,
    country: false,
    email: false,
    wouldSell: "Yes",
    workTeam: "No, Am an Individual",
    tags: [],
    hearAbout: false,
    portfolio: false,
  });
  const [selected, setSelected] = useState({ first: 1, second: 1 });
  const [loading, setLoading] = useState(false);
  const [proceed, setProceed] = useState(true);

  let templateParams = {
    from_name: "Loooty Admin",
    to_name: "James",
    to_email: "codegymfrank@gmail.com",
    message: "Thank you for being part of the early launchers see you soon!",
  };

  const errorHandler = () => {
    setProceed(true);
    if (!requestDetails.country || requestDetails.country === "") {
      setErrors((old) => ({ ...old, country: true }));
      setProceed(false);
    }
    if (!requestDetails.nickname || requestDetails.nickname === "") {
      setErrors((old) => ({ ...old, nickname: true }));
      setProceed(false);
    }
    if (!requestDetails.email || requestDetails.email === "") {
      setErrors((old) => ({ ...old, email: true }));
      setProceed(false);
    }

    if (!requestDetails.hearAbout || requestDetails.hearAbout === "") {
      setErrors((old) => ({ ...old, hearAbout: true }));
      setProceed(false);
    }

    if (requestDetails.tags.length == 0 && requestDetails.wouldSell === "Yes") {
      toast.error("Please select what you would like to sell on Loooty");
      setProceed(false);
    }

    if (!proceed) {
      toast.error("Selected fields are required!");
    }
  };

  const handleRequestAccess = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      let finalData = requestDetails;
      finalData.timestamp = new Date();
      errorHandler();
      if (proceed) {
        // setRequestAccess((old) => ({
        //   ...old,
        //   timestamp: new Date(),
        // //   tags: JSON.stringify(old.tags),
        // // }));
        // let stringifiedTags = "";
        // for (let i = 0; i < finalData.tags.length; i++) {
        //   stringifiedTags += `${finalData.tags[i]}, `;
        // }
        // finalData.tags = stringifiedTags;
        // await requestAccess(finalData);
        // toast.success("Request was submitted successfuly, Thank you!");
        // templateParams.to_email = finalData.email;
        // templateParams.to_name = finalData.nickname;
        // emailjs
        //   .send(
        //     "service_2vounar",
        //     "template_n7nbm6c",
        //     templateParams,
        //     "YrIOqot5XGcYDpulZ"
        //   )
        //   .then(
        //     function (response) {
        //       // console.log("SUCCESS!", response.status, response.text);
        //     },
        //     function (err) {
        //       // console.log("FAILED...", err);
        //     }
        //   );
        // setShowRegModal((old) => ({ ...old, isComingSoonOpen: false }));
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);

      toast.error("Unable to complete Request");
    }
  };

  const handleCheckboxClick = (text) => {
    setProceed(true);
    let realTags = requestDetails.tags;
    if (realTags.includes(text)) {
      const getIndex = realTags.indexOf(text);
      if (getIndex != -1) {
        realTags.splice(getIndex, 1);

        setRequestAccess({ ...requestDetails, tags: realTags });
      }
      // return { ...old, tags: realTags };
    } else {
      realTags.push(text);

      setRequestAccess({ ...requestDetails, tags: realTags });
    }
  };
  const [showRegModal, setShowRegModal] = useContext(RegisterContext);

  return (
    <div
      onClick={() =>
        setShowRegModal((old) => ({ ...old, isComingSoonOpen: false }))
      }
      className="coming__soon-request-access-modal-overlay"
    >
      <section
        onClick={(e) => e.stopPropagation()}
        className="coming__soon-request-access-modal"
      >
        <div
          onClick={() => {
            setShowRegModal((old) => ({ ...old, isComingSoonOpen: false }));
          }}
          className="coming__soon-close-btn"
        >
          <span>
            <FaTimes />
          </span>
        </div>
        <div className="coming__soon-request-access-modal-inner">
          <h3>REQUEST ACCESS</h3>
          <form
            onSubmit={handleRequestAccess}
            className="coming__soon-request-access-form"
          >
            <div className="coming__soon-first-row">
              <RequestAccessFormControl
                onClick={() =>
                  setErrors((old) => ({ ...old, nickname: false }))
                }
                error={errors.nickname}
                placeholder="Adams"
                value={requestDetails.nickname}
                onChange={(e) => {
                  setProceed(true);
                  setRequestAccess((old) => ({
                    ...old,
                    nickname: e.target.value,
                  }));
                }}
                titleText={"Nickname"}
              />

              <RequestAccessFormControl
                onClick={() => setErrors((old) => ({ ...old, country: false }))}
                error={errors.country}
                placeholder="eg, South Africa"
                value={requestDetails.country}
                onChange={(e) => {
                  setProceed(true);
                  setRequestAccess((old) => ({
                    ...old,
                    country: e.target.value,
                  }));
                }}
                titleText={"Country"}
              />

              <RequestAccessFormControl
                onClick={() => setErrors((old) => ({ ...old, email: false }))}
                error={errors.email}
                placeholder="eg, hackone@gmail.com"
                value={requestDetails.email}
                type="email"
                onChange={(e) => {
                  setProceed(true);
                  setRequestAccess((old) => ({
                    ...old,
                    email: e.target.value,
                  }));
                }}
                titleText={"Email"}
              />
            </div>

            <div className="coming__soon-second-row">
              <FormControlTitle text="Would you like to sell on Loooty?" />
              <div className="coming__soon-second-row-inner">
                <FormDropdown />
              </div>
            </div>

            <div className="coming__soon-second-row">
              <FormControlTitle text="Do you work with a Team" />
              <div className="coming__soon-second-row-inner">
                <FormDropdown />
              </div>
            </div>

            {requestDetails.wouldSell === "Yes" && (
              <div className="coming__soon-third-row">
                <FormControlTitle text="What would you like to sell on Loooty?" />
                <div className="coming__soon-third-row-inner">
                  <FormDropdown />
                </div>
              </div>
            )}
            <div className="coming__soon-first-row">
              <RequestAccessFormControl
                onClick={() =>
                  setErrors((old) => ({ ...old, hearAbout: false }))
                }
                error={errors.hearAbout}
                placeholder="eg, Facebook"
                value={requestDetails.hearAbout}
                onChange={(e) => {
                  setProceed(true);
                  setRequestAccess((old) => ({
                    ...old,
                    hearAbout: e.target.value,
                  }));
                }}
                titleText={"How Did you hear about Loooty?"}
              />

              <RequestAccessFormControl
                placeholder="eg, www.myportfolio.com"
                value={requestDetails.portfolio}
                isCompulsory={false}
                onChange={(e) =>
                  setRequestAccess((old) => ({
                    ...old,
                    portfolio: e.target.value,
                  }))
                }
                titleText={"Portfolio Link"}
              />
            </div>

            <button
              type="submit"
              onClick={(e) => handleRequestAccess(e)}
              className="coming__soon-navbar-request-btn orange"
            >
              <span>{loading ? <LoootyLoader /> : "Request Access"}</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

const benefitsParagraph = `
As a Creator on our marketplace,
 you will be properly credited and
  compensated on your own terms.
   You get to set the cost and we don’t 
   demand exclusivity at all (you can post your work anywhere else),
    amongst other benefits.
`;

const ComingSoon = () => {
  const [showRegModal, setShowRegModal] = useContext(RegisterContext);

  return (
    <section className="coming__soon-container">
      {showRegModal.isComingSoonOpen && <RequestAccessModal />}

      <NavBar isComingSoon={true} />
      {/* <CsSubNav /> */}
      <BattleCryBanner id={"battlecry"} />

      <Supporters id={"supporters"} />
      <LoootyAssetExplain
        id={"born"}
        img="/assets/image/comingsoon/ozappa.png"
      />

      <LoootyAssetExplain
        id={"creator"}
        title="Benefits"
        img="/assets/image/comingsoon/takouba.png"
        description={benefitsParagraph}
        direction="inverse"
        imageStyle={{ objectPosition: "100% 19.36%" }}
      />
      <section className="coming__soon-image-background">
        <img
          src="/assets/image/comingsoon/BGPattern.png"
          className="coming__soon-image-background-image"
        />
        <EarlyLauchersTag id={"launch"} />
        <EarlyLaunchAsset />
      </section>

      <LoootyAssetExplain
        id={"creator"}
        title="Are you a Creator?"
        description={creatorParagraph}
        direction="inverse"
        imageStyle={{ objectPosition: "100% 21.17%" }}
      />
      <ToSell id={"tosell"} />
      <ForEveryOne id={"everyone"} />
      <Footer id="footer" />
    </section>
  );
};

export default ComingSoon;
