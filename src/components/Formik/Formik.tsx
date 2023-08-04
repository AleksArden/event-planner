import { useFormik } from 'formik';
import ButtonRemoveInput from 'components/ButtonRemoveInput/ButtonRemoveInput';
import styles from './Formik.module.scss';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

const Formik = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      selectDate: '',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <label htmlFor="title" className={styles.label}>
        Title
        <input
          className={styles.input}
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <ButtonRemoveInput />
      </label>

      <label className={styles.label} htmlFor="description">
        Description
        <textarea
          rows={5}
          className={styles.textarea}
          id="description"
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        <ButtonRemoveInput />
      </label>

      <label className={styles.label} htmlFor="selectDate">
        Select date
        {/* <input
          className={styles.input}
          id="selectDate"
          name="selectDate"
          type="date"
          onChange={formik.handleChange}
          value={formik.values.selectDate}
        /> */}
        <DatePicker
          className={styles.selectDate}
          selected={startDate}
          onChange={date => setStartDate(date)}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};
export default Formik;
