import SuscribersCard from "./SuscribersCard";

const Suscribers = () => {
    return (
      <section className="users__suscribers-container">
        <div className="users__suscribers-container-inner">
          <SuscribersCard />
          <SuscribersCard />
          <SuscribersCard />
          <SuscribersCard />
          <SuscribersCard />
        </div>
      </section>
    );
  };

  export default Suscribers
