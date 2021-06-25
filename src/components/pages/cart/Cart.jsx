import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import {
  Grid,
  Typography,
  Divider,
  Button,
  Container,
} from '@material-ui/core';
import { CartItem } from './CartItem';
import { useStyle } from './Styles';
import {
  cartProductsSelector,
  cartProductsTotalSelector,
} from '../../../store/selectors/cart-selector';
import {
  createOrderAsync,
  getCartProductsAsync,
  getUserCartAsync,
} from '../../../store/slices/cart-slice';

export const Cart = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const cartProducts = useSelector(cartProductsSelector);
  const cartTotal = useSelector(cartProductsTotalSelector);

  useEffect(async () => {
    await dispatch(getUserCartAsync());
    dispatch(getCartProductsAsync());
  }, []);

  const onCheckout = () => {
    dispatch(createOrderAsync(cartProducts));
  };

  const renderCart = (
    <>
      <Grid className={classes.cartContent}>
        {cartProducts.map((product) => (
          <CartItem className={classes.markdown} key={nanoid()} {...product} />
        ))}
      </Grid>
      <Grid container item justify="flex-end">
        <Typography component="h6" variant="h4" gutterBottom>
          Total:
          {' '}
          {cartTotal}
        </Typography>
      </Grid>
      <Grid container item justify="center">
        <Button
          className={classes.cartButton}
          color="primary"
          size="large"
          variant="contained"
          onClick={onCheckout}
        >
          Checkout
        </Button>
      </Grid>
    </>
  );

  return (
    <Container>
      <Typography align="center" variant="h6" gutterBottom>
        Cart
      </Typography>
      <Divider />
      {cartProducts.length ? (
        renderCart
      ) : (
        <Grid>
          <Typography component="h6" variant="h4" gutterBottom>
            Корзина пуста
          </Typography>
          <NavLink to="/">Вернуться к покупкам</NavLink>
        </Grid>
      )}
    </Container>
  );
};
