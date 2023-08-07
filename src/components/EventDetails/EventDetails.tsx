import { getEventFromFirestore } from '../../firebase/getEvent';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { EventWithoutId } from 'types/event';
import styles from './EventDetails.module.scss';

const EventDetails = () => {
  const [event, setEvent] = useState<EventWithoutId | undefined>();
  const date = event?.selectDate.split('/').splice(0, 2).join('.');
  const { eventId } = useParams<{ eventId?: string }>();

  useEffect(() => {
    const fetchData = async () => {
      if (eventId !== undefined) {
        const data = await getEventFromFirestore(eventId);
        setEvent(data);
      }
    };
    fetchData();
  }, [eventId]);
  return (
    <>
      <p className={styles.title}>{event?.title}</p>
      <div className={styles.container}>
        <img className={styles.img} src={event?.imageURL} alt="Event" />
        <div className={styles.wrapper}>
          <p className={styles.description}>{event?.description}</p>
          <div className={styles.wrapperCity}>
            <p className={styles.city}>{event?.city}</p>
          </div>
          <div className={styles.wrapperDate}>
            <p className={styles.date}>
              {date} at {event?.selectTime}
            </p>
          </div>
          <div className={styles.wrapperBtn}>
            <button className={styles.edit} type="button">
              Edit
            </button>
            <button className={styles.delete} type="button">
              Delete event
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default EventDetails;
