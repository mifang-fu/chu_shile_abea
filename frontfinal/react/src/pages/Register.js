/* eslint-disable */
import { Helmet } from 'react-helmet';
import {
  Box,
  Button,
  Container,
  Grid,
  Pagination,
  TextField,
  Input,
  Link,
  makeStyles
} from '@material-ui/core';
import All from 'src/components/customer/all';
import { useContext, useState } from "react";
import { AppContext } from "src/Context";
import { Link as RouterLink } from "react-router-dom";



const Register = () => {

  return(
    <>
    <Helmet>
      <title>ALL SALE | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
    <Container maxWidth={false}>
      </Container>
      <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
          </Grid>
        </Box>
      <Container maxWidth={false}>
      <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
       
      </Box>
      <All />
      </Container>
      <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Box>
      </>
  )
};

export default Register;
