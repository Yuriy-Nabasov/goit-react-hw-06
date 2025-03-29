import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteAnyContact } from "../../redux/store";

export default function Contact({ data: { id, name, number }, onDelete }) {
  const dispatch = useDispatch();
  const handleDeleteAnyContact = (id) => {
    dispatch(deleteAnyContact({ id }));
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
      <button onClick={() => handleDeleteAnyContact(id)}>Delete</button>
      {/* <button onClick={() => onDelete(id)}>Delete</button> */}
    </div>
  );
}
