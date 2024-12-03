import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';
const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.searchBox}>
      <label className={s.label} htmlFor="">
        Find contacts by name
        <input
          className={s.input}
          type="text"
          name="userName"
          onChange={() => dispatch(changeFilter(event.target.value))}
        />
      </label>
    </div>
  );
};
export default SearchBox;
