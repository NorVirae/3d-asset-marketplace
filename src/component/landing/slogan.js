export const OrangeBtn = ({style, text="SELL"}) => (
  <button style={style} className="landing__slogan-sell">
    <span className="landing__slogan-sell-text">{text}</span>
  </button>
);

const Slogan = () => {
  return (
    <div className="landing__slogan">
      <div className="landing__slogan-first-text">
        Welcome to the first marketplace for all things CG
      </div>

      <div className="landing__slogan-second-text">
        Shop for curated Tools and more
      </div>

      <div className="landing__instruct-btn-container">
        <button className="landing__slogan-browse">
          <span className="landing__slogan-browse-text">BROWSE</span>
        </button>

        <button className="landing__slogan-sell">
          <span className="landing__slogan-sell-text">SELL</span>
        </button>
      </div>
    </div>
  );
};

export default Slogan;
