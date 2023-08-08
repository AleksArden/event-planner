import styles from './ButtonRemoveInput.module.scss';
interface IProps {
  onClick: () => void;
}
const ButtonRemoveInput = ({ onClick }: IProps) => {
  return (
    <button onClick={onClick} className={styles.button} type="button">
      <div className={styles.iconRemoveInput}></div>
    </button>
  );
};
export default ButtonRemoveInput;
