import PropTypes from 'prop-types';
import { Card, Box } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useCardStyles } from './Styles';

const BookCard = ({ id, title, img, description }) => {
  const classes = useCardStyles();

  const onStarClick = (e) => {
    e.preventDefault();
  };

  const onAddShoppingClick = (e) => {
    e.preventDefault();
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
                className={classes.star}
              >
                <StarBorderIcon />
              </button>

              <button onClick={onAddShoppingClick} type="submit">
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
};

BookCard.defaultProps = {
  id: 0,
  title: '',
  img: 'https://lh3.googleusercontent.com/proxy/XgsMFIqpIMxdeD_RgJsJL_lkzixtkvXdpBfLKmyvbPjS6p7qqQPomn9mIjo9iVM1BgPvBB4GJWTfqRr41j30U2hM6IuLrriOIwPHRW67r9Id8nhj81HC69OPdzxzofaP4EbDy5z69_2jsvMhXFb_dS6WvgjuITI7',
  description: '',
};

export { BookCard };
