import { useEffect, useState } from 'react';

import styles from './EventContainer.module.scss';
import firebase_app from '../../firebase/config';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { EventWithId } from 'types/event';

const db = getFirestore(firebase_app);

const EventContainer = () => {
  const [events, setEvents] = useState<any>();
  console.log(events);
  const getAllEvents = () => {
    onSnapshot(collection(db, 'event-planner'), data => {
      if (data) {
        setEvents(data.docs.map(doc => ({ ...doc.data(), eventId: doc.id })));
      } else {
        console.log('No such document!');
      }
    });
  };
  useEffect(() => {
    getAllEvents();
  }, []);
  return (
    <ul className={styles.container}>
      {events.map(
        ({
          data: {
            title,
            description,
            selectDate,
            selectTime,
            location,
            addPicture,
          },
          eventId,
        }: EventWithId) => (
          <li key={eventId}>
            <image />
          </li>
        )
      )}
    </ul>
  );
};
export default EventContainer;
