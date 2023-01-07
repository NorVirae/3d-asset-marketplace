import { sidebarHeaderItemList } from "./sidebarHeaderItemList";
import SidebarTabNavigationItem from "./SidebarTabNavigationItem";

const SidebarTabNavigation = ({
    setActiveSideTab,
    activeSideTab,
    itemsList = sidebarHeaderItemList,
  }) => {
    return (
      <section className="admin__freebies-sidebar-header">
        {itemsList
          ? itemsList.map((headItem) => {
              return (
                <SidebarTabNavigationItem
                  navigator={headItem.navigator}
                  showText={headItem.showText}
                  key={headItem.navigator}
                  setActiveSideTab={setActiveSideTab}
                  activeSideTab={activeSideTab}
                />
              );
            })
          : null}
  
        {/* <div
          onClick={() => setActiveSideTab("features")}
          className={`admin__freebies-sidebar-header-item ${
            activeSideTab === "features" &&
            "admin__freebies-sidebar-header-item-active"
          }`}
        >
          FEATURES
        </div>
  
        <div
          onClick={() => setActiveSideTab("daily-picks")}
          className={`admin__freebies-sidebar-header-item ${
            activeSideTab === "daily-picks" &&
            "admin__freebies-sidebar-header-item-active"
          }`}
        >
          DAILY&nbsp;PICKS
        </div> */}
      </section>
    );
  };

  export default SidebarTabNavigation