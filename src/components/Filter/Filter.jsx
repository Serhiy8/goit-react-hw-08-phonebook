import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import css from './Filter.module.css';

const FilterByName = () => {
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div className={css.filterContainer}>
      <TextField
        id="FindByName"
        label="Find by name"
        type="text"
        //   name="userMail"
        size="small"
        onChange={changeFilter}
      />
    </div>
  );
};

export default FilterByName;
