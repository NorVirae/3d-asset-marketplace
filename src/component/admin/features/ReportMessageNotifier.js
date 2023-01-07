import NotifierMail from "./NotifierMail";

const ReportMessageNotifier = ({ occupantText = "Report", isRequested }) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="admin__report-message-notifier"
    >
      <NotifierMail isUrgent={isRequested} />
      <span
        className={`admin__report-message-notifier-text ${
          isRequested && "requested"
        }`}
      >
        {occupantText}
      </span>
    </div>
  );
};

export default ReportMessageNotifier;
