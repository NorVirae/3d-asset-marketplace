const ContentField = ({ style, text = "Nov 5, 2022" }) => {
  return (
    <span style={style} className="admin__home-ra-cr-field">
      {text}
    </span>
  );
};

export default ContentField;
