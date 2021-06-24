import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Pagination } from '../../pagination/Pagination';
import { Carousel } from '../../common/carousel/Carousel';
import { BooksList } from '../../shared/books/BooksList';
import { getPageCount } from '../../../store/slices/product-slice';
import { BooksControls } from '../../common/booksControls/BooksControls';

export const Books = () => {
  const dispatch = useDispatch();
  const [isOnlyFavoriteProducts, setOnlyFavoriteProducts] = useState(false);

  useEffect(() => {
    dispatch(getPageCount());
  }, []);

  return (
    <>
      <Carousel />
      <BooksControls
        isOnlyFavoriteProducts={isOnlyFavoriteProducts}
        setOnlyFavoriteProducts={setOnlyFavoriteProducts}
      />
      <BooksList isOnlyFavoriteProducts={isOnlyFavoriteProducts} />
      {!isOnlyFavoriteProducts && <Pagination />}
    </>
  );
};
