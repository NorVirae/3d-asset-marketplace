const UserPurpleInnerStripeBtn = ({text, style, innerTextStyle}) => (
  <button
    style={style}
    className="user__upload-products-btn"
  >
    <div style={innerTextStyle} className="user__upload-products-btn-inner">
      {text}
    </div>
  </button>
);

export default UserPurpleInnerStripeBtn