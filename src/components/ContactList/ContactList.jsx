import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  console.log(contacts);
  const contactsRedux = useSelector((state) => state.contacts);
  console.log(contactsRedux);
  // return (
  //   <ul className={css.list}>
  //     {contacts.map((contact) => (
  //       <li className={css.item} key={contact.id}>
  //         <Contact data={contact} onDelete={onDelete} />
  //       </li>
  //     ))}
  //   </ul>
  // );
  return (
    <ul className={css.list}>
      {contactsRedux.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
