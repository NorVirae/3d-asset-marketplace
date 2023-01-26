const LibraryCard = ({ percent = "100%", current }) => {
    return (
      <div className="user__library-card">
        <img src={WolfGuyImg} className="user__library-card-img" alt="" />
        <div className="user__library-card-body">
          <div className="user__library-card-name">
            <span style={{ transform: "skewX(20deg)" }}>PRODUCT NAME</span>
            <div className="user__upload-pg-container">
              <MdCloudDownload style={{ fontSize: "2.5rem" }} />
              <span className="user__upload-pg-stats">{current} of 10</span>
            </div>
          </div>
          <div className="user__library-card-pg-container">
            <div
              style={{
                width: percent,
                backgroundColor: percent === "100%" ? "#1AC422" : "#FF9700",
              }}
              className={`user__library-pg-bar`}
            ></div>
          </div>
        </div>
      </div>
    );
  };

  export default LibraryCard