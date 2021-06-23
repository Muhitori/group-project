import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '../../pagination/Pagination';
import { Carousel } from '../../common/carousel/Carousel';
import { BooksList } from '../../shared/books/BooksList';
import { tokenSelector } from '../../../store/selectors/auth-selector';
import { getPageCount } from '../../../store/slices/product-slice';

export const Books = () => {
  const token = useSelector(tokenSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPageCount(token));
  }, []);

  return (
    <>
      <Carousel />
      <BooksList />
      <Pagination />
    </>
  );
};
