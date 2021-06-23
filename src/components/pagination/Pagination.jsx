import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import {
  pageNumberSelector,
  isNextPageSelector,
  isPageLoadingSelector,
} from '../../store/selectors/product-selector';
import { tokenSelector } from '../../store/selectors/auth-selector';
import { getProductsAsync } from '../../store/slices/product-slice';
import { useStyle } from './Styles';

export const Pagination = () => {
  const classes = useStyle();
  const token = useSelector(tokenSelector);
  const pageNumber = useSelector(pageNumberSelector);
  const isLoading = useSelector(isPageLoadingSelector);
  const isNextPage = useSelector(isNextPageSelector);
  const dispatch = useDispatch();
  const onLoadMore = () => {
    dispatch(getProductsAsync({ pageNumber, token }));
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
