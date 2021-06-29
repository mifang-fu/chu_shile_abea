/* eslint-disable */
import { Helmet } from 'react-helmet';
import FromSale from './newsale';
import { Box } from '@material-ui/core';

const Addsale = () => {

    return (
        <>
          <Helmet>
            <title>AddSale | Material Kit</title>
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
            <FromSale />
        </>
    );
};

export default Addsale;