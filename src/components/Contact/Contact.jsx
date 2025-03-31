import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <div>
        <div className={css.wrapper}>
          <BsFillPersonFill />
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.wrapper}>
          <BsFillTelephoneFill />
          <p className={css.text}>{number}</p>
        </div>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
