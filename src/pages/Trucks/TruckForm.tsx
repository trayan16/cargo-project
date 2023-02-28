import * as React from "react";
import { object, string } from "yup";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {Form, Formik } from "formik";
import { Grid } from "@mui/material";
import { ITruck } from ".";
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
  let validationSchema = object({
    plateNumber: string().required("Plate number is required"),
    status: string().required(),
  });
  const truckValues: ITruck = {};
  return (
      <Formik
        validationSchema={validationSchema}
        enableReinitialize
        innerRef={formRef}
        initialValues={truckValues}
        onSubmit={async (values) => {
          handleSubmit(values);
        }}
      >
        {({
            values,
            handleChange,
            handleBlur,
            touched,
            errors,
          }) => (
        <Form autoComplete='off'>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <TextField
                InputLabelProps={{ shrink: true }}
                fullWidth
                id="plateNumber"
                name="plateNumber"
                label="Plate Number"
                value={values.plateNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.plateNumber && Boolean(errors.plateNumber)}
                helperText={touched.plateNumber && errors.plateNumber}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Select
                fullWidth
                id="status"
                name="status"
                label="Status"
                value={values.status}
                onChange={handleChange}
                error={touched.status && Boolean(errors.status)}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} md={6}>
              <Select
                fullWidth
                id="status"
                name="status"
                label="Status"
                value={values.status}
                onChange={handleChange}
                error={touched.status && Boolean(errors.status)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Select
                  fullWidth
                  id="status"
                  name="status"
                  label="Status"
                  value={values.status}
                  onChange={handleChange}
                  error={touched.status && Boolean(errors.status)}
                />
            </Grid>
          </Grid>
        </Form>
        )}
      </Formik>
      
  );
};
