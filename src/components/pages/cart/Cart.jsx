import { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
  getCartProductsAsync,
  getUserCartAsync,
} from '../../../store/slices/cart-slice';
import { CheckoutForm } from './form/CheckoutForm';

export const Cart = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();
  const cartProducts = useSelector(cartProductsSelector);
  const cartTotal = useSelector(cartProductsTotalSelector);

  const toggleOpen = () => {
    history.push('/cart/checkout');
  };

  useEffect(async () => {
    await dispatch(getUserCartAsync());
    await dispatch(getCartProductsAsync());
  }, []);

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
          onClick={toggleOpen}
        >
          Checkout
        </Button>
      </Grid>
      <CheckoutForm toggleOpen={toggleOpen} />
    </>
  );

  return (
    <Container>
      <Typography align="center" variant="h4" gutterBottom>
        Cart
      </Typography>
      <Divider />
      {cartProducts.length ? (
        renderCart
      ) : (
        <Grid container item class={classes.emptyMessage}>
          <Typography component="h5" variant="h6" gutterBottom>
            Корзина пуста
          </Typography>
          <NavLink to="/">Вернуться к покупкам</NavLink>
        </Grid>
      )}
    </Container>
  );
};
