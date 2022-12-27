import { FaSearch } from "react-icons/fa";

const FilterSearchBar = ({ search, setSearch }) => {
    return (
      <div className="admin__input-filter-search-bar">
        <div className="admin__input-filter-skew-container">
          <input
            className="admin__input-filter-form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="admin__filter-search-button">
            <FaSearch style={{ transform: "skewX(25deg) scaleX(-1)" }} />
          </button>
        </div>
      </div>
    );
  };

  export default FilterSearchBar
