import { useLocation, Link } from 'react-router-dom';
import styles from './ButtonBack.module.scss';

const ButtonBack = () => {
  const location = useLocation();
  return (
    <Link to={location?.state?.from ?? '/'} className={styles.link}>
      <div className={styles.iconArrow}></div>
      <span className={styles.back}>Back</span>
    </Link>
  );
};
export default ButtonBack;
