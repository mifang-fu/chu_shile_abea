/* eslint-disable */
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Pagination,
  Link,
  Button
} from '@material-ui/core';
import { Detail } from 'src/__mocks__/detail';
import { Link as RouterLink} from "react-router-dom";

const DetailList = () => (
  <>
    <Helmet>
      <title>sale detail | Material Kit</title>
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
        <Button>
          Import
        </Button>
        <Button sx={{ mx: 1 }}>
          Export
        </Button>
        <Link
          component={RouterLink}
          to="/Adddetail"
          variant="h6"
        >
          <Button
            color="primary"
            variant="contained"
          >
            Add detail
          </Button>
        </Link>
        <Link
       component={RouterLink}
       to="/app/customers"
       variant="h6"
      >
        <Button
            color="secondary"
            type="submit"
            variant="contained"
            fullWidth
        >
            SALE
        </Button>
    </Link>
      </Box>
        <Detail />
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
);

export default DetailList;
