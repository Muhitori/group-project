import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  TextField,
} from '@material-ui/core';
import { useStyle } from './Styles';
import {
  changeProductCountAsync,
  getCartProductsAsync,
  removeFromCartAsync,
} from '../../../store/slices/cart-slice';

export const CartItem = ({ id, title, description, price, img, count }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const onDelete = async () => {
    await dispatch(removeFromCartAsync({ productId: id }));
    dispatch(getCartProductsAsync());
  };

  const onChangeCount = async ({ target }) => {
    await dispatch(changeProductCountAsync({ productId: id, count: +target.value }));
    dispatch(getCartProductsAsync());
  };

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.cardMedia} image={img} title={title} />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Grid container className={classes.cardActionsContent}>
          <Typography
            className={classes.productPrice}
            align="right"
            variant="h6"
          >
            Price:
            {price * count}
          </Typography>
          <TextField
            className={classes.cardActionsField}
            size="small"
            id="filled-number"
            label="Books count"
            type="number"
            defaultValue={count}
            variant="outlined"
            InputProps={{
              inputProps: {
                min: 1,
              },
            }}
            onChange={onChangeCount}
          />
          <Button
            className={classes.cardActionsField}
            color="secondary"
            size="large"
            variant="contained"
            onClick={onDelete}
          >
            Delete
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
};

CartItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
  count: PropTypes.number,
};

CartItem.defaultProps = {
  id: 0,
  title: '',
  description: '',
  price: 0,
  img: '',
  count: 1,
};
