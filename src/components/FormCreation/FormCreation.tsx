import React, { useState } from 'react';
import { useFormik } from 'formik';
import ButtonRemoveInput from 'components/ButtonRemoveInput/ButtonRemoveInput';
import styles from './FormCreation.module.scss';
import SelectDate from 'components/SelectDate/SelectDate';
import ButtonSelect from 'components/ButtonSelect/ButtonSelect';
import { format } from 'date-fns';
import SelectTime from 'components/SelectTime/SelectTime';
import { addDataToFirestore } from 'firebase/addData';
import { Event } from 'types/evnt';

const FormCreation = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [isOpenTime, setIsOpenTime] = useState(false);
  const [chooseDate, setChooseDate] = useState('');
  console.log(isOpenDate);
  console.log(isOpenTime);

  const handleChangeDate = (date: Date) => {
    setChooseDate(format(date, 'dd/MM/yyyy'));
    setStartDate(date);
  };
  const handleChooseDate = () => {
    formik.setFieldValue('selectDate', chooseDate);
    setIsOpenDate(!isOpenDate);
  };
  const hahdleCancel = () => {
    formik.setFieldValue('selectDate', '');
    setIsOpenDate(!isOpenDate);
  };
  const handleChangeTime = (time: Date) => {
    setIsOpenTime(!isOpenTime);
    const result = format(time, 'h:mm aa');
    formik.setFieldValue('selectTime', result);
  };
  const handleClickDate = (evt: React.MouseEvent) => {
    evt.preventDefault();
    setIsOpenDate(!isOpenDate);
  };
  const handleClickTime = (evt: React.MouseEvent) => {
    evt.preventDefault();
    setIsOpenTime(!isOpenTime);
  };
  const initialValues: Event = {
    title: '',
    description: '',
    selectDate: '',
    selectTime: '',
  };
  const formik = useFormik({
    initialValues,

    onSubmit: values => {
      addDataToFirestore(values);
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
        <ButtonSelect onClick={handleClickDate} isOpen={isOpenDate} />
        {isOpenDate && (
          <SelectDate
            onChange={handleChangeDate}
            selected={startDate}
            onClickCancel={hahdleCancel}
            onClickChooseDate={handleChooseDate}
          />
        )}
      </label>
      <label className={styles.label} htmlFor="selectTime">
        Select time
        <input
          className={styles.input}
          id="selectTime"
          name="selectTime"
          readOnly
          value={formik.values.selectTime}
        />
        <ButtonSelect onClick={handleClickTime} isOpen={isOpenTime} />
        {isOpenTime && <SelectTime onChange={handleChangeTime} />}
      </label>
      <button className={styles.button} type="submit">
        Add event
      </button>
    </form>
  );
};
export default FormCreation;
