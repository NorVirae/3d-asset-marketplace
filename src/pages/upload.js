import { useState } from "react";
import { FaEdit, FaMinus, FaPlus, FaPlusCircle, FaTag } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { MdEdit } from "react-icons/md";
import { toast } from "react-toastify";
import IdentityBtn from "../component/buttons/identityBtn";
import CGBar, { CGBarSlim } from "../component/card/cbBar";
import NavBar from "../component/navbar/navbar";
import { OrderCheckbox } from "./user";

export const MainTags = ({
  text = "3D Assets",
  defaultState = false,
  productInfo,
  setProductInfo,
}) => {
  const [isSelected, setIsSelected] = useState(defaultState);

  const removeItemFromArray = (myArray, val) => {
    console.log(myArray, val)

    const index = myArray.indexOf(val);
    if (index != -1) {
      const x = myArray.splice(index, 1);
      console.log(`myArray values: ${myArray}`);
      console.log(`variable x value: ${x}`);
      return myArray;
    }

    return -1;
  };
  return (
    <button
      onClick={(e) => {
        
        let check = removeItemFromArray(productInfo.merchandise_tags, text);

        if (check == -1) {
          if (productInfo.merchandise_tags.length > 4){
            toast.error("You can only choose up to five(5) tags")
            return
          }
          let newArray = [...productInfo.merchandise_tags, text];
          setProductInfo(old => ({...old, merchandise_tags: newArray}));
          setIsSelected(!isSelected);
          return;
        }

        setProductInfo(old => ({...old, merchandise_tags: check}));
        setIsSelected(!isSelected);
      }}
      className="upload__tag-btn"
    >
      {text}
      <div
        className={`upload__tag-selected ${
          isSelected && "upload__tag-selected-transparent"
        }`}
      ></div>
    </button>
  );
};

const UploadPage = () => {
  const [isCommercialActive, setIsCommercialActive] = useState(false);
  const [productInfo, setProductInfo] = useState({
    store_id: "",
    merchandise_name: "",
    merchandise_description: "",
    merchandise_tags: ["3D Assets"],
    basic_price: "",
    commercial_price: "",
    explicit_content: "",
    base64_photos: "",
    photos: "",
    merchandise_cover_picture: [],
    bas64_cover_picture: "",
    merchandise_preview_pictures: [],
    base64_preview_photos: [],
    file: "",
  });

  const handlePublish = () => {
    console.log(productInfo);
  };

  return (
    <div className="upload__container">
      <header>
        <NavBar />
        {/* <CGBarSlim /> */}
      </header>

      <main className="upload__mock-up">
        <section className="upload__title-section">
          <div className="upload__title-container">
            <div className="upload__title">Title:</div>
          </div>

          <div className="upload__main-content">
            <div className="upload__form-group">
              <input
                onChange={(e) =>
                  setProductInfo((old) => ({
                    ...old,
                    merchandise_name: e.target.value,
                  }))
                }
                value={productInfo.merchandise_name}
                className="upload__form-control"
              />
              <button className="upload__form-edit-btn">
                <MdEdit />
              </button>
            </div>

            {/* drop-image bar */}

            <section className="upload__image-dropbox-container">
              <div className="upload__image-dropbox-twin">
                {productInfo.merchandise_cover_picture[0] ? (
                  <img
                    className="upload__image-form-control-image"
                    src={URL.createObjectURL(
                      productInfo.merchandise_cover_picture[0]
                    )}
                  />
                ) : null}
                <input
                  accept="image/*"
                  onChange={(e) => {
                    let newArray = productInfo.merchandise_cover_picture;
                    newArray[0] = e.target.files[0];
                    setProductInfo((old) => ({
                      ...old,
                      merchandise_cover_picture: newArray,
                    }));
                  }}
                  placeholder="none"
                  type={"file"}
                  className="upload__image-dropbox"
                />

                <FaPlusCircle
                  style={{ color: "#737377", fontSize: "1.5rem" }}
                />
                <span className="upload__image-head">Upload Image Preview</span>
                <p className="upload__image-desc">
                  or Drag and drop cover here
                </p>
              </div>
            </section>

            {/* Image previews container */}

            <section className="upload__image-preview">
              <div className="upload__image-preview-inner">
                <div className="upload__image-item">
                  {productInfo.merchandise_preview_pictures[0] ? (
                    <img
                      className="upload__image-form-control-image"
                      src={URL.createObjectURL(
                        productInfo.merchandise_preview_pictures[0]
                      )}
                    />
                  ) : null}
                  <FaPlusCircle className="upload__image-iconister" />
                  <p>Preview Image</p>
                  <input
                    onChange={(e) => {
                      let newArray = productInfo.merchandise_preview_pictures;
                      newArray[0] = e.target.files[0];
                      console.log(
                        newArray,
                        productInfo.merchandise_preview_pictures
                      );
                      setProductInfo((old) => ({
                        ...old,
                        merchandise_preview_pictures: newArray,
                      }));
                      console.log(newArray, "GAME ARRAY", e.target.files[0]);
                    }}
                    type={"file"}
                    className="upload__image-form-control"
                  />
                </div>

                <div className="upload__image-item">
                  {productInfo.merchandise_preview_pictures[1] ? (
                    <img
                      className="upload__image-form-control-image"
                      src={URL.createObjectURL(
                        productInfo.merchandise_preview_pictures[1]
                      )}
                    />
                  ) : null}
                  <FaPlusCircle className="upload__image-iconister" />
                  <p>Preview Image</p>
                  <input
                    onChange={(e) => {
                      let newArray = productInfo.merchandise_preview_pictures;
                      newArray[1] = e.target.files[0];
                      console.log(
                        newArray,
                        productInfo.merchandise_preview_pictures
                      );
                      setProductInfo((old) => ({
                        ...old,
                        merchandise_preview_pictures: newArray,
                      }));
                      console.log(newArray, "GAME ARRAY", e.target.files[0]);
                    }}
                    type={"file"}
                    className="upload__image-form-control"
                  />
                </div>

                <div className="upload__image-item">
                  {productInfo.merchandise_preview_pictures[2] ? (
                    <img
                      className="upload__image-form-control-image"
                      src={URL.createObjectURL(
                        productInfo.merchandise_preview_pictures[2]
                      )}
                    />
                  ) : null}
                  <FaPlusCircle className="upload__image-iconister" />
                  <p>Preview Image</p>
                  <input
                    onChange={(e) => {
                      let newArray = productInfo.merchandise_preview_pictures;
                      newArray[2] = e.target.files[0];
                      console.log(
                        newArray,
                        productInfo.merchandise_preview_pictures
                      );
                      setProductInfo((old) => ({
                        ...old,
                        merchandise_preview_pictures: newArray,
                      }));
                      console.log(newArray, "GAME ARRAY", e.target.files[0]);
                    }}
                    type={"file"}
                    className="upload__image-form-control"
                  />
                </div>

                <div className="upload__image-item">
                  {productInfo.merchandise_preview_pictures[3] ? (
                    <img
                      className="upload__image-form-control-image"
                      src={URL.createObjectURL(
                        productInfo.merchandise_preview_pictures[3]
                      )}
                    />
                  ) : null}
                  <FaPlusCircle className="upload__image-iconister" />
                  <p>Preview Image</p>
                  <input
                    onChange={(e) => {
                      let newArray = productInfo.merchandise_preview_pictures;
                      newArray[3] = e.target.files[0];
                      console.log(
                        newArray,
                        productInfo.merchandise_preview_pictures
                      );
                      setProductInfo((old) => ({
                        ...old,
                        merchandise_preview_pictures: newArray,
                      }));
                      console.log(newArray, "GAME ARRAY", e.target.files[0]);
                    }}
                    type={"file"}
                    className="upload__image-form-control"
                  />
                </div>

                <div className="upload__image-item">
                  {productInfo.merchandise_preview_pictures[4] ? (
                    <img
                      className="upload__image-form-control-image"
                      src={URL.createObjectURL(
                        productInfo.merchandise_preview_pictures[4]
                      )}
                    />
                  ) : null}
                  <FaPlusCircle className="upload__image-iconister" />
                  <p>Preview Image</p>
                  <input
                    onChange={(e) => {
                      let newArray = productInfo.merchandise_preview_pictures;
                      newArray[4] = e.target.files[0];
                      console.log(
                        newArray,
                        productInfo.merchandise_preview_pictures
                      );
                      setProductInfo((old) => ({
                        ...old,
                        merchandise_preview_pictures: newArray,
                      }));
                      console.log(newArray, "GAME ARRAY", e.target.files[0]);
                    }}
                    type={"file"}
                    className="upload__image-form-control"
                  />
                </div>

                <div className="upload__image-item">
                  {productInfo.merchandise_preview_pictures[5] ? (
                    <img
                      className="upload__image-form-control-image"
                      src={URL.createObjectURL(
                        productInfo.merchandise_preview_pictures[5]
                      )}
                    />
                  ) : null}
                  <FaPlusCircle className="upload__image-iconister" />
                  <p>Preview Image</p>
                  <input
                    onChange={(e) => {
                      let newArray = productInfo.merchandise_preview_pictures;
                      newArray[5] = e.target.files[0];
                      console.log(
                        newArray,
                        productInfo.merchandise_preview_pictures
                      );
                      setProductInfo((old) => ({
                        ...old,
                        merchandise_preview_pictures: newArray,
                      }));
                      console.log(newArray, "GAME ARRAY", e.target.files[0]);
                    }}
                    type={"file"}
                    className="upload__image-form-control"
                  />
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="upload__description-section">
          <IdentityBtn
            style={{
              background: "#232230",
              fontSize: "1rem",
              padding: ".8rem 5rem",
            }}
            text={"Description"}
          />
          <section className="upload__text-area-container">
            <textarea
              onChange={(e) =>
                setProductInfo((old) => ({
                  ...old,
                  merchandise_description: e.target.value,
                }))
              }
              value={productInfo.merchandise_description}
              rows={8}
              cols={70}
              className="upload__text-area"
            ></textarea>
            <button className="upload__text-area-btn">
              <MdEdit />
            </button>
          </section>

          <section className="upload__tags-container">
            <div className="upload__tags-title-container">
              <div className="upload__tags-title">
                <FaTag style={{ fontSize: "1.5rem", color: "#EE8E03" }} /> Tags
              </div>
              <p className="upload__tag-select">
                Choose up to five{" "}
                <span style={{ color: "#B31FA6", fontSize: "1.1rem" }}>{productInfo.merchandise_tags.length}/</span>
                8 tags
              </p>
            </div>

            <section className="upload__tags-inner-container">
              <MainTags setProductInfo={setProductInfo} productInfo={productInfo} text="3D Assets" defaultState={false} />
              <MainTags setProductInfo={setProductInfo} productInfo={productInfo} text="Games" defaultState={true} />
              <MainTags setProductInfo={setProductInfo} productInfo={productInfo} text="Anime" defaultState={true} />
              <MainTags setProductInfo={setProductInfo} productInfo={productInfo} text="2D Assets" defaultState={true} />
              <MainTags setProductInfo={setProductInfo} productInfo={productInfo} text="compose" defaultState={true} />
              <MainTags setProductInfo={setProductInfo} productInfo={productInfo} text="Cinema" defaultState={true} />
              <MainTags setProductInfo={setProductInfo} productInfo={productInfo} text="Mesh" defaultState={true} />
              <MainTags setProductInfo={setProductInfo} productInfo={productInfo} text="Topo" defaultState={true} />
            </section>
          </section>

          <section className="upload__main-file-upload-container">
            <div className="upload__main-files-upload-twin">
              <div className="upload__main-files-upload-text">
                <FaPlusCircle
                  style={{ fontSize: "1.7rem", color: "#AA24AC" }}
                />{" "}
                Upload Files
              </div>
              <input multiple onChange={e=> {
                setProductInfo(old => ({...old, files: e.target.files}))
              }} className="upload__main-files-upload" type={"file"} />
            </div>
          </section>

          <section className="upload__price-section">
            <div className="upload__price-inner-section">
              <h3>Price</h3>
              <div className="upload__form-group-extra">
                <span className="upload__license-text">Basic&nbsp;License</span>
                <section className="upload__skew-container">
                  <div className="upload__main-control-container">
                    <div className="upload__control-switch-container">
                      <button className="upload__control-usd-btn">
                        <span>USD</span>
                      </button>
                      <input className="upload__price-input" />
                    </div>
                  </div>

                  <div className="upload__container-controller">
                    <button className="upload__controller-btn">
                      <span>
                        <FaPlus />
                      </span>
                    </button>
                    <button className="upload__controller-btn">
                      <span>
                        <FaMinus />
                      </span>
                    </button>
                  </div>
                </section>
              </div>

              <div className={`upload__form-group-extra`}>
                <span className="upload__license-text upload__form-group-commercial ">
                  <OrderCheckbox
                    isActive={isCommercialActive}
                    setIsActive={setIsCommercialActive}
                  />
                  Commercial License
                </span>
                <section
                  className={`upload__skew-container ${
                    isCommercialActive &&
                    "upload__form-group-commercial-inactive"
                  }`}
                >
                  <div className="upload__main-control-container">
                    <div className="upload__control-switch-container">
                      <button className="upload__control-usd-btn">
                        <span>USD</span>
                      </button>
                      <input
                        disabled={isCommercialActive}
                        className="upload__price-input"
                      />
                    </div>
                  </div>

                  <div className="upload__container-controller">
                    <button
                      disabled={isCommercialActive}
                      className="upload__controller-btn"
                    >
                      <span>
                        <FaPlus />
                      </span>
                    </button>
                    <button
                      disabled={isCommercialActive}
                      className="upload__controller-btn"
                    >
                      <span>
                        <FaMinus />
                      </span>
                    </button>
                  </div>
                </section>
              </div>
            </div>
            <div className="upload__more-text">More about license</div>
          </section>

          <section className="upload__publish-section">
            <button className="upload__draft-btn">
              <span>Draft</span>
            </button>

            <button onClick={handlePublish} className="upload__publish-btn">
              <span>Publish</span>
            </button>
          </section>
        </section>
      </main>
    </div>
  );
};

export default UploadPage;
