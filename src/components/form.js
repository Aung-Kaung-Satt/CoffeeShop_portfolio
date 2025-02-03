import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";

const Contactform = () => {
    const [showNotification, setShowNotification] = useState(false);
  return (
    <div className=" w-full max-w-md px-8 pt-6 pb-8 mb-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Send us Message</h1>
      <Formik
        initialValues={{ name: "", phone: "", email: "", message: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.phone) {
            errors.phone = "Required";
          } else if (!/^(0\d{1,4}-\d{1,4}-\d{4}|\d{10,11})$/.test(values.phone)) {
            errors.phone = "Invalid phone number";
          }
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.message) {
            errors.message = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);
        }}
      >
        {({ isSubmitting, errors}) => (
          <Form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-xs italic mt-2"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Contact Phone Number
              </label>
              <Field
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-xs italic mt-2"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.email  ? "border-red-500" : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs italic mt-2"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <Field
                as="textarea"
                name="message"
                id="message"
                placeholder="Enter your message"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                rows="4"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-xs italic mt-2"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {showNotification && (
          <div className="absolute top-0 right-0 mb-6 mr-6 bg-green-500 text-white text-sm px-4 py-2 rounded shadow-lg transform transition-transform -translate-x-6 opacity-100">
            Thank you for sending your message!
          </div>
        )}
    </div>
  );
};
export default Contactform;
