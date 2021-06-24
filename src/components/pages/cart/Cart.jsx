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
import { cartProductsSelector } from '../../../store/selectors/cart-selector';
import { getCartProductsAsync } from '../../../store/slices/cart-slice';

export const Cart = () => {
  const classes = useStyle();

  const dispatch = useDispatch();
  const cartProducts = useSelector(cartProductsSelector);
  useEffect(() => dispatch(getCartProductsAsync()));
  return (
    <Container>
      <Typography align="center" variant="h6" gutterBottom>
        Cart
      </Typography>
      <Divider />
      <Grid className={classes.cartContent}>
        {cartProducts.map((product) => (
          <CartItem className={classes.markdown} key={nanoid()} {...product} />
        ))}
      </Grid>
      <Grid container item justify="flex-end">
        <Typography component="h6" variant="h4" gutterBottom>
          Total: $1000
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
    </Container>
  );
};
