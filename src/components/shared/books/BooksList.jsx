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
  const [isLoading, setisLoading] = useState(true);

  const dispatch = useDispatch();

  const products = useSelector(productListSelector);
  const searchResult = useSelector(productsBySearchResultSelector);
  const searchQuery = useSelector(productsSearchQuerySelector);
  const cartProductIds = useSelector(cartProductsIdsSelector);
  const favoriteProductsIds = useSelector(favoritesProductsIdsSelector);

  useEffect(async () => {
    await dispatch(getProductsAsync({ pageNumber: 1 }));

    await dispatch(getUserCartAsync());
    await dispatch(getCartProductsIdsAsync());
    await dispatch(getUserFavoritesAsync());
    await dispatch(getFavoriteProductsIdsAsync());
    await dispatch(getProductsAsync({ pageNumber: 1 }));
    setisLoading(false);
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
      <BookCard
        key={product.id}
        {...product}
        inCart={cartProductIds?.includes(product.id)}
        isFavorite={favoriteProductsIds?.includes(product.id)}
      />
    ));
  };

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, 500px)"
      justifyContent="center"
      marginTop="20px"
    >
      {isLoading ? <Spinner /> : getProductCards()}
    </Box>
  );
};
