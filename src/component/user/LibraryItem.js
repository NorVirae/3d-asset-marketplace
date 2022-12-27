import { IoMdFolderOpen } from "react-icons/io";
import {ImFolder} from "react-icons/im"

const LibraryItem = ({ onClick, prodNumber, active = false, itemName }) => {
    return (
      <button
        onClick={onClick}
        className={`user__library-item ${active && "user__library-item-active"}`}
      >
        <div className="user__library-item-inner">
          {active ? (
            <IoMdFolderOpen
              className="user__lib-folder-large"
              style={{ fontSize: "1.4rem" }}
            />
          ) : (
            <ImFolder
              className="user__lib-folder-large"
              style={{ fontSize: "1rem" }}
            />
          )}
          <div className="user__library-item-body">
            <h5 className="user__library-item-name">{itemName}</h5>
          </div>
        </div>
        <span className="user__library-item-info-count">{prodNumber} items</span>
      </button>
    );
  };

  export default LibraryItem
  