import { useLocation, Link } from 'react-router-dom';

import styles from './ButtonBar.module.scss';

const ButtonBar = () => {
  const location = useLocation();

  return (
    <ul className={styles.container}>
      <li>
        <button className={styles.btnCategory} type="button">
          <span className={styles.nameCategory}>Business</span>
          <div className={styles.iconCategory}></div>
        </button>
      </li>
      <li>
        <button className={styles.btnSortBy} type="button">
          <span className={styles.nameSortBy}>Sort by</span>
          <div className={styles.iconSortBy}></div>
        </button>
      </li>
      <li>
        <Link
          className={styles.btnAdd}
          to="/create-new-event"
          state={{ from: location }}
        >
          <div className={styles.iconAdd}></div>
          <span className={styles.nameAdd}>Add new event</span>
        </Link>
      </li>
    </ul>
  );
};
export default ButtonBar;
