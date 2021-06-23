import { Carousel } from '../../common/carousel/Carousel';
import { BooksList } from '../../shared/books/BooksList';
import { SearchBar } from '../../common/searchBar/Searchbar';

export const Books = () => {
  return (
    <>
      <Carousel />
      <SearchBar />
      <BooksList />
    </>
  );
};
