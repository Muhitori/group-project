import PropTypes from 'prop-types';
import { Card, Box } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useCardStyles } from './Styles';
import { toggleFavoriteProductAsync } from '../../../store/slices/favorites-slice';
import { toggleCartProductAsync } from '../../../store/slices/cart-slice';
import { IMG_PLACEHOLDER } from '../../../utils/constants';

const BookCard = ({ id, title, img, description, inCart, isFavorite }) => {
  const classes = useCardStyles();

  const dispatch = useDispatch();

  const onStarClick = (e) => {
    e.preventDefault();
    dispatch(toggleFavoriteProductAsync({ productId: id }));
  };

  const onAddShoppingClick = (e) => {
    e.preventDefault();
    dispatch(toggleCartProductAsync({ productId: id }));
  };

  const onDeleteClick = (e) => {
    e.preventDefault();
  };

  return (
    <Link to={`books/${id}`}>
      <Card className={classes.root} variant="outlined">
        <Box className={classes.footer}>
          <div>
            <h1 className={classes.name}>{title}</h1>
            <img src={img} alt="book" className={classes.image} />
            <p className={classes.description}>{description}</p>
          </div>

          <div className={classes.cardButtons}>
            <div>
              <button
                type="submit"
                onClick={onStarClick}
                className={`${classes.star} ${
                  isFavorite ? classes.isFavorite : null
                }`}
              >
                <StarBorderIcon />
              </button>

              <button
                className={inCart ? classes.inCart : null}
                onClick={onAddShoppingClick}
                type="submit"
              >
                <AddShoppingCartIcon />
              </button>
            </div>
            <div className="rightButtonsComposition">
              <button onClick={onDeleteClick} type="submit">
                <DeleteIcon />
              </button>
            </div>
          </div>
        </Box>
      </Card>
    </Link>
  );
};

BookCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  inCart: PropTypes.bool,
  isFavorite: PropTypes.bool,
};

BookCard.defaultProps = {
  id: 0,
  title: '',
  img: IMG_PLACEHOLDER,
  description: '',
  inCart: false,
  isFavorite: false,
};

export { BookCard };
