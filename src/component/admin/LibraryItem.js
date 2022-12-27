import { ImFolder, ImFolderOpen } from "react-icons/im";

const LibraryItem = ({ onClick, prodNumber, active = false, itemName }) => {
    return (
      <button
        onClick={onClick}
        className={`admin__library-item ${
          active && "admin__library-item-active"
        }`}
      >
        <div className="admin__library-item-inner">
          {active ? (
            <ImFolderOpen
              className="admin__lib-folder-large"
              style={{ fontSize: "1.4rem" }}
            />
          ) : (
            <ImFolder
              className="admin__lib-folder-large"
              style={{ fontSize: "1rem" }}
            />
          )}
          <div className="admin__library-item-body">
            <h5 className="admin__library-item-name">{itemName}</h5>
          </div>
        </div>
        <span className="admin__library-item-info-count">{prodNumber} items</span>
      </button>
    );
  };

  export default LibraryItem
