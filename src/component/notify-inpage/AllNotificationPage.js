import { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import data from "../../data/data.json";

const NotifyCard = ({
  img,
  setNotificationz,
  notificationz,
  active,
  setActive,
  index,
}) => {
  const handleClose = () => {
    setNotificationz((old) => {
      let newNotification = old;
      newNotification.splice(index, 1);

      return newNotification;
    });
  };
  return (
    <div onClick={() => setActive(index)} className="notify__card">
      {active === index && (
        <div onClick={handleClose} className="notify__close">
          <FaTimes />
        </div>
      )}
      <div
        className={`notify__image-container ${active === index && "active"}`}
      >
        <img draggable={false} className="notify__image" src={img} alt="img" />
      </div>
      <div className={`notify__body ${active === index && "active"} `}>
        <div className="notify__image-body-container">
          <img
            draggable={false}
            className="notify__image-body"
            src={data.usersList[1].image}
            alt="img"
          />
        </div>
        <span className="notify__item">Your Product</span>
        <span className="notify__item">
          <BsDot />
        </span>
        <span className="notify__item">Sony Vision S</span>
        <span className="notify__item">has been published</span>
        <span className="notify__item month">about a month ago</span>
      </div>
    </div>
  );
};

const AllNotificationPage = () => {
  const [active, setActive] = useState(0);
  const [notificationz, setNotificationz] = useState(data.notifications);

  useEffect(() => {
    setNotificationz(notificationz);
  }, [notificationz]);

  return (
    <section className="notify__container">
      <div className="notify__container-inner">
        {notificationz &&
          notificationz.map((noti, index) => {
            return (
              <NotifyCard
                key={index}
                img={noti.image}
                index={index}
                active={active}
                setActive={setActive}
                notificationz={notificationz}
                setNotificationz={setNotificationz}
              />
            );
          })}
      </div>
    </section>
  );
};

export default AllNotificationPage;
