const SalesDropdown = ({
    showDropdown = false,
    setShowDropdown,
    onMouseEnter,
    onMouseLeave,
    setSelected,
  }) => {
    return showDropdown ? (
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="admin__sales-mc-dropdown-container"
      >
        <span onClick={(e) => setSelected("$30")}>$30</span>
        <span onClick={(e) => setSelected("$40")}>$40</span>
      </div>
    ) : null;
  };

  export default SalesDropdown
