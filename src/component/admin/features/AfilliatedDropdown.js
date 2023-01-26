import AffiliatedItem from "./AffiliatedItem";

const AfilliatedDropdown = () => {
  return (
    <section className="admin__listed-users-afilliated-container">
      <div className="admin__listed-users-afilliated-container-inner">
        <AffiliatedItem />
        <AffiliatedItem />
        <AffiliatedItem />
      </div>
    </section>
  );
};

export default AfilliatedDropdown