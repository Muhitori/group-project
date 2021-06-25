import { Box } from '@material-ui/core';
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
import { favoritesProductsIdsSelector } from '../../../store/selectors/favorites-selector';
import {
  getFavoriteProductsIdsAsync,
  getUserFavoritesAsync,
} from '../../../store/slices/favorites-slice';

export const BooksList = () => {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const products = useSelector(productListSelector);
  const searchResult = useSelector(productsBySearchResultSelector);
  const searchQuery = useSelector(productsSearchQuerySelector);
  const cartProductIds = useSelector(cartProductsIdsSelector);
  const favoriteProductsIds = useSelector(favoritesProductsIdsSelector);

  useEffect(async () => {
    dispatch(getProductsAsync({ pageNumber: 1 }));

    await dispatch(getUserCartAsync());
    dispatch(getCartProductsCountsAsync());

    dispatch(getUserFavoritesAsync());
    dispatch(getFavoriteProductsIdsAsync());
    setIsLoading(false);
  }, []);

  const pageProd = searchQuery ? searchResult : products;

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
            inCart={cartProductIds?.includes(product.id.toString())}
            isFavorite={favoriteProductsIds?.includes(product.id)}
          />
        ))
      ) : (
        <NotFound />
      )}
    </Box>
  );
};
