import * as React from 'react';
import { object, string, number, date } from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
interface TruckFormProps {
    handleToggleOpen?: () => void;
    handleSubmit?: (value: any) => void;
    open?: boolean;
  }
export const TruckForm: React.FC<TruckFormProps> = () => {
  // let validationSchema = object({
  //   name: string().required(),
  //   age: number().required().positive().integer(),
  //   email: string().email(),
  //   website: string().url().nullable(),
  //   createdOn: date().default(() => new Date()),
  // });
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          InputLabelProps={{ shrink: true }}
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
                <Button color="primary" variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}