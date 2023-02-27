import * as React from "react";
import { object, string, number, date } from "yup";
import TextField from "@mui/material/TextField";
import { Field, Form, Formik, useFormik } from "formik";
interface TruckFormProps {
  handleToggleOpen?: () => void;
  handleSubmit: (values: any) => void;
  open?: boolean;
  formRef: any;
}
export const TruckForm: React.FC<TruckFormProps> = ({
  formRef,
  handleSubmit,
}) => {
  // let validationSchema = object({
  //   name: string().required(),
  //   age: number().required().positive().integer(),
  //   email: string().email(),
  //   website: string().url().nullable(),
  //   createdOn: date().default(() => new Date()),
  // });
  return (
    <div>
      <Formik
        enableReinitialize
        innerRef={formRef}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          handleSubmit(values);
        }}
      >
        {({
            values,
            handleChange,
            touched,
            errors,
          }) => (
        <Form>
          <TextField
            InputLabelProps={{ shrink: true }}
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={values.password}
            onChange={handleChange}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />
        </Form>
        )}
      </Formik>
    </div>
  );
};
