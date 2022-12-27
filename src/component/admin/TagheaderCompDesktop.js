import { useDispatch } from "react-redux";
import { setSelectedSubPage } from "../../redux/reducers/userStateReducer";
import IdentityBtn from "../buttons/identityBtn";

const TagheaderCompDesktop = ({ activeInpageHeader, toggleVisAdmin }) => {
    const dispatch = useDispatch();
    const tagbuttonWidth = "15rem";
    return (
      <section className="admin__admin-page-section-header-container-admin">
        <div className="admin__admin-page-section-header-container-admin-inner">
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

  export default TagheaderCompDesktop
