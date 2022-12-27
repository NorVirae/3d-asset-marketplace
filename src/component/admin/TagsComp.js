import FilterClear from "./FilterClear";
import FilterSearchBar from "./FilterSearchBar";
import FilterSelector from "./FilterSelector";

const TagsComp = ({ selectedTag, setSelectedTag }) => {
    return (
      <section className="admin__tags-container">
        <div className="admin__feature-tags-container">
          <FilterSearchBar />
          <section className="admin__filter-selector-parent-container">
            <FilterSelector title="CATEGORY" titlevalue="Show all" />
            <FilterSelector title="LICENSE" titlevalue="Show all"/>
            <FilterSelector title="PRICE" titlevalue="205 to 500"/>
            <FilterClear/>
          </section>
        </div>
      </section>
    );
  };

  export default TagsComp
