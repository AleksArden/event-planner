import { useLocation, Link } from 'react-router-dom';
import styles from './ButtonBar.module.scss';

const ButtonBar = () => {
  const location = useLocation();

  return (
    <ul className={styles.container}>
      <li>
        <button className={styles.white} type="button">
          <div className={styles.iconCategory}></div>
        </button>
      </li>
      <li>
        <button className={styles.white} type="button">
          <div className={styles.iconSortBy}></div>
        </button>
      </li>
      <li>
        <Link
          className={styles.purple}
          to="/create-new-event"
          state={{ from: location }}
        >
          <div className={styles.iconAdd}></div>
        </Link>
      </li>
    </ul>
  );
};
export default ButtonBar;
