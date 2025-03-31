import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsSlice";
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

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values.name, values.number));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
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
