import { useEffect, useState } from 'react';

import styles from './EventContainer.module.scss';
import firebase_app from '../../firebase/config';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { EventWithId } from 'types/event';
import EventItem from 'components/EventItem/EventItem';

const db = getFirestore(firebase_app);

const EventContainer = () => {
  const [events, setEvents] = useState<any>();
  console.log(events);
  const getAllEvents = () => {
    onSnapshot(collection(db, 'event-planner'), data => {
      if (data) {
        setEvents(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      }
    });
  };
  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <ul className={styles.container}>
      {events?.map((event: EventWithId) => {
        console.log(event);
        return <EventItem key={event.id} event={event} />;
      })}
    </ul>
  );
};
export default EventContainer;
