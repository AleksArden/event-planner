import styles from './ButtonRemoveInput.module.scss';

const ButtonRemoveInput = () => {
  return (
    <button className={styles.button} type="button">
      <div className={styles.iconRemoveInput}></div>
    </button>
  );
};
export default ButtonRemoveInput;
