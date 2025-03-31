import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.wrapper}>
      <p className={css.label}>Find contacts by name</p>
      <input type="text" onChange={handleFilterChange} />
    </div>
  );
}
