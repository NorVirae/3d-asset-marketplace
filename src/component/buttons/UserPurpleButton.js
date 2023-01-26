const UserPurpleInnerStripeBtn = ({text, style, innerTextStyle, onClick}) => (
  <button
    onClick={onClick}
    style={style}
    className="user__upload-products-btn"
  >
    <div style={innerTextStyle} className="user__upload-products-btn-inner">
      {text}
    </div>
  </button>
);

export default UserPurpleInnerStripeBtn