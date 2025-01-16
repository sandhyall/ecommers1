'use client';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Card, CardBody, Input } from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

// Define validation schema with Yup
const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Handle password visibility toggle
  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  // Handle remember me checkbox
  const handleCheckboxChange = () => {
    setRememberMe(prevState => !prevState);
  };

  // Handle the form submission
  const handleSignup = async (values) => {
    setLoading(true);
    // Add logic to handle the signup process (e.g., API request)
    console.log(values);
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-lg p-6 m-4 shadow-lg bg-white text-black">
        <CardBody>
          <h1 className="text-2xl font-bold text-black text-center mb-6">Login</h1>

          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={handleSignup}
          >
            {({ errors, touched, handleChange, handleBlur }) => (
              <Form className="space-y-4 relative">
                {/* Username Input */}
                {/* <div className="relative">
                  <Field
                    as={Input}
                    name="Username"
                    type="text"
                    placeholder="Enter your username"
                    fullWidth
                    onChange={handleChange}
                    onBlur={handleBlur}
                    status={errors.Username && touched.Username ? 'error' : 'default'}
                  />
                  {errors.Username && touched.Username && (
                    <div className="text-sm text-red-600 mt-1">{errors.Username}</div>
                  )}
                </div> */}

                {/* Email Input */}
                <div className="relative">
                  <Field
                    as={Input}
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    fullWidth
                    onChange={handleChange}
                    onBlur={handleBlur}
                    status={errors.email && touched.email ? 'error' : 'default'}
                  />
                  {errors.email && touched.email && (
                    <div className="text-sm text-red-600 mt-1">{errors.email}</div>
                  )}
                </div>

                {/* Password Input */}
                <div className="relative">
                  <Field
                    as={Input}
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    fullWidth
                    onChange={handleChange}
                    onBlur={handleBlur}
                    status={errors.password && touched.password ? 'error' : 'default'}
                  />
                  {errors.password && touched.password && (
                    <div className="text-sm text-red-600 mt-1">{errors.password}</div>
                  )}
                  <Button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </div>

               

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-red-500 text-white"
                  disabled={loading}
                >
                  {loading ? 'Signing Up...' : 'Continous'}
                </Button>
              </Form>
            )}
          </Formik>

          {/* Link to Login page */}
          <p className="mt-4 text-center text-sm">
            Create a account?{' '}
            <Link href="/Signup" className="text-red-500 hover:underline">
              Click here.</Link>
          </p><br/>

           {/* "Remember Me" checkbox */}
           <div className="flex items-center">
                  <input
                    id="rememberme"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <label htmlFor="rememberme" className="cursor-pointer text-sm">
                    By Continuing,I agree to the term of uses & privacy policy
                  </label>
                </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Signup;
