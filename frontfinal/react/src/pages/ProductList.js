/* eslint-disable */
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Pagination
} from '@material-ui/core';
import ProductListToolbar from 'src/components/product/ProductListToolbar';
//import ProductCard from 'src/components/product//ProductCard';
import { ProdList } from 'src/__mocks__/products';

const ProductList = () => (
  <>
    <Helmet>
      <title>Products | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar />
      </Container>
      <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
          </Grid>
        </Box>
      <Container maxWidth={false}>
        <ProdList />
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

export default ProductList;
