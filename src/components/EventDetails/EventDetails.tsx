import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getEventFromFirestore } from '../../firebase/getEvent';
import { EventWithoutId } from 'types/event';
import { deleteEventFromFirestore } from '../../firebase/deleteEvent';

import styles from './EventDetails.module.scss';

const EventDetails = () => {
  const navigate = useNavigate();
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
  const handleDelete = async () => {
    if (eventId !== undefined) {
      await deleteEventFromFirestore(eventId);
      navigate('/', { replace: true });
    }
  };
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
            <button
              onClick={handleDelete}
              className={styles.delete}
              type="button"
            >
              Delete event
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default EventDetails;
