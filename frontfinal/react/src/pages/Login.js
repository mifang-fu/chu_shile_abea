/* eslint-disable */
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import FacebookIcon from 'src/icons/Facebook';
import GoogleIcon from 'src/icons/Google';
import { useContext, useState } from "react";
import { AppContext } from "src/Context";
import { setAuthToken } from "src/utils/utils";
import { login } from "src/webAPI";
//import Loginc from "src/components/account/logincheck"

const Login = () => {
  //const navigate = useNavigate();
  const [empid, setemp] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();

    const handleSubmit = (e) => {
      e.preventDefault();
      login(empid, password).then((data) => {
        // 若 ok 為 0 代表錯誤
        if (data.ok === 0) {
          return setErrorMessage(data.message);
        }
        // 成功的話就把 token 存到 localStorage
        setAuthToken(data.token);
      });
        alert(empid);
    };

    const handleemp = (e) => {
      setemp(e.target.value);
    };

    const handlePassword = (e) => {
      setPassword(e.target.value);
    };
  return (
    <>
      <Helmet>
        <title>Login | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Sign in
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Sign in on the internal platform
                  </Typography>
                </Box>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    item
                    xs={12}
                    md={6}
                  >
                    <Button
                      color="primary"
                      fullWidth
                      startIcon={<FacebookIcon />}
                      onClick={handleSubmit}
                      size="large"
                      variant="contained"
                    >
                      Login with Facebook
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                  >
                    <Button
                      fullWidth
                      startIcon={<GoogleIcon />}
                      onClick={handleSubmit}
                      size="large"
                      variant="contained"
                    >
                      Login with Google
                    </Button>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    pb: 1,
                    pt: 3
                  }}
                >
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                  >
                    or login with email address
                  </Typography>
                </Box>
                <TextField
                  fullWidth
                  label="ID"
                  margin="normal"
                  name="empid"
                  onChange={handleemp}
                  type="text"
                  value={empid}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Password"
                  margin="normal"
                  name="password"
                  onChange={handlePassword}
                  type="password"
                  value={password}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    onSubmit={()=><Loginc />}
                  >
                    Sign in now
                  </Button>
                </Box>
              </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;
