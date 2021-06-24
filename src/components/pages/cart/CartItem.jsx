import React from 'react';
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

export const CartItem = ({ id, title, description, price, img }) => {
  const classes = useStyle();
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
            {price}
          </Typography>
          <TextField
            className={classes.cardActionsField}
            size="small"
            id="filled-number"
            label="Books count"
            type="number"
            defaultValue="1"
            variant="outlined"
            InputProps={{
              inputProps: {
                min: 1,
              },
            }}
          />
          <Button
            className={classes.cardActionsField}
            color="secondary"
            size="large"
            variant="contained"
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
};

CartItem.defaultProps = {
  id: 0,
  title: '',
  description: '',
  price: 0,
  img: '',
};
