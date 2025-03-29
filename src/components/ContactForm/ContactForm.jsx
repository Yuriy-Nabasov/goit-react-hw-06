import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { addNewContact } from "../../redux/store";
import { useDispatch } from "react-redux";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Must be min 3 chars")
    .max(50, "Must be 50 characters or less")
    .required("This field is required"),
  number: Yup.string()
    .matches(/[0-9,-]{7}/, "Phone number incorrect!")
    .required("This field is required"),
});

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    const newContact = { id: nanoid(), ...values };
    onAdd(newContact);
    actions.resetForm();
  };
  // Рефакторінг
  const dispatch = useDispatch();
  const handleAddNewContact = (values, actions) => {
    const newContact = { id: nanoid(), ...values };
    console.log(newContact);
    dispatch(addNewContact(newContact));
    actions.resetForm();
  };
  // /Рефакторінг
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      // onSubmit={handleSubmit}
      onSubmit={handleAddNewContact}
    >
      <Form className={css.form}>
        <div className={css.group}>
          <label className={css.label}>Name</label>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.group}>
          <label className={css.label}>Number</label>
          <Field className={css.input} type="text" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
