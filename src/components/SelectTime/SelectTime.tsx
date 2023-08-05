import DatePicker from 'react-datepicker';

// import 'react-datepicker/dist/react-datepicker.css';
interface IProps {
  onChange: (time: Date) => void;
}

const SelectTime = ({ onChange }: IProps) => {
  return (
    <DatePicker
      onChange={onChange}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={1}
      inline
      dateFormat="Pp"
    />
  );
};
export default SelectTime;
