import { useParams, useLocation, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import StarIcon from '@material-ui/icons/Star';
import ArrowBack from '@material-ui/icons/ArrowBack';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { currentProductSelector } from '../../../store/selectors/product-selector';
import { getProductByIdAsync } from '../../../store/slices/product-slice';
import { useCardStyles } from './styles';

export const BookDetailView = () => {
  const { id } = useParams();
  const location = useLocation();
  const history = useHistory();
  const classes = useCardStyles();

  const dispatch = useDispatch();
  const product = useSelector(currentProductSelector);

  useEffect(() => {
    dispatch(getProductByIdAsync({ id }));
  }, []);

  const onStarClick = (e) => {
    e.preventDefault();
  };

  const onAddShoppingClick = (e) => {
    e.preventDefault();
  };

  const onDeleteClick = (e) => {
    e.preventDefault();
  };
  const onBackClick = (e) => {
    e.preventDefault();
    if (location?.state?.from) {
      history.push(location.state.from);
    } else {
      history.push('/books');
    }
  };

  return (
    <div className={classes.wrap}>
      <IconButton className={classes.arrow} onClick={onBackClick}>
        <ArrowBack />
      </IconButton>
      <div className={classes.contentWrap}>
        <div className={classes.pictureWrap}>
          <img src={product.img} alt="book" className={classes.image} />
        </div>
        <div className={classes.descriptoinWrap}>
          <h1 className={classes.name}>{product.title}</h1>
          <p className={classes.description}>{product.description}</p>
          <div className={classes.cardButtons}>
            <div>
              <IconButton onClick={onStarClick}>
                <StarIcon />
              </IconButton>
              <IconButton onClick={onAddShoppingClick}>
                <AddShoppingCartIcon />
              </IconButton>
            </div>
            <div className="rightButtonsComposition">
              <IconButton onClick={onDeleteClick}>
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
