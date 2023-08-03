import { useState } from 'react';

import styles from './SearchBar.module.scss';
const SearchBar = () => {
  const [value, setValue] = useState('');
  const handleSubmit = () => {};
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit"></button>
      <input
        className={styles.input}
        type="text"
        autoComplete="off"
        placeholder="Search by keywords"
        onChange={evt => setValue(evt.target.value)}
        value={value}
      />
    </form>
  );
};
export default SearchBar;
