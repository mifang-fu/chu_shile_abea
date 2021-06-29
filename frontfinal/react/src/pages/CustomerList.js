/* eslint-disable */
import { Helmet } from 'react-helmet';
import { Box, Container,Grid,Pagination } from '@material-ui/core';
//import CustomerListResults from 'src/components/customer/CustomerListResults';
import CustomerListToolbar from 'src/components/customer/CustomerListToolbar';
import SaleList from 'src/__mocks__/customers';
import { useState, useContext } from "react";
import { AppContext } from "src/Context";

const CustomerList = () => {
  const {selectsale}=useContext(AppContext);
    const[search,setSearch]= useState('');
    const gettext =(e,field) =>{
      setSearch({
        ...search,
        [field]: e.target.value, 
      });
    
    const o={};
    o.orderid=e.target.value;
    selectsale(o);
    console.log(o);
    };
  return(
  <>
    <Helmet>
      <title>Sale | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '10%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
      <CustomerListToolbar />
      </Container>
    </Box>
    <Container maxWidth={false}>
      <SaleList />
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
  </>
  )
};

export default CustomerList;
