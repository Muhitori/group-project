import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Button } from '@material-ui/core';
import {
  pageNumberSelector,
  isNextPageSelector,
} from '../../store/selectors/product-selector';
import { getProductsAsync } from '../../store/slices/product-slice';
import { useStyle } from './Styles';

export const Pagination = ({ isLoading }) => {
  const classes = useStyle();
  const dispatch = useDispatch();

  const pageNumber = useSelector(pageNumberSelector);
  const isNextPage = useSelector(isNextPageSelector);

  const onLoadMore = () => {
    dispatch(getProductsAsync({ pageNumber }));
  };
  return (
    <div className={classes.paginationContainer}>
      {isNextPage && (
        <Button variant="contained" disabled={isLoading} onClick={onLoadMore}>
          Load more
        </Button>
      )}
    </div>
  );
};

Pagination.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
