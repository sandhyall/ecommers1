'use client'
import React from 'react';
import { Input, Button } from '@nextui-org/react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';

// Validation Schema
const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
});

const Newspaper = () => {
  return (
    <div className=" flex items-center justify-center p-4 bg-pink-200">
      <div className="w-full  bg-white p-8 ss ">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Get Exclusive Offers on Your Email</h1>
        <p className="text-center text-gray-600 mb-6">Subscribe to our newsletter and stay updated</p>

        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            alert(`Subscribed with email: ${values.email}`);
            // Replace with actual submission logic
          }}
        >
          {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="space-y-4 text-center">
              <div className="relative text-center">
                <Field
                  as={Input}
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  status={errors.email && touched.email ? 'error' : 'default'}
                  className="mb-2"
                />
                {errors.email && touched.email && (
                  <div className="text-sm text-red-600">{errors.email}</div>
                )}
              </div>

              <Button type="submit" fullWidth color="primary" className='text-black rounded-lg shadow-lg bg-red-400'>
                Subscribe Now
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Newspaper;
