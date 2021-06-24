import { Box } from '@material-ui/core';
import { PropTypes } from 'prop-types';
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
import {
  favoritesProductsIdsSelector,
  favoritesProductsSelector,
} from '../../../store/selectors/favorites-selector';
import {
  getFavoriteProductsAsync,
  getFavoriteProductsIdsAsync,
  getUserFavoritesAsync,
} from '../../../store/slices/favorites-slice';

export const BooksList = ({ isOnlyFavoriteProducts }) => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const products = useSelector(productListSelector);
  const cartProductIds = useSelector(cartProductsIdsSelector);
  const favoriteProductsIds = useSelector(favoritesProductsIdsSelector);
  const favoriteProducts = useSelector(favoritesProductsSelector);

  useEffect(async () => {
    dispatch(getProductsAsync({ pageNumber: 1 }));

    dispatch(getUserCartAsync());
    dispatch(getCartProductsIdsAsync());

    dispatch(getUserFavoritesAsync());
    dispatch(getFavoriteProductsAsync());
    dispatch(getFavoriteProductsIdsAsync());
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

  const favoriteProductsCards = favoriteProducts.map((product) => (
    <BookCard
      key={product.id}
      {...product}
      inCart={cartProductIds?.includes(product.id)}
      isFavorite={favoriteProductsIds?.includes(product.id)}
    />
  ));

  const prodProducts = isOnlyFavoriteProducts
    ? favoriteProductsCards
    : productCards;

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, 500px)"
      justifyContent="center"
      marginTop="20px"
    >
      {loading ? <Spinner /> : prodProducts}
    </Box>
  );
};

BooksList.propTypes = {
  isOnlyFavoriteProducts: PropTypes.bool.isRequired,
};
