import { useEffect, useState } from "react";
import { FaEdit, FaMinus, FaPlus, FaPlusCircle, FaTag } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createMerchandise } from "../api/auth";
import { convertToBase64 } from "../component/auth/openStoreModal";
import IdentityBtn from "../component/buttons/identityBtn";
import CGBar, { CGBarSlim } from "../component/card/cbBar";
import LoootyLoader from "../component/loader/loootyLoader";
import NavBar from "../component/navbar/navbar";
import OrderCheckbox from "../component/user/OrderCheckbox";

export const MainTags = ({
  text = "3D Assets",
  defaultState = false,
  productInfo,
  setProductInfo,
}) => {
  const [isSelected, setIsSelected] = useState(defaultState);

  const removeItemFromArray = (myArray, val) => {

    const index = myArray.indexOf(val);
    if (index != -1) {
      const x = myArray.splice(index, 1);
      return myArray;
    }

    return -1;
  };
  return (
    <button
      onClick={(e) => {
        let check = removeItemFromArray(productInfo.merchandise_tags, text);

        if (check == -1) {
          if (productInfo.merchandise_tags.length > 4) {
            toast.error("You can only choose up to five(5) tags");
            return;
          }
          let newArray = [...productInfo.merchandise_tags, text];
          setProductInfo((old) => ({ ...old, merchandise_tags: newArray }));
          setIsSelected(!isSelected);
          return;
        }

        setProductInfo((old) => ({ ...old, merchandise_tags: check }));
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
  const [isLoading, setIsLoading] = useState(false)
  const [clickProtect, setClickProtect] = useState(false)

  const dispatch = useDispatch()
  const merchandiseStore = useSelector(state => state.user.merchandiseStore)
  const user = useSelector(state => state.user.user)
  const navigate = useNavigate()

  useEffect(() => {
    // if(!user){
    //   navigate("/")
    // }
    // if(merchandiseStore){
    //   console.log(merchandiseStore.id, "JOY")

    // }

    if(!merchandiseStore){
      navigate("/user")
    }
  }, [user, merchandiseStore])

  const [productInfo, setProductInfo] = useState({
    store_id: merchandiseStore? merchandiseStore.id: "",
    merchandise_name: "",
    merchandise_description: "",
    merchandise_tags: ["3D Assets"],
    basic_price: 0,
    commercial_price: 0,
    explicit_content: 1,
    // base64_photos: "",
    // photos: "",
    // merchandise_cover_picture: [],
    bas64_cover_picture: [],
    // merchandise_preview_pictures: [],
    base64_preview_photos: [],
    file: [],
  });

  

  const handlePublish = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setClickProtect(true)

    // setStoreInfo(old => ({...old, email: user.email}))
    // let data = new FormData()

    // data.append('store_id', productInfo.store_id )
    // data.append('merchandise_name', productInfo.merchandise_name)
    // data.append('merchandise_description', productInfo.merchandise_description)
    // data.append('merchandise_tags', JSON.stringify(productInfo.merchandise_tags) )
    // data.append('basic_price', productInfo.basic_price)
    // data.append('commercial_price', productInfo.commercial_price)
    // data.append('explicit_content', productInfo.explicit_content)
    // data.append('base64_photos', productInfo.base64_photos)
    // data.append('photos', productInfo.photos)
    // data.append('merchandise_cover_picture', productInfo.merchandise_cover_picture)
    // data.append('bas64_cover_picture', productInfo.bas64_cover_picture)
    // data.append('merchandise_preview_pictures', JSON.stringify(productInfo.merchandise_preview_pictures) )
    // data.append('base64_preview_photos', productInfo.base64_preview_photos)
    // data.append('file', JSON.stringify(productInfo.file) )

    const uploadProduct = await dispatch(createMerchandise({ productInfo: productInfo }))
      .unwrap()
      .then(async (result) => {
        setIsLoading(false);
        toast.success("Product uploaded successful");

        // setShowRegModal({ ...showRegModal, login: false });
        // navigate("/user");
      })
      .catch((err) => {
        setIsLoading(false);
        setClickProtect(false)
        if (err.response) {
          toast.error(err.response.data.message);
        }
      });
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
                {productInfo.bas64_cover_picture[0] ? (
                  <img
                    className="upload__image-form-control-image"
                    src={
                      productInfo.bas64_cover_picture
                    }
                  />
                ) : null}
                <input
                  accept="image/*"
                  onChange={async (e) => {
                    let newArray = productInfo.bas64_cover_picture;
                    newArray = e.target.files;
                    console.log("Got here")
                    const baseFile = await convertToBase64(e.target.files[0])
                    setProductInfo((old) => {
                      console.log(productInfo.bas64_cover_picture, "PRODUCT")
                      return {
                      ...old,
                      bas64_cover_picture: baseFile,
                    }});
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
                  {productInfo.base64_preview_photos[0] ? (
                    <img
                      className="upload__image-form-control-image"
                      src={
                        productInfo.base64_preview_photos[0]
                      }
                    />
                  ) : null}
                  <FaPlusCircle className="upload__image-iconister" />
                  <p>Preview Image</p>
                  <input
                    onChange={async (e) => {
                      let newArray = productInfo.base64_preview_photos;
                      newArray[0] = await convertToBase64(e.target.files[0]);
                      
                      setProductInfo((old) => ({
                        ...old,
                        base64_preview_photos: newArray,
                      }));
                    }}
                    type={"file"}
                    className="upload__image-form-control"
                  />
                </div>

                <div className="upload__image-item">
                  {productInfo.base64_preview_photos[1] ? (
                    <img
                      className="upload__image-form-control-image"
                      src={
                        productInfo.base64_preview_photos[1]
                      }
                    />
                  ) : null}
                  <FaPlusCircle className="upload__image-iconister" />
                  <p>Preview Image</p>
                  <input
                    onChange={async (e) => {
                      let newArray = productInfo.base64_preview_photos;
                      newArray[1] = await convertToBase64(e.target.files[0]);
                     
                      setProductInfo((old) => ({
                        ...old,
                        base64_preview_photos: newArray,
                      }));
                    }}
                    type={"file"}
                    className="upload__image-form-control"
                  />
                </div>

                <div className="upload__image-item">
                  {productInfo.base64_preview_photos[2] ? (
                    <img
                      className="upload__image-form-control-image"
                      src={
                        productInfo.base64_preview_photos[2]
                      }
                    />
                  ) : null}
                  <FaPlusCircle className="upload__image-iconister" />
                  <p>Preview Image</p>
                  <input
                    onChange={async (e) => {
                      let newArray = productInfo.base64_preview_photos;
                      newArray[2] = await convertToBase64(e.target.files[0]);
                      
                      setProductInfo((old) => ({
                        ...old,
                        base64_preview_photos: newArray,
                      }));
                    }}
                    type={"file"}
                    className="upload__image-form-control"
                  />
                </div>

                <div className="upload__image-item">
                  {productInfo.base64_preview_photos[3] ? (
                    <img
                      className="upload__image-form-control-image"
                      src={
                        productInfo.base64_preview_photos[3]
                      }
                    />
                  ) : null}
                  <FaPlusCircle className="upload__image-iconister" />
                  <p>Preview Image</p>
                  <input
                    onChange={async (e) => {
                      let newArray = productInfo.base64_preview_photos;
                      newArray[3] = await convertToBase64(e.target.files[0]);
                      
                      setProductInfo((old) => ({
                        ...old,
                        base64_preview_photos: newArray,
                      }));
                    }}
                    type={"file"}
                    className="upload__image-form-control"
                  />
                </div>

                <div className="upload__image-item">
                  {productInfo.base64_preview_photos[4] ? (
                    <img
                      className="upload__image-form-control-image"
                      src={
                        productInfo.base64_preview_photos[4]
                      }
                    />
                  ) : null}
                  <FaPlusCircle className="upload__image-iconister" />
                  <p>Preview Image</p>
                  <input
                    onChange={async (e) => {
                      let newArray = productInfo.base64_preview_photos;
                      newArray[4] = await convertToBase64(e.target.files[0]);
                      
                      setProductInfo((old) => ({
                        ...old,
                        base64_preview_photos: newArray,
                      }));
                    }}
                    type={"file"}
                    className="upload__image-form-control"
                  />
                </div>

                <div className="upload__image-item">
                  {productInfo.base64_preview_photos[5] ? (
                    <img
                      className="upload__image-form-control-image"
                      src={
                        productInfo.base64_preview_photos[5]
                      }
                    />
                  ) : null}
                  <FaPlusCircle className="upload__image-iconister" />
                  <p>Preview Image</p>
                  <input
                    onChange={async (e) => {
                      let newArray = productInfo.base64_preview_photos;
                      newArray[5] = await convertToBase64(e.target.files[0]);
                      
                      setProductInfo((old) => ({
                        ...old,
                        base64_preview_photos: newArray,
                      }));
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
                <span style={{ color: "#B31FA6", fontSize: "1.1rem" }}>
                  {productInfo.merchandise_tags.length}/
                </span>
                5 tags
              </p>
            </div>

            <section className="upload__tags-inner-container">
              <MainTags
                setProductInfo={setProductInfo}
                productInfo={productInfo}
                text="3D Assets"
                defaultState={false}
              />
              <MainTags
                setProductInfo={setProductInfo}
                productInfo={productInfo}
                text="Games"
                defaultState={true}
              />
              <MainTags
                setProductInfo={setProductInfo}
                productInfo={productInfo}
                text="Anime"
                defaultState={true}
              />
              <MainTags
                setProductInfo={setProductInfo}
                productInfo={productInfo}
                text="2D Assets"
                defaultState={true}
              />
              <MainTags
                setProductInfo={setProductInfo}
                productInfo={productInfo}
                text="compose"
                defaultState={true}
              />
              <MainTags
                setProductInfo={setProductInfo}
                productInfo={productInfo}
                text="Cinema"
                defaultState={true}
              />
              <MainTags
                setProductInfo={setProductInfo}
                productInfo={productInfo}
                text="Mesh"
                defaultState={true}
              />
              <MainTags
                setProductInfo={setProductInfo}
                productInfo={productInfo}
                text="Topo"
                defaultState={true}
              />
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
              <input
                multiple
                onChange={(e) => {
                  setProductInfo((old) => {
                    console.log(e.target.files, productInfo.file, "HAKA")
                    return { ...old, file: e.target.files }});
                }}
                className="upload__main-files-upload"
                type={"file"}
              />
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

                      <input
                        type={"number"}
                        onChange={(e) =>
                          setProductInfo((old) => ({
                            ...old,
                            basic_price: e.target.value,
                          }))
                        }
                        value={productInfo.basic_price}
                        className="upload__price-input"
                      />
                    </div>
                  </div>

                  <div className="upload__container-controller">
                    <button
                      onClick={(e) =>
                        setProductInfo((old) => ({
                          ...old,
                          basic_price: Number(old.basic_price) + 1,
                        }))
                      }
                      className="upload__controller-btn"
                    >
                      <span>
                        <FaPlus />
                      </span>
                    </button>
                    <button
                      onClick={(e) =>
                        setProductInfo((old) => ({
                          ...old,
                          basic_price: Number(old.basic_price) - 1,
                        }))
                      }
                      className="upload__controller-btn"
                    >
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
                        type={"number"}
                        value={productInfo.commercial_price}
                        onChange={(e) =>
                          setProductInfo((old) => ({
                            ...old,
                            commercial_price: e.target.value,
                          }))
                        }
                        disabled={isCommercialActive}
                        className="upload__price-input"
                      />
                    </div>
                  </div>

                  <div className="upload__container-controller">
                    <button
                      onClick={() =>
                        setProductInfo((old) => ({
                          ...old,
                          commercial_price: Number(old.commercial_price) + 1,
                        }))
                      }
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
                      onClick={() =>
                        setProductInfo((old) => ({
                          ...old,
                          commercial_price: Number(old.commercial_price) + 1,
                        }))
                      }
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

            <button disabled={clickProtect} opacity={clickProtect?"0.6": "1"} onClick={handlePublish} className="upload__publish-btn">
              <span>{isLoading? <LoootyLoader />: "Publish"}</span>
            </button>
          </section>
        </section>
      </main>
    </div>
  );
};

export default UploadPage;
