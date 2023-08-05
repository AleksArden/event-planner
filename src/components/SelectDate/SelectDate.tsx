import DatePicker from 'react-datepicker';
import styles from './SelectDate.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
interface IProps {
  onChange: (evt: Date) => void;
  selected: Date;
  onClickCancel: () => void;
  onClickChooseDate: () => void;
}
const SelectDate = ({
  onChange,
  selected,
  onClickCancel,
  onClickChooseDate,
}: IProps) => {
  return (
    <DatePicker
      allowSameDay={true}
      onChange={onChange}
      inline
      selected={selected}
    >
      <button
        onClick={onClickCancel}
        className={styles.buttonCancel}
        type="button"
      >
        Cancel
      </button>
      <button
        onClick={onClickChooseDate}
        className={styles.buttonChooseDate}
        type="button"
      >
        Choose date
      </button>
    </DatePicker>
  );
};
export default SelectDate;
