import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number }, onDelete }) {
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
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
