import ButtonBar from 'components/ButtonBar/ButtonBar';
import EventContainer from 'components/EventContainer/EventContainer';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <ButtonBar />
      <EventContainer />
    </div>
  );
};
export default HomePage;
