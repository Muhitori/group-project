import { Pagination } from '../../pagination/Pagination';
import { Carousel } from '../../common/carousel/Carousel';
import { BooksList } from '../../shared/books/BooksList';

export const Books = () => {
  return (
    <>
      <Carousel />
      <BooksList />
      <Pagination />
    </>
  );
};
