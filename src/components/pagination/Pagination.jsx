import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { nextPageSelector } from '../../store/selectors/product-selector';
import { tokenSelector } from '../../store/selectors/auth-selector';
import { getProductsAsync } from '../../store/slices/product-slice';
import { useStyle } from './Styles';

export const Pagination = () => {
  const classes = useStyle();
  const token = useSelector(tokenSelector);
  const nextPage = useSelector(nextPageSelector);
  const dispatch = useDispatch();
  const onLoadMore = async () => {
    await dispatch(getProductsAsync({ link: nextPage, token }));
  };
  return (
    <div className={classes.paginationContainer}>
      {!!nextPage && <Button variant="contained" onClick={onLoadMore}>Load more</Button>}
    </div>
  );
};
