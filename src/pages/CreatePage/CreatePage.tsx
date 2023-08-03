import ButtonBack from 'components/ButtonBack/ButtonBack';
import FormCreation from 'components/FormCreation/FormCreation';
import styles from './CreatePage.module.scss';

const CreatePage = () => {
  return (
    <div className={styles.container}>
      <ButtonBack />
      <h2 className={styles.title}>Create new event</h2>
      <FormCreation />
    </div>
  );
};
export default CreatePage;
