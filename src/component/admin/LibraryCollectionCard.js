import { MdCloudDownload } from "react-icons/md";

const LibraryCollectionCard = ({ img, id, setIsActive, isActive }) => {
    return (
      <section
        style={{ transform: isActive == id && "scale(1)" }}
        onClick={() => setIsActive(id)}
        className="admin__main-lib-card"
      >
        <img
          className="admin__main-lib-card-img"
          src={img}
          style={{ width: "" }}
          alt="collections"
        />
        <div className="admin__main-lib-card-body">
          <h3 className="admin__card-collection-title">Beach House with Rumps</h3>
          <p className="admin__card-collection-description">
            by pascal garten in 3d assets
          </p>
        </div>
  
        <div className="admin__main-lib-card-footer">
          <MdCloudDownload style={{ fontSize: "1.2rem" }} /> DOWNLOAD FILES
        </div>
  
        {isActive === id && <div className="admin__pointy-arrow"></div>}
      </section>
    );
  };

  export default LibraryCollectionCard
