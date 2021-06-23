import { Box } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookCard } from './BookCard';
import { getProductsAsync } from '../../../store/slices/product-slice';
import { productListSelector } from '../../../store/selectors/product-selector';
import { Spinner } from '../loader/loader';
import {
  getCartProductsIdsAsync,
  getUserCartAsync,
} from '../../../store/slices/cart-slice';
import { cartProductsIdsSelector } from '../../../store/selectors/cart-selector';
import { favoritesProductsIdsSelector } from '../../../store/selectors/favorites-selector';
import {
  getFavoriteProductsIdsAsync,
  getUserFavoritesAsync,
} from '../../../store/slices/favorites-slice';

export const BooksList = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const products = useSelector(productListSelector);
  const cartProductIds = useSelector(cartProductsIdsSelector);
  const favoriteProductsIds = useSelector(favoritesProductsIdsSelector);

  useEffect(async () => {
    await dispatch(getProductsAsync());

    await dispatch(getUserCartAsync());
    await dispatch(getCartProductsIdsAsync());

    await dispatch(getUserFavoritesAsync());
    await dispatch(getFavoriteProductsIdsAsync());
    setLoading(false);
  }, []);

  const productCards = products.map((product) => (
    <BookCard
      key={product.id}
      {...product}
      inCart={cartProductIds?.includes(product.id)}
      isFavorite={favoriteProductsIds?.includes(product.id)}
    />
  ));

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, 500px)"
      justifyContent="center"
      marginTop="20px"
    >
      {loading ? <Spinner /> : productCards}
    </Box>
  );
};
