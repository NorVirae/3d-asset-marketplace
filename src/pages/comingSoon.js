import { FaDiscord, FaFacebookF, FaTwitter } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";
import { IoTriangle } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import LoootyLogo from "../component/loootyLogo";
import NavBar from "../component/navbar/navbar";

const CSNavbar = () => {
  return (
    <div className="coming__soon-navbar">
      <GoThreeBars />
      <LoootyLogo />
      <div className="landing__instruct-btn-container">
        <button className="landing__slogan-browse">
          <span className="landing__slogan-browse-text">Request Access</span>
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

const BattleCryBanner = () => {
  return (
    <div className="coming__soon-battlecry-container">
      <img
        className="coming__soon-battlecry-img"
        src="/assets/image/comingsoon/homebattlecry.png"
      />
    </div>
  );
};

const Supporters = () => {
  return (
    <div className="coming__soon-supporters-container">
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
}) => {
  return (
    <div className={`coming__soon-loooty-born-container ${direction}`}>
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

const EarlyLauchersTag = () => {
  return (
    <div className="coming__soon-early-launchers-tag-container">
      <button className="coming__soon-tag-button orange">
        <span>Happy supporters & Launchers</span>
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
const EarlyLaunchAsset = () => {
  return (
    <div className="coming__soon-early-lauch-asset">
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

const ToSell = () => {
  return (
    <div className="coming__soon-to-sell">
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
              <span>2D</span>
            </li>
            <li className="coming__soon-tags-list-item">
              <IoTriangle className="coming__soon-tags-list-item-pointer faint" />

              <span>3D</span>
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

              <span>Even Plugins</span>
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

              <span>etc</span>
            </li>
          </ul>
        </ul>
        <p className="coming__soon-sell-announce-header">
          That can aid fellow creators to tell their stories through their
          various media.
        </p>
      </div>
    </div>
  );
};

const ForEveryOne = () => {
  return (
    <div className="coming__soon-for-everyone">
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
    </div>
  );
};

const BeFirst = () => {
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
        <a target={"_blank"} href="https://docs.google.com/forms/d/1kAtVYoDY54AB-mnQ-MFLvxiIO7fkdBzqUDxwVUsPyqw/edit?usp=drivesdk" className="coming__soon-first-request-access-btn">
          <span>Request Access</span>
        </a>

        <a href="mailto:norbertmbafrank@gmail.com" className="coming__soon-first-email-btn">
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
          <span><FaFacebookF/></span>
          <span><FaTwitter/></span>
          <span><RiInstagramFill/></span>
          <span><FaDiscord/></span>
        </div>
        <p>2023(C) Loooty.com. All Rights Reserved</p>
      </div>
      <LoootyLogo style={{width: "15rem", height: "10rem"}}/>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="coming__soon-footer">
      <div className="coming__soon-footer-inner">
        <BeFirst />
        <FooterInner />
      </div>
    </div>
  );
};

const ComingSoon = () => {
  return (
    <div className="coming__soon-container">
      <NavBar />
      <CsSubNav />
      <BattleCryBanner />
      <Supporters />
      <LoootyAssetExplain img="/assets/image/comingsoon/nzappa.png" />
      <EarlyLauchersTag />
      <EarlyLaunchAsset />
      <LoootyAssetExplain direction="inverse" />
      <ToSell />
      <ForEveryOne />
      <Footer />
    </div>
  );
};

export default ComingSoon;
