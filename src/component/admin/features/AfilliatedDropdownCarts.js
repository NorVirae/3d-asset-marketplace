import AffiliatedItemCarts from "./AffiliatedItemCarts";

const AfilliatedDropdownCarts = () => {
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

export default AfilliatedDropdownCarts