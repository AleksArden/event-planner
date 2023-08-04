import ButtonRemoveInput from 'components/ButtonRemoveInput/ButtonRemoveInput';
import styles from './FormCreation.module.scss';

const FormCreation = () => {
  return (
    <form className={styles.form}>
      <label className={styles.label}>
        Title
        <input className={styles.input} />
        <ButtonRemoveInput />
      </label>
      <label className={styles.label}>
        Description
        <textarea className={styles.textarea} rows={5} name="text"></textarea>
        <ButtonRemoveInput />
      </label>
      <label className={styles.label}>
        Select date
        <input className={styles.input} type="date" />
      </label>
      <label className={styles.label}>
        Select time
        <input className={styles.input} type="time" />
      </label>
    </form>
  );
};
export default FormCreation;
