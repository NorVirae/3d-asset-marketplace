const ContentHeaderField = ({ text, active }) => {
    return (
      <span className={` admin__home-ra-cr-header-field ${active && "active"} `}>
        {text}
      </span>
    );
  };

  export const ContentHeaderFieldSales = ({ text, active }) => {
    return (
      <span className={` admin__home-ra-cr-header-field sales ${active && "active"} `}>
        {text}
      </span>
    );
  };

  export default ContentHeaderField