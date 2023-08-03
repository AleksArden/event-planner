import styles from './AppBar.module.scss';

const AppBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Event Planner</h1>
        <div className={styles.lang}></div>
      </div>
    </header>
  );
};
export default AppBar;
