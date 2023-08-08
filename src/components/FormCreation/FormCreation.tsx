import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { format } from 'date-fns';

import { addEventToFirestore } from '../../firebase/addEvent';
import { uploadPhotoToStorage } from '../../firebase/uploadPhotoToStorage';
import { EventWithoutId } from 'types/event';

import SelectDate from 'components/SelectDate/SelectDate';
import ButtonSelect from 'components/ButtonSelect/ButtonSelect';
import SelectTime from 'components/SelectTime/SelectTime';

import styles from './FormCreation.module.scss';

const FormCreation = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [isOpenTime, setIsOpenTime] = useState(false);
  const [chooseDate, setChooseDate] = useState('');
  const [imageURL, setImageURL] = useState('');

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

  const handleChangeImage = async (
    evt: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (evt.target.files !== null) {
      const file = evt.target.files[0];
      const imageURL = await uploadPhotoToStorage(file);
      if (imageURL) {
        setImageURL(imageURL);
        formik.setFieldValue('imageURL', imageURL);
      }
    }
  };

  const initialValues: EventWithoutId = {
    title: '',
    description: '',
    selectDate: '',
    selectTime: '',
    city: '',
    imageURL: '',
  };

  const formik = useFormik({
    initialValues,

    validationSchema: Yup.object({
      title: Yup.string()
        .min(3, 'Too short!')
        .max(50, 'Too long!')
        .required('Title required'),

      description: Yup.string()
        .min(30, 'Too short!')
        .max(300, 'Too long!')
        .required('Description required'),

      selectDate: Yup.string().nullable().required('Date required'),

      selectTime: Yup.string().required('Time required'),

      city: Yup.string()
        .min(3, 'Too short!')
        .max(50, 'Too long!')
        .required('Time required'),

      imageURL: Yup.string().required('Be sure to include an image'),
    }),

    onSubmit: (values, { setSubmitting }) => {
      addEventToFirestore(values);
      setSubmitting(false);

      navigate('/', { replace: true });
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <div className={styles.labelWrapper}>
        <label htmlFor="title" className={styles.label}>
          Title
          <input
            className={
              formik.touched.title && formik.errors.title
                ? styles.inputError
                : styles.input
            }
            id="title"
            name="title"
            placeholder="Title"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <button
            onClick={() => formik.setFieldValue('title', '')}
            className={styles.buttonIcon}
            type="button"
          >
            {formik.touched.title && formik.errors.title ? (
              <div className={styles.iconRemoveInputError}></div>
            ) : (
              <div className={styles.iconRemoveInputPlaceholder}></div>
            )}
          </button>
          {formik.touched.title && formik.errors.title ? (
            <div className={styles.error}>{formik.errors.title}</div>
          ) : null}
        </label>

        <label className={styles.label} htmlFor="description">
          Description
          <textarea
            rows={5}
            className={
              formik.touched.description && formik.errors.description
                ? styles.textareaError
                : styles.textarea
            }
            id="description"
            name="description"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          <button
            onClick={() => formik.setFieldValue('description', '')}
            className={styles.buttonIcon}
            type="button"
          >
            {formik.touched.description && formik.errors.description ? (
              <div className={styles.iconRemoveInputError}></div>
            ) : (
              <div className={styles.iconRemoveInputPlaceholder}></div>
            )}
          </button>
          {formik.touched.description && formik.errors.description ? (
            <div className={styles.error}>{formik.errors.description}</div>
          ) : null}
        </label>

        <label className={styles.label} htmlFor="selectDate">
          Select date
          <input
            className={
              formik.touched.selectDate && formik.errors.selectDate
                ? styles.inputError
                : styles.input
            }
            id="selectDate"
            name="selectDate"
            onBlur={formik.handleBlur}
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
          {formik.touched.selectDate && formik.errors.selectDate ? (
            <div className={styles.error}>{formik.errors.selectDate}</div>
          ) : null}
        </label>

        <label className={styles.label} htmlFor="selectTime">
          Select time
          <input
            className={
              formik.touched.selectTime && formik.errors.selectTime
                ? styles.inputError
                : styles.input
            }
            id="selectTime"
            name="selectTime"
            onBlur={formik.handleBlur}
            readOnly
            value={formik.values.selectTime}
          />
          <ButtonSelect onClick={handleClickTime} isOpen={isOpenTime} />
          {isOpenTime && <SelectTime onChange={handleChangeTime} />}
          {formik.touched.selectTime && formik.errors.selectTime ? (
            <div className={styles.error}>{formik.errors.selectTime}</div>
          ) : null}
        </label>

        <label htmlFor="category" className={styles.label}>
          Category
          <input
            className={styles.input}
            id="category"
            name="category"
            onBlur={formik.handleBlur}
            readOnly
          />
          <ButtonSelect />
        </label>

        <label htmlFor="city" className={styles.label}>
          Location
          <input
            className={
              formik.touched.city && formik.errors.city
                ? styles.inputError
                : styles.input
            }
            id="city"
            name="city"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.city}
          />
          <button
            onClick={() => formik.setFieldValue('city', '')}
            className={styles.buttonIcon}
            type="button"
          >
            {formik.touched.city && formik.errors.city ? (
              <div className={styles.iconRemoveInputError}></div>
            ) : (
              <div className={styles.iconRemoveInputPlaceholder}></div>
            )}
          </button>
          {formik.touched.city && formik.errors.city ? (
            <div className={styles.error}>{formik.errors.city}</div>
          ) : null}
        </label>

        <label htmlFor="imageURL" className={styles.label}>
          Add picture
          <div
            className={
              formik.touched.imageURL && formik.errors.imageURL
                ? styles.wrapperError
                : styles.wrapper
            }
          >
            <p className={styles.text}>{imageURL}</p>
          </div>
          <input
            className={styles.inputNone}
            id="imageURL"
            name="imageURL"
            type="file"
            onBlur={formik.handleBlur}
            onChange={handleChangeImage}
          />
          <button
            onClick={() => setImageURL('')}
            className={styles.buttonIcon}
            type="button"
          >
            {formik.touched.imageURL && formik.errors.imageURL ? (
              <div className={styles.iconRemoveInputError}></div>
            ) : (
              <div className={styles.iconRemoveInputPlaceholder}></div>
            )}
          </button>
          {formik.touched.imageURL && formik.errors.imageURL ? (
            <div className={styles.error}>{formik.errors.imageURL}</div>
          ) : null}
        </label>

        <label htmlFor="priority" className={styles.label}>
          Priority
          <input
            className={styles.input}
            id="priority"
            name="priority"
            onBlur={formik.handleBlur}
            readOnly
          />
          <ButtonSelect />
        </label>
      </div>
      <div className={styles.btnWrapper}>
        <button className={styles.button} type="submit">
          Add event
        </button>
      </div>
    </form>
  );
};
export default FormCreation;
