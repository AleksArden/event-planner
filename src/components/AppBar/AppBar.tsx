import Lang from 'components/Lang/Lang';
import SearchBar from 'components/SearchBar/SearchBar';
import styles from './AppBar.module.scss';

const AppBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Event Planner</h1>
          <Lang />
        </div>
        <SearchBar />
      </div>
    </header>
  );
};
export default AppBar;
