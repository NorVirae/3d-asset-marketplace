import { useDispatch, useSelector } from "react-redux";
import { setSelectedSubPage } from "../../redux/reducers/userStateReducer";
import IdentityBtn from "../buttons/identityBtn";

const TagheaderCompDesktop = ({ activeInpageHeader, toggleVisAdmin }) => {
  const dispatch = useDispatch();
  const merchandiseStore = useSelector((state) => state.user.merchandiseStore);

  return (
    <section className="user__admin-page-section-header-container">
      <IdentityBtn
        onClick={(e) => dispatch(setSelectedSubPage({ selected: "store" }))}
        style={{
          padding: "1rem 6rem",
          marginRight: `${!merchandiseStore ? "61.5vw" : "0"}`,
          backgroundColor: `${
            activeInpageHeader === "store" ? "#15151C" : "#191921"
          }`,
          color: `${activeInpageHeader === "store" ? "#CECED8" : "#4D4D6B"}`,
          borderLeft: `1rem solid ${
            activeInpageHeader === "store" ? "#7C187A" : "#353449"
          }`,
        }}
        dropDownList={["SUSCRIBERS", "STORE"]}
        text={"STORE"}
      />

      {merchandiseStore && (
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
            dropDownList={["COLLECTIONS", "LIBRARY"]}
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
        </>
      )}
    </section>
  );
};

export default TagheaderCompDesktop;
