import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toast, { Toaster } from "react-hot-toast";

const initialValue = {
  email: "",
  password: "",
};
const validate_shema = Yup.object().shape({
  email: Yup.string().email("Enter valid email address").required("Required"),
  password: Yup.string().required("Required").min(7, "Password must be longer"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSumbit = (value, action) => {
    dispatch(login(value))
      .unwrap()
      .catch(() => toast.error("Sorry, no such user exists"));
    action.resetForm();
  };
  return (
    <div>
      <h2>Login form</h2>
      <Formik
        initialValues={initialValue}
        onSubmit={handleSumbit}
        validationSchema={validate_shema}
      >
        <Form className={style.form}>
          <label>
            Email
            <div>
              <Field name="email" />
              <ErrorMessage name="email" component="span" />
            </div>
          </label>
          <label>
            Password
            <div>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="span" />
            </div>
          </label>
          <div>
            <button type="submit">submit</button>
          </div>
        </Form>
      </Formik>
      <Toaster />
    </div>
  );
}
