import { useState } from "react";
import {BiMailSend} from "react-icons/bi" 
import { FaArrowAltCircleDown } from "react-icons/fa";
import {IoMdArrowDropdown} from "react-icons/io"
import {AiFillFileZip} from "react-icons/ai"


const WolfGuyImg = "/assets/image/wolfguyfeather.jpg";
const TsunamiImg = "/assets/image/tsunami.jpg";
const ScaryImg = "/assets/image/scary.jpg";
const CatmanImg = "/assets/image/catman.jpg";

const CollectionDescription = () => {
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


  export default CollectionDescription