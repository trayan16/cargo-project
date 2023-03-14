import {
  Button,
  DialogActions,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { AxiosError } from "axios";
import { Form, Formik } from "formik";
import { useState } from "react";
import { object, string } from "yup";
import { ILoginProps, login } from "../../services/auth-service";

interface LoginFormProps {
  setOpenDialog: (value: boolean) => void;
}
const validationSchema = object({
  email: string().required("Username is required"),
  password: string().required("Password is required"),
});
export const LoginForm: React.FC<LoginFormProps> = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const handleLogin = async (values: ILoginProps) => {
    try {
      await login({...values});
    } catch (error: any) {
      if (error instanceof AxiosError) {
        console.log(error, "AXIOS ERROR");
        if(error.response) {
          const { message } = error.response?.data;
          setErrorMessage(message);
          return;
        }
        setErrorMessage(error.message)
        return;
      }
      setErrorMessage("Server not responding");
      return;
    }
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      enableReinitialize
      onSubmit={async (values) => {
        handleLogin(values);
      }}
    >
      {({ values, handleChange, touched, handleBlur, errors }) => (
        <Form autoComplete="off">
          <Grid container spacing={4}>
            <Grid item xs={12} md={12}>
              <TextField
                size="small"
                InputLabelProps={{ shrink: true }}
                fullWidth
                id="email"
                name="email"
                label="Username"
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                InputLabelProps={{ shrink: true }}
                type="password"
                size="small"
                fullWidth
                id="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                label="Password"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
            </Grid>
          </Grid>
          <Typography color="red">{errorMessage}</Typography>
          <DialogActions>
            <Button
              variant="contained"
              type="submit"
              autoFocus
              onClick={() => {}}
            >
              Login
            </Button>
          </DialogActions>
        </Form>
      )}
    </Formik>
  );
};
