import { Button } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { useStyle } from './Styles';

export const BooksControls = ({
  isOnlyFavoriteProducts,
  setOnlyFavoriteProducts,
}) => {
  const classes = useStyle();

  const onOnlyFavoritesClick = (e) => {
    e.preventDefault();
    setOnlyFavoriteProducts(!isOnlyFavoriteProducts);
  };

  return (
    <div className={classes.booksControls}>
      <Button
        variant="contained"
        className={isOnlyFavoriteProducts ? classes.isOnlyFavorites : null}
        onClick={onOnlyFavoritesClick}
      >
        Show only favorites
      </Button>
    </div>
  );
};

BooksControls.propTypes = {
  isOnlyFavoriteProducts: PropTypes.bool.isRequired,
  setOnlyFavoriteProducts: PropTypes.func.isRequired,
};
