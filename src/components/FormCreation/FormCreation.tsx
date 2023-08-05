import React, { useState } from 'react';
import { useFormik } from 'formik';
import ButtonRemoveInput from 'components/ButtonRemoveInput/ButtonRemoveInput';
import styles from './FormCreation.module.scss';
import SelectDate from 'components/SelectDate/SelectDate';
import ButtonSelect from 'components/ButtonSelect/ButtonSelect';
import { format } from 'date-fns';

const FormCreation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (date: Date) => {
    setIsOpen(!isOpen);
    const result = format(date, 'dd/MM/yyyy');
    formik.setFieldValue('selectDate', result);
  };
  const handleClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    setIsOpen(!isOpen);
  };
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
        <input
          className={styles.input}
          id="selectDate"
          name="selectDate"
          readOnly
          value={formik.values.selectDate}
        />
        <ButtonSelect onClick={handleClick} isOpen={isOpen} />
        {isOpen && <SelectDate onChange={handleChange} />}
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};
export default FormCreation;
