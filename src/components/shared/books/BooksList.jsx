import { Box } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookCard } from './BookCard';
import { getProductsAsync } from '../../../store/slices/product-slice';
import {
  productListSelector,
  productsBySearchSelector,
  productsSearchQuerySelector,
} from '../../../store/selectors/product-selector';
import { tokenSelector } from '../../../store/selectors/auth-selector';
import { Spinner } from '../loader/loader';
import { NotFound } from '../../pages/notFound/NotFound';

export const BooksList = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const products = useSelector(productListSelector);
  const searchResult = useSelector(productsBySearchSelector);
  const searchQuery = useSelector(productsSearchQuerySelector);
  const token = useSelector(tokenSelector);

  useEffect(async () => {
    await dispatch(getProductsAsync({ token }));
    setLoading(false);
  }, []);

  const getProductCards = () => {
    if (searchQuery) {
      if (!searchResult.length) {
        return <NotFound />;
      }
      return searchResult.map((product) => (
        <BookCard key={product.id} {...product} />
      ));
    }
    return products.map((product) => (
      <BookCard key={product.id} {...product} />
    ));
  };

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, 500px)"
      justifyContent="center"
      marginTop="20px"
    >
      {loading ? <Spinner /> : getProductCards()}
    </Box>
  );
};
