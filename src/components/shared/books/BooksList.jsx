import { Box } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
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

export const BooksList = ({
  isOnlyFavoriteProducts,
  isLoading,
  setIsLoading,
}) => {
  const dispatch = useDispatch();

  const productsList = useSelector(productListSelector);
  const searchResult = useSelector(productsBySearchResultSelector);
  const searchQuery = useSelector(productsSearchQuerySelector);
  const cartProductIds = useSelector(cartProductsIdsSelector);
  const favoriteProductsIds = useSelector(favoritesProductsIdsSelector);
  const favoriteProducts = useSelector(favoritesProductsSelector);

  useEffect(async () => {
    dispatch(getProductsAsync({ pageNumber: 1 }));

    await dispatch(getUserCartAsync());
    dispatch(getCartProductsCountsAsync());

    dispatch(getUserFavoritesAsync());
    dispatch(getFavoriteProductsAsync());
    dispatch(getFavoriteProductsIdsAsync());
    setIsLoading(false);
  }, []);

  const products = searchQuery ? searchResult : productsList;
  const books = isOnlyFavoriteProducts ? favoriteProducts : products;

  const renderBooks = () =>
    books.length ? (
      books.map((product) => (
        <BookCard
          key={product.id}
          {...product}
          inCart={cartProductIds?.includes(product.id.toString())}
          isFavorite={favoriteProductsIds?.includes(product.id)}
        />
      ))
    ) : (
      <NotFound />
    );

  const renderLoader = () => <Spinner />;

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, 500px)"
      justifyContent="center"
      marginTop="20px"
    >
      {isLoading ? renderLoader() : renderBooks()}
    </Box>
  );
};

BooksList.propTypes = {
  isOnlyFavoriteProducts: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
};
