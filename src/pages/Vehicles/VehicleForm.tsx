import * as React from "react";
import { object, string } from "yup";
import TextField from "@mui/material/TextField";
import { Form, Formik } from "formik";
import { Button, Grid, MenuItem } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Divider from "@mui/material/Divider";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { VehicleStatus } from "../../utils";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
interface VehicleFormProps {
  handleToggleOpen?: () => void;
  handleSubmit: (values: any) => void;
  open?: boolean;
  formRef: any;
}
export const VehicleForm: React.FC<VehicleFormProps> = ({
  formRef,
  handleSubmit,
}) => {
  let validationSchema = object({
    plateNumber: string().required("Plate number is required"),
    status: string().required(),
  });
  const vehicleValues = {
    vin: "",
    status: "",
    stockNumber: "",
    expectedDate: "",
    auction: "",
    keys: false,
    user: "",
    description: "",
    destination: "",
    loadingTerminal: "",
    container: "",
    auctionLocation: "",
  };
  return (
    <Formik
      validationSchema={validationSchema}
      enableReinitialize
      innerRef={formRef}
      initialValues={vehicleValues}
      onSubmit={async (values: any) => {
        handleSubmit(values);
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        setFieldValue,
        touched,
        errors,
      }) => (
        <Form autoComplete="off">
          <Divider variant="fullWidth">Main Information</Divider>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <TextField
                size="small"
                InputLabelProps={{ shrink: true }}
                fullWidth
                id="vin"
                name="vin"
                label="Vin"
                value={values.vin}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.vin && Boolean(errors.vin)}
                helperText={touched.vin && errors.vin}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={<Checkbox style={{
                  transform: "scale(1.2)",
              }} size="medium" defaultChecked />}
                label="Keys Present"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                multiline
                size="small"
                fullWidth
                id="description"
                name="description"
                label="Description"
                value={values.description}
                onChange={handleChange}
              ></TextField>
            </Grid>
          </Grid>
          <Divider variant="fullWidth">Auction Information</Divider>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <TextField
                size="small"
                fullWidth
                id="auction"
                name="auction"
                label="Auction"
                value={values.auction}
                onChange={handleChange}
                error={touched.auction && Boolean(errors.auction)}
              ></TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                size="small"
                fullWidth
                id="auctionLocation"
                name="auctionLocation"
                label="Auction Location"
                value={values.auctionLocation}
                onChange={handleChange}
                error={touched.auctionLocation && Boolean(errors.auctionLocation)}
              ></TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                size="small"
                fullWidth
                id="stockNumber"
                name="stockNumber"
                label="Stock Number"
                value={values.stockNumber}
                onChange={handleChange}
                error={touched.stockNumber && Boolean(errors.stockNumber)}
              ></TextField>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                select
                size="small"
                fullWidth
                id="status"
                name="status"
                label="Status"
                value={values.status}
                onChange={handleChange}
                error={touched.status && Boolean(errors.status)}
              >
                {(
                  Object.keys(VehicleStatus) as Array<
                    keyof typeof VehicleStatus
                  >
                ).map((key) => {
                  return <MenuItem value={key}>{VehicleStatus[key]}</MenuItem>;
                })}
              </TextField>
            </Grid>
          </Grid>
          <Divider variant="fullWidth">Shipping Information</Divider>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <TextField
                size="small"
                fullWidth
                id="destination"
                name="destination"
                label="Destination"
                value={values.destination}
                onChange={handleChange}
              ></TextField>
            </Grid>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid item xs={12} md={6}>
                <DesktopDatePicker
                  label="Expected date"
                  inputFormat="MM/DD/YYYY"
                  value={values.expectedDate}
                  onChange={(value) => {
                    setFieldValue("expectedDate", value);
                  }}
                  renderInput={(params) => (
                    <TextField fullWidth size="small" {...params} />
                  )}
                />
                {/* <MobileDatePicker
                  label="Expected date"
                  inputFormat="MM/DD/YYYY"
                  value={values.expectedDate}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                /> */}
              </Grid>
            </LocalizationProvider>
            <Grid item xs={12} md={6}>
              <TextField
                size="small"
                fullWidth
                id="container"
                name="container"
                label="Container"
                value={values.container}
                onChange={handleChange}
              ></TextField>
            </Grid>
            <Grid item xs={12} md={6}>
                <Button variant="contained" component="label">
                  Upload Documents
                  <input type="file" hidden />
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button variant="contained" component="label">
                  Upload Images
                  <input type="file" hidden />
                </Button>
              </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};
