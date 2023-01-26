import CardArrowPointer from "./CardArrowPointer";

const HomeCard = ({
    textHeaderLeft = "Users",
    textHeaderRight = "Total",
    mainFigure = "10.74m",
    mainFigureDescription = "Newly Signed up",
    newActive = false,
    childrenComp = <span>20,000</span>,
  }) => {
    return (
      <section className={`admin__home-card ${newActive && "bordered"}`}>
        {newActive && (
          <CardArrowPointer
            style={{ color: "#7C187A" }}
          />
        )}
        <div className="admin__home-card-title-header">
          <span className="admin__home-card-title-left">{textHeaderLeft}</span>
          <span className="admin__home-card-title-right">{textHeaderRight}</span>
        </div>
        <div className="admin__home-card-title-body">
          <div
            className={`admin__hc-inactive-box ${newActive && "purpled"}`}
          ></div>
          <div className="admin__hc-inner-total-container">
            <h3 className="admin__hc-content-first-header">{mainFigure}</h3>
            <h4 className="admin__hc-content-second-header">
              {mainFigureDescription}
            </h4>
            <h5 className="admin__hc-content-third-header">{childrenComp}</h5>
          </div>
        </div>
      </section>
    );
  };

  export default HomeCard