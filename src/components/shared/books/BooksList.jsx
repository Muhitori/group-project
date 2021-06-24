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
// import { productListSelector } from '../../../store/selectors/product-selector';
// import { Spinner } from '../loader/loader';
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
  const searchResult = useSelector(productsBySearchSelector);
  const searchQuery = useSelector(productsSearchQuerySelector);
  const token = useSelector(tokenSelector);
  const cartProductIds = useSelector(cartProductsIdsSelector);
  const favoriteProductsIds = useSelector(favoritesProductsIdsSelector);

  useEffect(async () => {
    await dispatch(getProductsAsync());
    await dispatch(getUserCartAsync());
    await dispatch(getCartProductsIdsAsync());
    await dispatch(getUserFavoritesAsync());
    await dispatch(getFavoriteProductsIdsAsync());
    await dispatch(getProductsAsync({ pageNumber: 1 }));
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
      <BookCard
        key={product.id}
        {...product}
        inCart={cartProductIds?.includes(product.id)}
        isFavorite={favoriteProductsIds?.includes(product.id)}
      />
    ));
  };
  // const productCards = products.map((product) => (
  //   <BookCard
  //     key={product.id}
  //     {...product}
  //     inCart={cartProductIds?.includes(product.id)}
  //     isFavorite={favoriteProductsIds?.includes(product.id)}
  //   />
  // ));

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
