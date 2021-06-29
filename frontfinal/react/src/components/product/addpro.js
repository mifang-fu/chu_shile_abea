/* eslint-disable */
import { Helmet } from 'react-helmet';
import FromProd from './newproduct';
import { Box } from '@material-ui/core';

const Addpro = () => {

    return (
        <>
          <Helmet>
            <title>AddProduct | Material Kit</title>
          </Helmet>
          <Box
            sx={{
              backgroundColor: 'background.default',
              display: 'flex',
              flexDirection: 'column',
              height: '10%',
              justifyContent: 'center'
            }}
            >
            </Box>
            <FromProd />
        </>
    );
};

export default Addpro;