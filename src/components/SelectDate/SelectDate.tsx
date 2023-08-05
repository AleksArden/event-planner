import DatePicker from 'react-datepicker';
// import styles from './SelectDate.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
interface IProps {
  onChange: (evt: Date) => void;
}
const SelectDate = ({ onChange }: IProps) => {
  return (
    <DatePicker
      // className={styles.selectDate}

      allowSameDay={true}
      dateFormat={'dd/MM/yyyy'}
      onChange={onChange}
      inline
    />
  );
};
export default SelectDate;
