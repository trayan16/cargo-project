import { Button, DialogActions, Grid, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import axiosIntance from "../../axiosInstance";
import { useUser } from "../../hooks/useUser";

function parseJwt (token: string) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}
interface LoginFormProps {
    handleDialogClose: () => void;
}
const validationSchema = object({
    email: string().required("Username is required"),
    password: string().required("Password is required"),
  });
export const LoginForm: React.FC<LoginFormProps> = ({handleDialogClose}) => {
  const handleClose = (event: {}, reason: "backdropClick" | "escapeKeyDown") => {
    //setOpen(false);
  };
  const {login} = useUser();
  const handleLogin = async (values: any) => {
    try {
      const response = await axiosIntance.post<{accessToken: string}>('/auth/signin', {...values});
      const {accessToken} = response.data;
      login(parseJwt(accessToken))
      window.location.reload();
      console.log(parseJwt(accessToken), "PARSED")
    } catch (error: any) {
      console.log(error.response); // this is the main part. Use the response property from the error object
  
      return error.response;
    }

  }
  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validationSchema}
      enableReinitialize
      onSubmit={async (values) => {
        handleLogin(values)
      }}
    >

      {({
        values,
        handleChange,
        touched,
        handleBlur,
        errors,
      }) => (

        <Form autoComplete='off'>
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
          <DialogActions>
          <Button variant="contained" type="submit" autoFocus onClick={() => {}}>
            Login
          </Button>
        </DialogActions>
        </Form>
      )}
    </Formik>
  );
};
