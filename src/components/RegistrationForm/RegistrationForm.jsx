import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast, { Toaster } from "react-hot-toast";

const initialValue = {
  name: "",
  email: "",
  password: "",
};
const validate_shema = Yup.object().shape({
  name: Yup.string().required("Required").min(2, "Name must be longer"),
  email: Yup.string().email("Enter valid email address").required("Required"),
  password: Yup.string().required("Required").min(7, "Password must be longer"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (value, action) => {
    dispatch(register(value))
      .unwrap()
      .catch(() => toast.error("Oops, such a user already exists"));
    action.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
        validationSchema={validate_shema}
      >
        <Form className={style.form}>
          <label>
            Name
            <div>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="span" />
            </div>
          </label>
          <label>
            Email
            <div>
              <Field type="text" name="email" />
              <ErrorMessage name="email" component="span" />
            </div>
          </label>
          <label>
            Password
            <div>
              <Field type="text" name="password" />
              <ErrorMessage name="password" component="span" />
            </div>
          </label>
          <div>
            <button type="submit">submit</button>
          </div>
        </Form>
      </Formik>
      <Toaster position="top-center" />
    </div>
  );
}
