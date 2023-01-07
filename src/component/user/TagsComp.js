const TagsComp = ({ selectedTag, setSelectedTag }) => {
    return (
      <section className="user__tags-container">
        <div className="user__feature-tags-container">
          <span
            onClick={(e) => setSelectedTag("feature")}
            className={`user__feature-tags-item ${
              selectedTag === "feature" && "user__feature-tags-item-active"
            }`}
          >
            FEATURED
          </span>
  
          <span
            onClick={(e) => setSelectedTag("popular")}
            className={`user__feature-tags-item ${
              selectedTag === "popular" && "user__feature-tags-item-active"
            }`}
          >
            POPULAR
          </span>
          <span
            onClick={(e) => setSelectedTag("recent")}
            className={`user__feature-tags-item ${
              selectedTag === "recent" && "user__feature-tags-item-active"
            }`}
          >
            RECENT
          </span>
          <span
            onClick={(e) => setSelectedTag("seller")}
            className={`user__feature-tags-item ${
              selectedTag === "seller" && "user__feature-tags-item-active"
            }`}
          >
            BEST SELLERS
          </span>
        </div>
  
        <SearchBar />
      </section>
    );
  };

  export default TagsComp