import React from 'react';
import { useFormik } from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      phone: '',
    },
    validate: (values) => {
      console.log('validate', values);

      const errors = {};

      if (values.phone === '') {
        errors.phone = "Phone can't empty";
      } else if (!/^[0-9]{10}$/.test(values.phone)) {
        errors.phone = 'Phone invalid';
      }

      return errors;
    },
    onSubmit: (values) => {
      console.log('You are submit', values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="phone_id">Phone number</label>
        <br />
        <input
          id="phone_id"
          name="phone"
          values={formik.values.phone}
          onChange={formik.handleChange}
        />
        <p style={{ color: 'red' }}>{formik.errors.phone}</p>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
