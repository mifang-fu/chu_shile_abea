/* eslint-disable */
import {
  Box,
  Button,
  Card,
  Link,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { Search, Search as SearchIcon } from 'react-feather';
import { Link as RouterLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "src/Context";


  const CustomerListToolbar = (props) => {
    return(
  <Box {...props}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <Button>
        Import
      </Button>
      <Button sx={{ mx: 1 }}>
        Export
      </Button>
      <Link
        component={RouterLink}
        to="/Addsale"
        variant="h6"
      >
        <Button
          color="primary"
          variant="contained"
        >
          Add sale
        </Button>
      </Link>
    </Box>
  </Box>
    );
  };

export default CustomerListToolbar;
