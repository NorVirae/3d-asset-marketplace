import AffiliatedItemCarts from "./AffiliatedItemCarts";

const AfilliatedDropdown = () => {
  return (
    <section className="admin__listed-users-afilliated-container">
      <div className="admin__listed-users-afilliated-container-inner">
        <AffiliatedItemCarts />
        <AffiliatedItemCarts />
        <AffiliatedItemCarts />
      </div>
    </section>
  );
};

export default AfilliatedDropdown