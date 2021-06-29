/* eslint-disable */
import { Helmet } from 'react-helmet';
import Fromdetail from './newdetail';
import { Box } from '@material-ui/core';

const Adddetail = () => {

    return (
        <>
          <Helmet>
            <title>AddDetail | Material Kit</title>
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
            <Fromdetail />
        </>
    );
};

export default Adddetail;