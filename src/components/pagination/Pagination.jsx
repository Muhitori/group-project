import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { pageSelector, isNextPageSelector } from '../../store/selectors/product-selector';
import { tokenSelector } from '../../store/selectors/auth-selector';
import { getProductsAsync, increasePage } from '../../store/slices/product-slice';
import { useStyle } from './Styles';

export const Pagination = () => {
  const classes = useStyle();
  const token = useSelector(tokenSelector);
  const page = useSelector(pageSelector);
  const isNextPage = useSelector(isNextPageSelector);
  const dispatch = useDispatch();
  const onLoadMore = () => {
    dispatch(increasePage());
    dispatch(getProductsAsync({ page, token }));
  };
  return (
    <div className={classes.paginationContainer}>
      {isNextPage && <Button variant="contained" onClick={onLoadMore}>Load more</Button>}
    </div>
  );
};
