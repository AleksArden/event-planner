import ButtonBar from 'components/ButtonBar/ButtonBar';
import EventContainer from 'components/EventContainer/EventContainer';

import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <ButtonBar />
      <h2 className={styles.title}>My events</h2>
      <EventContainer />
    </div>
  );
};
export default HomePage;
