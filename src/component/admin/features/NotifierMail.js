import {HiMail} from "react-icons/hi"

const NotifierMail = ({ isUrgent = false }) => {
    return (
      <div className="admin__report-message-notifier-icon-container">
        {!isUrgent && <div className="admin__report-message-notify"></div>}
        <HiMail
          className={`admin__report-message-notifier-icon ${
            isUrgent && "urgency"
          }`}
        />
      </div>
    );
  };


  export default NotifierMail