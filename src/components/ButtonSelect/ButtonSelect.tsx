import styles from './ButtonSelect.module.scss';

interface IProps {
  onClick?: (evt: React.MouseEvent) => void;
  isOpen?: boolean;
}
const ButtonSelect = ({ onClick, isOpen }: IProps) => {
  return (
    <button onClick={onClick} className={styles.button} type="button">
      {isOpen ? (
        <div className={styles.iconUpSmall}></div>
      ) : (
        <div className={styles.iconDownSmall}></div>
      )}
    </button>
  );
};
export default ButtonSelect;
