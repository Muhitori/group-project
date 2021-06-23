import PropTypes from 'prop-types';
import { Card, Box } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCardStyles } from './styles';
import { tokenSelector } from '../../../store/selectors/auth-selector';
import { toggleFavoriteProductAsync } from '../../../store/slices/favorites-slice';
import { toggleCartProductAsync } from '../../../store/slices/cart-slice';

const BookCard = ({ id, title, img, description, inCart, isFavorite }) => {
  const classes = useCardStyles();

  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);

  const onStarClick = (e) => {
    e.preventDefault();
    dispatch(toggleFavoriteProductAsync({ productId: id, token }));
  };

  const onAddShoppingClick = (e) => {
    e.preventDefault();
    dispatch(toggleCartProductAsync({ productId: id, token }));
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
  img: '',
  description: '',
  inCart: false,
  isFavorite: false,
};

export { BookCard };
