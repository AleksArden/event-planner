import DatePicker from 'react-datepicker';

interface IProps {
  onChange: (time: Date) => void;
}

const SelectTime = ({ onChange }: IProps) => {
  return (
    <DatePicker
      onChange={onChange}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={5}
      inline
      dateFormat="Pp"
    />
  );
};
export default SelectTime;
