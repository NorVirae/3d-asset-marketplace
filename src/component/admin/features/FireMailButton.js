import { RiMailSendFill } from "react-icons/ri";

const FireMailButton = ({text}) => {
    return (
      <button className={`admin__users-fire-button ${text && "text"}`}>
       {text?<span style={{fontSize: ".9rem"}} className="admin__users-fire-button-icon">{text}</span>: <RiMailSendFill className="admin__users-fire-button-icon" />}
      </button>
    );
  };


  export default FireMailButton