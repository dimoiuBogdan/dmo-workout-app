import { ErrorMessage, Field, Form, Formik } from "formik";
import "./Auth.css";

const RegisterForm = () => {
  return (
    <div className="pb-4">
      <Formik
        initialValues={{
          email: "",
          password: "",
          fullName: "",
          weight: null,
          height: null,
        }}
        validate={(values) => {
          const errors = {
            fullName: "",
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
          if (!values.fullName) {
            errors.fullName = "Required";
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
              <div className="mb-1">Full Name</div>
              <div className="relative">
                <Field
                  className="auth-field"
                  placeholder="Full name.."
                  name="fullName"
                />
                <i className="fa-solid fa-user auth-field-icon"></i>
              </div>
              <ErrorMessage
                className="auth-field-error"
                name="fullName"
                component="div"
              />
            </div>
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
            <div className="mb-3 flex justify-between">
              <div className="w-[45%]">
                <div className="mb-1">Weight</div>
                <div className="relative">
                  <Field
                    className="auth-field"
                    placeholder="Weight.."
                    type="number"
                    name="weight"
                  />
                  <i className="fa-solid fa-weight-scale auth-field-icon"></i>
                </div>
              </div>
              <div className="w-[45%]">
                <div className="mb-1">Height</div>
                <div className="relative">
                  <Field
                    className="auth-field"
                    placeholder="Height.."
                    type="number"
                    name="height"
                  />
                  <i className="fa-solid fa-arrows-up-down auth-field-icon"></i>
                </div>
              </div>
            </div>
            <div className="w-full text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r shadow-md from-slate-600 rounded-xl to-slate-500 text-center absolute -bottom-5 left-1/2 -translate-x-1/2 w-3/4 py-1.5"
              >
                <span className="text-lg font-medium text-white">Register</span>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
