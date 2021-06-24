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

const testData = [
  {
    id: 998,
    title: 'Local Impression Input',
    price: 685,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis tellus vel libero sagittis finibus dapibus.',
    img: 'https://unsplash.it/1280/720?image=747',
    category: 'Humor',
  },
  {
    id: 999,
    title: 'Fuzzy Weakness Come',
    price: 460,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis tellus vel libero sagittis finibus dapibus.',
    img: 'https://unsplash.it/1280/720?image=853',
    category: 'Children',
  },
];

export const Cart = () => {
  const classes = useStyle();

  return (
    <Container>
      <Typography align="center" variant="h6" gutterBottom>
        Cart
      </Typography>
      <Divider />
      <Grid className={classes.cartContent}>
        {testData.map((post) => (
          <CartItem className={classes.markdown} key={nanoid()}>
            {post}
          </CartItem>
        ))}
      </Grid>
      <Grid container item justify="flex-end">
        <Typography component="h6" variant="h4" gutterBottom>Total: $1000</Typography>
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
