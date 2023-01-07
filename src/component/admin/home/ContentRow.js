import { BiCopy } from "react-icons/bi";
import ContentField from "./ContentField";
import ContentHeaderField from "./ContentHeaderField";

const ContentRow = ({ active, header, date, email, target, adminName }) => {
    return (
      <div className="admin__home-ra-content-row">
        <ContentHeaderField text={header} active={active} />
        <ContentField text={date} />
        <ContentField text={target} />
        <ContentField
          style={{ width: "30%" }}
          text={
            <div style={{ display: "flex", gap: ".4rem" }}>
              {email} <BiCopy />
            </div>
          }
        />
        <ContentField text={adminName} />
      </div>
    );
  };

  export default ContentRow