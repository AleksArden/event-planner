import { Event } from 'types/event';
import styles from './EventItem.module.scss';

interface IProps {
  event: Event;
}

const EventItem = ({ event }: IProps) => {
  const { title, description, selectDate, selectTime, location, addPicture } =
    event;
  const date = selectDate.split('/').splice(0, 2).join('.');
  const time = selectTime.split(' ').splice(0, 1);

  return (
    <li className={styles.item}>
      <img className={styles.img} src={addPicture} alt="Event" />
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
        <p className={styles.text}>{location}</p>
      </div>
    </li>
  );
};
export default EventItem;
