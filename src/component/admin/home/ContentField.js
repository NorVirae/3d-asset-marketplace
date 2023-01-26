const ContentField = ({ style, text = "Nov 5, 2022" }) => {
  return (
    <span style={style} className="admin__home-ra-cr-field">
      {text}
    </span>
  );
};

export const ContentFieldSales = ({ style, text = "Nov 5, 2022" }) => {
  return (
    <span style={style} className="admin__home-ra-cr-field sales">
      {text}
    </span>
  );
};

export default ContentField;
