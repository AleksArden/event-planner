import styles from './FormCreation.module.scss';

const FormCreation = () => {
  return (
    <form className={styles.form}>
      <label className={styles.label}>
        Title
        <input className={styles.input} />
      </label>
      <label className={styles.label}>
        Description
        <textarea className={styles.textarea} name="text"></textarea>
      </label>
    </form>
  );
};
export default FormCreation;
