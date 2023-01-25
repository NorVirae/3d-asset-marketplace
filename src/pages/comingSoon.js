import emailjs from "@emailjs/browser";
import { useContext, useState } from "react";
import { FaDiscord, FaFacebookF, FaTimes, FaTwitter } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";
import { IoTriangle } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
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
passionate African creators in the Game and Animation creative spaces
          who yearn to tell authentic African stories and have had to create
          everything they use from scratch. We lack a CG Marketplace where our
          African culture is its centerpiece. We wanted to take action soon as
          possible, so we used "Loooty" as the name we're launching with,
          inspired by voyagers and adventurers, a treasure trove at the end of a
          long journey, a "Loot".
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
          img={"/assets/image/comingsoon/nzappa.png"}
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
                <IoTriangle className="coming__soon-tags-list-item-pointer" />

                <span>VFX Packs</span>
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

                <span>and more</span>
              </li>
            </ul>
          </ul>
          <p className="coming__soon-sell-announce-header shorten">
            Anything that can aid fellow creators to tell their stories through
            their various media.
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
As one of the amazing creators in the African space, we know you share the vision
of Africataking the global market by storm, and one of the ways we inch closer to that is to not
only create short films, games etc but to upload assets from this projects for other passionate
people to use, you would be surprised the amazing stories that your creation will feature in overtime, You will
be properly credited and compensated on your own terms, You get to set
the cost and we don't demand exlusively at all, you can have your assets on any other marketplace.
we just want to make one for Africa as Africans.
`;

const FormControlTitle = ({ style, text = "Nickname" }) => {
  return (
    <div className="coming__soon-form-control-title-container">
      <h3 style={style} className="coming__soon-form-control-title">
        <span>{text}</span>
      </h3>
    </div>
  );
};

const RequestAccessFormControl = ({
  type,
  style,
  value,
  onChange,
  titleText,
  placeholder = "Stacky",
}) => {
  return (
    <div className="coming__soon-form-group">
      <FormControlTitle text={titleText} />
      <div className="coming__soon-form-control-skew-container">
        <input
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
    wouldSell: "yes",
    workTeam: "No, Am an Individual",
    tags: [],
    hearAbout: "",
    portfolio: "",
  });
  const [selected, setSelected] = useState({ first: 1, second: 1 });
  const [loading, setLoading] = useState(false);

  let templateParams = {
    from_name: "Loooty Admin",
    to_name: "James",
    to_email: "codegymfrank@gmail.com",
    message: "Thank you for being part of the early launchers see you soon!",
  };

  const handleRequestAccess = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      let finalData = requestDetails;
      finalData.timestamp = new Date();
      // setRequestAccess((old) => ({
      //   ...old,
      //   timestamp: new Date(),
      //   tags: JSON.stringify(old.tags),
      // }));
      let stringifiedTags = ""

      for (let i = 0; i < finalData.tags.length; i ++){
        stringifiedTags += `${finalData.tags[i] }, `
      }
      finalData.tags = stringifiedTags;

      console.log(finalData);
      await requestAccess(finalData);
      toast.success("Request was submitted successfuly");
      templateParams.to_email = finalData.email;
      emailjs
        .send(
          "service_iajmoqf",
          "template_n7nbm6c",
          templateParams,
          "YrIOqot5XGcYDpulZ"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (err) {
            console.log("FAILED...", err);
          }
        );
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);

      toast.error("Unable to complete Request");
    }
  };

  const handleCheckboxClick = (text) => {
    console.log(text, "EVERY")

    console.log("called", requestDetails.tags);

    let realTags = requestDetails.tags;
    if (realTags.includes(text)) {
      console.log("is in the list");

      const getIndex = realTags.indexOf(text);
      if (getIndex != -1) {
        realTags.splice(getIndex, 1);

        console.log("got in", getIndex, realTags);

        setRequestAccess({ ...requestDetails, tags: realTags });
      }
      // return { ...old, tags: realTags };
    } else {
      realTags.push(text);
      console.log("is not in te list", realTags);

      setRequestAccess({...requestDetails, tags:realTags });
    }

    
  };
  const [showRegModal, setShowRegModal] = useContext(RegisterContext);

  return (
    <div className="coming__soon-request-access-modal-overlay">
      <section className="coming__soon-request-access-modal">
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
          <form className="coming__soon-request-access-form">
            <div className="coming__soon-first-row">
              <RequestAccessFormControl
                placeholder="Adams"
                value={requestDetails.nickname}
                onChange={(e) =>
                  setRequestAccess((old) => ({
                    ...old,
                    nickname: e.target.value,
                  }))
                }
                titleText={"Nickname"}
              />

              <RequestAccessFormControl
                placeholder="eg, South Africa"
                value={requestDetails.country}
                onChange={(e) =>
                  setRequestAccess((old) => ({
                    ...old,
                    country: e.target.value,
                  }))
                }
                titleText={"Country"}
              />

              <RequestAccessFormControl
                placeholder="eg, hackone@gmail.com"
                value={requestDetails.email}
                type="email"
                onChange={(e) =>
                  setRequestAccess((old) => ({
                    ...old,
                    email: e.target.value,
                  }))
                }
                titleText={"Email"}
              />
            </div>

            <div className="coming__soon-second-row">
              <FormControlTitle text="Would you like to sell on Loooty?" />
              <div className="coming__soon-second-row-inner">
                <RequestAccessCheckbox
                  optionSelected={selected.first}
                  id={1}
                  options={true}
                  text="Yes"
                  onClick={() => {
                    setRequestAccess((old) => ({ ...old, wouldSell: "Yes" }));
                    setSelected((old) => ({ ...old, first: 1 }));
                  }}
                />
                <RequestAccessCheckbox
                  optionSelected={selected.first}
                  id={2}
                  options={true}
                  text="No"
                  onClick={() => {
                    setRequestAccess((old) => ({ ...old, wouldSell: "No" }));
                    setSelected((old) => ({ ...old, first: 2 }));
                  }}
                />
              </div>
            </div>

            <div className="coming__soon-second-row">
              <FormControlTitle text="Do you work with a Team" />
              <div className="coming__soon-second-row-inner">
                <RequestAccessCheckbox
                  optionSelected={selected.second}
                  id={1}
                  options={true}
                  text="No, I'm an Individual"
                  onClick={() => {
                    setSelected((old) => ({ ...old, second: 1 }));
                    setRequestAccess((old) => ({
                      ...old,
                      workTeam: "No, I'm an Individual",
                    }));
                  }}
                />
                <RequestAccessCheckbox
                  optionSelected={selected.second}
                  id={2}
                  options={true}
                  text="yes, A studio"
                  onClick={() => {
                    setSelected((old) => ({ ...old, second: 2 }));
                    setRequestAccess((old) => ({
                      ...old,
                      workTeam: "yes, A studio",
                    }));
                  }}
                />
              </div>
            </div>

            <div className="coming__soon-third-row">
              <FormControlTitle text="Do you work with a Team?" />
              <div className="coming__soon-third-row-inner">
                <div className="coming__soon-third-row-inner-box">
                  <RequestAccessCheckbox
                    onClick={() => handleCheckboxClick("2D")}
                    text="2D"
                  />
                  <RequestAccessCheckbox
                    onClick={() => handleCheckboxClick("Plugins/ Script")}
                    text="Plugins/ Script"
                  />
                  <RequestAccessCheckbox
                    onClick={() => handleCheckboxClick("Game Ready Assets")}
                    text="Game Ready Assets"
                  />
                </div>
                <div className="coming__soon-third-row-inner-box">
                  <RequestAccessCheckbox
                    onClick={() => handleCheckboxClick("3D")}
                    text="3D"
                  />
                  <RequestAccessCheckbox
                    onClick={() => handleCheckboxClick("AR/VR Assets")}
                    text="AR/VR Assets"
                  />
                  <RequestAccessCheckbox
                    onClick={() => handleCheckboxClick("Sounds")}
                    text="Sounds"
                  />
                </div>

                <div className="coming__soon-third-row-inner-box">
                  <RequestAccessCheckbox
                    onClick={() => handleCheckboxClick("UI/UX Template")}
                    text="UI/UX Template"
                  />
                </div>
              </div>
            </div>
            <div className="coming__soon-first-row">
              <RequestAccessFormControl
                placeholder="eg, Facebook"
                value={requestDetails.hearAbout}
                onChange={(e) =>
                  setRequestAccess((old) => ({
                    ...old,
                    hearAbout: e.target.value,
                  }))
                }
                titleText={"How Did you hear about Loooty?"}
              />

              <RequestAccessFormControl
                placeholder="eg, www.myportfolio.com"
                value={requestDetails.portfolio}
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
        img="/assets/image/comingsoon/nzappa.png"
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
        imageStyle={{ objectPosition: "100% 19.95%" }}
      />
      <ToSell id={"tosell"} />
      <ForEveryOne id={"everyone"} />
      <Footer id="footer" />
    </section>
  );
};

export default ComingSoon;
