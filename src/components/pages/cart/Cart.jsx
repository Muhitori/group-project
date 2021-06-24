import { useEffect } from 'react';
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

export const Cart = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const cartProducts = useSelector(cartProductsSelector);
  const cartTotal = useSelector(cartProductsTotalSelector);

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
      {cartProducts.length ? renderCart : <Grid>Корзина пуста</Grid>}
    </Container>
  );
};
