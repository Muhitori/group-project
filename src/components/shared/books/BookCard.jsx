import PropTypes from 'prop-types';
import { Card, Box } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ShareIcon from '@material-ui/icons/Share';
import { NavLink } from 'react-router-dom';
import { useCardStyles } from './styles';

// eslint-disable-next-line object-curly-newline
const BookCard = ({ id, title, img, description, url }) => {
  const classes = useCardStyles();

  return (
    <NavLink to={`books/${id}`}>
      <Card className={classes.root} variant="outlined">
        <Box className={classes.footer}>
          <div>
            <h1 className={classes.name}>{title}</h1>
            <img src={img} alt="book" className={classes.image} />
            <p className={classes.description}>{description}</p>
          </div>

          <div className={classes.cardButtons}>
            <div>
              <button type="submit" className={classes.star}>
                <StarBorderIcon />
              </button>

              <button type="submit">
                <ShareIcon />
              </button>
            </div>
            <div className="rightButtonsComposition">
              <button type="submit">
                <DeleteIcon />
              </button>
            </div>
          </div>
        </Box>
      </Card>
    </NavLink>
  );
};

BookCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};

BookCard.defaultProps = {
  id: 0,
  title: '',
  img: '',
  description: '',
  url: 'http://localhost:3010/books',
};

export { BookCard };
