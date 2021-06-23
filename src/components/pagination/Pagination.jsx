import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import {
  pageSelector,
  isNextPageSelector,
  isLoadPageSelector,
} from '../../store/selectors/product-selector';
import { tokenSelector } from '../../store/selectors/auth-selector';
import { getProductsAsync } from '../../store/slices/product-slice';
import { useStyle } from './Styles';

export const Pagination = () => {
  const classes = useStyle();
  const token = useSelector(tokenSelector);
  const page = useSelector(pageSelector);
  const isLoad = useSelector(isLoadPageSelector);
  const isNextPage = useSelector(isNextPageSelector);
  const dispatch = useDispatch();
  const onLoadMore = () => {
    dispatch(getProductsAsync({ page, token }));
  };
  return (
    <div className={classes.paginationContainer}>
      {isNextPage && (
        <Button variant="contained" disabled={isLoad} onClick={onLoadMore}>
          Load more
        </Button>
      )}
    </div>
  );
};
