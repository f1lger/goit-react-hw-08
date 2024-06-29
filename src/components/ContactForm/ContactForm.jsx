import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const initialValues = {
  name: "",
  number: "",
};

const validation_schema = Yup.object().shape({
  name: Yup.string().required("Required").min(3, "Name must be longer"),
  number: Yup.string().required("Required").min(3, "Number must be longer"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const handleSubmit = (value, action) => {
    dispatch(addContact({ ...value }))
      .unwrap()
      .then(() => {`You have successfully added a user `;})
      .catch(() => {"Something was wrong";});
    action.resetForm();
  };

  return (
    <div>
      <h2>Contacts</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validation_schema}
        onSubmit={handleSubmit}
      >
        <Form className={style.form}>
          <label>
            Name
            <Field name="name" />
            <ErrorMessage name="name" component="span" />
          </label>
          <label>
            Number
            <Field name="number" />
            <ErrorMessage name="number" component="span" />
          </label>
          <div>
            <button type="submit">add contact</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
