import { useState } from 'react';
import {BsDot} from 'react-icons/bs'
import {FaTimes} from 'react-icons/fa'
import data from "../../data/data.json"

const NotifyCard = ({ firstImg, secondImg, active, setActive, index }) => {
  return (
    <div onClick={() => setActive(index)} className="notify__card">
      {active === index && <div className='notify__close'>
        <FaTimes/>
      </div>}
      <div className="notify__image-container">
        <img draggable={false} className="notify__image" src={data.usersList[0].image} alt="img" />
      </div>
      <div className={`notify__body ${active === index && "active"} `}>
        <div className="notify__image-body-container">
          <img draggable={false} className="notify__image-body" src={data.usersList[1].image} alt="img" />
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
  const [active, setActive] = useState(0)

  return (
    <section className="notify__container">
      <div className="notify__container-inner">
        <NotifyCard index={0} active={active} setActive={setActive}/>
        <NotifyCard index={1} active={active} setActive={setActive}/>
        <NotifyCard index={2} active={active} setActive={setActive}/>
      </div>
    </section>
  );
};

export default AllNotificationPage;
