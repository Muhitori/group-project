import PropTypes from 'prop-types';
import { Card, Box } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ShareIcon from '@material-ui/icons/Share';
import { Link } from 'react-router-dom';
import { useCardStyles } from './styles';

const BookCard = ({ id, title, img, description }) => {
  const classes = useCardStyles();

  const onStarClick = (e) => {
    e.preventDefault();
  };

  const onShareClick = (e) => {
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

              <button onClick={onShareClick} type="submit">
                <ShareIcon />
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
  img: '',
  description: '',
};

export { BookCard };
