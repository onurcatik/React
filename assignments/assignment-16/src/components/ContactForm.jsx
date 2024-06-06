import React, { useState, useEffect } from "react";
import useFormValidation from "./useFormValidation";

// Button styles
const BUTTON_STYLES = {
  default: "bg-indigo-500 hover:bg-indigo-600",
  error: "bg-red-500 hover:bg-red-600"
};

// Initial form state
const INITIAL_STATE = {
  name: "",
  email: "",
  message: ""
};

// Validation function
const validateForm = (values) => {
  const errors = {};
  if (!values.name) errors.name = "Name is required";
  if (!values.email) errors.email = "Email is required";
  if (!values.message) errors.message = "Message is required";
  return errors;
};

// Form field component
const FormField = ({ label, type, name, value, onChange, error }) => (
  <div className="relative mb-4">
    <label htmlFor={name} className="leading-7 text-sm text-gray-600">
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
      ></textarea>
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    )}
    {error && <span className="text-red-500 text-sm">{error}</span>}
  </div>
);

const ContactForm = () => {
  const [buttonState, setButtonState] = useState({
    text: "Submit",
    style: BUTTON_STYLES.default
  });

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useFormValidation(
    INITIAL_STATE,
    validateForm
  );

  useEffect(() => {
    if (isSubmitting) {
      setButtonState({
        text: "Fill your data properly",
        style: BUTTON_STYLES.error
      });
      const timer = setTimeout(() => {
        setButtonState({
          text: "Submit",
          style: BUTTON_STYLES.default
        });
      }, 2000);
      return () => clearTimeout(timer); // Clean up timeout on unmount
    }
  }, [isSubmitting]);

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            We value your feedback and look forward to hearing from you.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <FormField
                label="Name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                error={errors.name}
              />
            </div>
            <div className="p-2 w-1/2">
              <FormField
                label="Email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>
            <div className="p-2 w-full">
              <FormField
                label="Message"
                type="textarea"
                name="message"
                value={values.message}
                onChange={handleChange}
                error={errors.message}
              />
            </div>
            <div className="p-2 w-full">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`flex mx-auto text-white ${buttonState.style} border-0 py-2 px-8 focus:outline-none rounded text-lg`}
              >
                {buttonState.text}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
