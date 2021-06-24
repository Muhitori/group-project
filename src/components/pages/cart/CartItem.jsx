import React from 'react';
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

export const CartItem = () => {
  const classes = useStyle();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image="https://source.unsplash.com/random"
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          Heading
        </Typography>
        <Typography>
          This is a media card. You can use this section to describe the
          content.
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Grid container className={classes.cardActionsContent}>
          <Typography
            className={classes.productPrice}
            align="right"
            variant="h6"
          >
            Price: $50
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
