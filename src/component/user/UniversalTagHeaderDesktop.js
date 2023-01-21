import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setSelectedSubPage,
  setSelectedSubPageAdmin,
} from "../../redux/reducers/userStateReducer";
import IdentityBtn from "../buttons/identityBtn";

const defaultTags = [
  {
    name: "subscriptions",
  },
  {
    name: "profile",
  },
  {
    name: "library",
  },
  {
    name: "messages",
  },
  {
    name: "settings",
    dropDownList: ["affiliates", "settings"],
  },
];

const UniversalTagHeaderDesktop = ({
  activeInpageHeader,
  TagList = defaultTags,
  style,
  onClick,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  return (
    <section
      style={style}
      className="user__admin-page-section-header-container"
    >
      {TagList.map((tagsBtn) => (
        <IdentityBtn
          key={tagsBtn.name}
          onClick={(e) => {
            if (onClick) {
              onClick();
              // return
            }
            dispatch(setSelectedSubPage({ selected: tagsBtn.name }));
            navigate(`/user/${tagsBtn.name}`)
          }}
          style={{
            padding: "1rem 6rem",
            backgroundColor: `${
              activeInpageHeader === tagsBtn.name ||
              (activeInpageHeader === tagsBtn.dropDownList&&
              (activeInpageHeader === tagsBtn.dropDownList[0] || activeInpageHeader === tagsBtn.dropDownList[1]))
                ? "#15151C"
                : "#191921"
            }`,
            color: `${
              activeInpageHeader === tagsBtn.name ? "#CECED8" : "#4D4D6B"
            }`,
            borderLeft: `1rem solid ${
              activeInpageHeader === tagsBtn.name ? "#7C187A" : "#353449"
            }`,
          }}
          dropDownList={tagsBtn.dropDownList}
          text={tagsBtn.name.toUpperCase()}
        />
      ))}
    </section>
  );
};

export const UniversalTagHeaderDesktopAdmin = ({
  activeInpageHeader,
  TagList = defaultTags,
  style,
  onClick,
}) => {
  const dispatch = useDispatch();
  return (
    <section
      style={style}
      className="user__admin-page-section-header-container"
    >
      {TagList.map((tagsBtn) => (
        <IdentityBtn
          key={tagsBtn.name}
          onClick={(e) => {
            if (onClick) {
              onClick();
              // return
            }
            dispatch(setSelectedSubPageAdmin({ selected: tagsBtn.name }));
          }}
          style={{
            padding: "1rem 6rem",
            backgroundColor: `${
              activeInpageHeader === tagsBtn.name ? "#15151C" : "#191921"
            }`,
            color: `${
              activeInpageHeader === tagsBtn.name ? "#CECED8" : "#4D4D6B"
            }`,
            borderLeft: `1rem solid ${
              activeInpageHeader === tagsBtn.name ? "#7C187A" : "#353449"
            }`,
          }}
          dropDownList={tagsBtn.dropDownList}
          text={tagsBtn.name.toUpperCase()}
        />
      ))}
    </section>
  );
};
export default UniversalTagHeaderDesktop;
