import { VscTriangleDown } from "react-icons/vsc";

const FilterSelector = ({title="Category", titlevalue="Show All"}) => {
    return (
      <section className="user_tags-filter-selector-container">
        <div className="user_tags-filter-selector-container-inner">
          <div className="admin__filter-label">{title}</div>
          <div className="admin__filter-main-value">
            {titlevalue} <VscTriangleDown />
          </div>
        </div>
      </section>
    );
  };

  export default FilterSelector
