import { Box } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookCard } from './BookCard';
import { getProductsAsync } from '../../../store/slices/product-slice';
import {
  productListSelector,
  productsBySearchResultSelector,
  productsSearchQuerySelector,
} from '../../../store/selectors/product-selector';
import { Spinner } from '../loader/loader';
import { NotFound } from '../../pages/notFound/NotFound';
import {
  getCartProductsCountsAsync,
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
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const products = useSelector(productListSelector);
  const searchResult = useSelector(productsBySearchResultSelector);
  const searchQuery = useSelector(productsSearchQuerySelector);
  const cartProductIds = useSelector(cartProductsIdsSelector);
  const favoriteProductsIds = useSelector(favoritesProductsIdsSelector);
  const favoriteProducts = useSelector(favoritesProductsSelector);

  useEffect(async () => {
    await dispatch(getProductsAsync({ pageNumber: 1 }));

    await dispatch(getUserCartAsync());
    await dispatch(getCartProductsCountsAsync());

    dispatch(getUserCartAsync());
    dispatch(getCartProductsIdsAsync());

    dispatch(getUserFavoritesAsync());
    dispatch(getFavoriteProductsAsync());
    dispatch(getFavoriteProductsIdsAsync());

    setIsLoading(false);
  }, []);

  const unFavoriteProducts = searchQuery ? searchResult : products;
  const pageProd = isOnlyFavoriteProducts ? favoriteProducts : unFavoriteProducts;

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, 500px)"
      justifyContent="center"
      marginTop="20px"
    >
      {isLoading ? (
        <Spinner />
      ) : pageProd.length ? (
        pageProd.map((product) => (
          <BookCard
            key={product.id}
            {...product}
            inCart={cartProductIds?.includes(product.id)}
            isFavorite={favoriteProductsIds?.includes(product.id)}
          />
        ))
      ) : (
        <NotFound />
      )}
    </Box>
  );
};

BooksList.propTypes = {
  isOnlyFavoriteProducts: PropTypes.bool.isRequired,
};
