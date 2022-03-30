import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import "./Auth.css";

const LoginForm = () => {
  const [rememberAccount, setRememberAccount] = useState<boolean>(false);

  const toggleRememberAccount = () => {
    setRememberAccount((prev) => !prev);
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {
            email: "",
            password: "",
          };
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <div className="mb-1">Email</div>
              <div className="relative">
                <Field
                  className="auth-field"
                  type="email"
                  name="email"
                  placeholder="Email address.."
                />
                <i className="fa-solid fa-at auth-field-icon"></i>
              </div>
              <ErrorMessage
                className="auth-field-error"
                name="email"
                component="div"
              />
            </div>
            <div className="mb-3">
              <div className="mb-1">Password</div>
              <div className="relative">
                <Field
                  className="auth-field"
                  placeholder="Password.."
                  type="password"
                  name="password"
                />
                <i className="fa-solid fa-lock auth-field-icon"></i>
              </div>
              <ErrorMessage
                className="auth-field-error"
                name="password"
                component="div"
              />
            </div>
            <div className="w-full text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r shadow-md from-slate-600 rounded-xl to-slate-500 text-center absolute -bottom-5 left-1/2 -translate-x-1/2 w-3/4 py-1.5"
              >
                <span className="text-lg font-medium text-white">Login</span>
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="flex justify-between text-sm text-slate-300 pt-2 pb-6">
        <div className="flex items-center" onClick={toggleRememberAccount}>
          <div className="h-4 w-4 border-[1px] flex items-center justify-center border-slate-500 bg-slate-600 rounded-sm shadow-sm">
            {rememberAccount && <i className="fa-solid fa-check"></i>}
          </div>
          <div className="ml-1">Remember account</div>
        </div>
        <div>Forgot password?</div>
      </div>
    </div>
  );
};

export default LoginForm;
