import { useState } from "react";
import { AiFillFileZip } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";



const WolfGuyImg = "/assets/image/wolfguyfeather.jpg";
const TsunamiImg = "/assets/image/tsunami.jpg";
const ScaryImg = "/assets/image/scary.jpg";
const CatmanImg = "/assets/image/catman.jpg";


const CollectionDescription = () => {
    const [showDescription, setShowDescription] = useState(true);
    const [showFiles, setShowfiles] = useState(true);
    return (
      <div className="admin__main-collection-preview">
        <div className="admin__collection-preview">
          <img className="admin__main-images-main-preview" src={WolfGuyImg} />
          <div className="admin__main-images-preview-container">
            <img className="admin__main-images-preview" src={ScaryImg} />
            <img className="admin__main-images-preview" src={TsunamiImg} />
            <img className="admin__main-images-preview" src={CatmanImg} />
            <img className="admin__main-images-preview" src={CatmanImg} />
          </div>
        </div>
  
        <section className="admin__collection-details">
          <h3>Black Panther | Character Modelling</h3>
          <div className="admin__collection-details-body">
            <img className="admin__main-img-owner" src={WolfGuyImg} />
            <span className="admin__span-text">by:</span>
            <span className="admin__collection-author-name">Jay Hills</span>
            <span className="admin__span-text">in 3D Assets...</span>
            <button className="admin__collection-send-message-btn">
              <span>
                <BiMailSend style={{ fontSize: "1.1rem" }} /> Message
              </span>
            </button>
          </div>
  
          <div className="admin__collection-description">
            Description{" "}
            <IoMdArrowDropdown className="admin__collection-drop-icon" />
          </div>
  
          <div className="admin__collection-file-container-title">
            <span
              onClick={() => setShowfiles(!showFiles)}
              className="admin__collection-file"
            >
              Files{" "}
              <IoMdArrowDropdown
                style={{
                  transform: `${showFiles ? "rotate(-45deg) " : "rotate(0deg)"}`,
                }}
                className="admin__collection-drop-icon"
              />
            </span>
            <button className="admin__collection-download-all-btn">
              <span>
                <FaArrowAltCircleDown /> Download All
              </span>
            </button>
          </div>
  
          {showFiles && (
            <section className="admin__collection-file-container">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div className="admin__collection-main-file">
                  <div className="admin__collection-main-file-inner">
                    <AiFillFileZip className="admin__collection-drop-icon" />
                    <span>MaleBody </span>
                    <span className="admin__span-text">ZIP / 1.6 GB </span>
                  </div>
                  <FaArrowAltCircleDown className="admin__collection-individual-download" />
                </div>
              ))}
            </section>
          )}
        </section>
      </div>
    );
  };

  export default CollectionDescription