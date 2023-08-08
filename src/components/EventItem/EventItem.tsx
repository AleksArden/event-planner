import { useLocation, Link } from 'react-router-dom';
import { EventWithId } from 'types/event';

import styles from './EventItem.module.scss';

interface IProps {
  event: EventWithId;
}

const EventItem = ({ event }: IProps) => {
  const location = useLocation();
  const { title, description, selectDate, selectTime, city, imageURL, id } =
    event;
  const date = selectDate.split('/').splice(0, 2).join('.');
  const time = selectTime.split(' ').splice(0, 1);

  return (
    <li className={styles.item}>
      <img className={styles.img} src={imageURL} alt="Event" />
      <div className={styles.wrapperTitle}>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.wrapperText}>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.wrapperOpacity}>
        <p className={styles.text}>
          {date} at {time}
        </p>
        <p className={styles.text}>{city}</p>
      </div>
      <div className={styles.wrapperBtn}>
        <Link
          to={`/events/${id}`}
          className={styles.button}
          state={{ from: location }}
        >
          More info
        </Link>
      </div>
    </li>
  );
};
export default EventItem;
