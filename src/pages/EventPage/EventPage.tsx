import ButtonBack from 'components/ButtonBack/ButtonBack';
import EventDetails from 'components/EventDetails/EventDetails';

import styles from './EventPage.module.scss';

const EventPage = () => {
  return (
    <div className={styles.container}>
      <ButtonBack />
      <EventDetails />
    </div>
  );
};
export default EventPage;
