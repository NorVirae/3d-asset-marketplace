const SidebarTabNavigationItem = ({
    setActiveSideTab,
    activeSideTab,
    showText,
    navigator,
  }) => {
    return (
      <div
        onClick={() => setActiveSideTab(navigator)}
        className={`admin__freebies-sidebar-header-item ${
          activeSideTab === navigator &&
          "admin__freebies-sidebar-header-item-active"
        }`}
      >
        {showText}
      </div>
    );
  };

  export default SidebarTabNavigationItem