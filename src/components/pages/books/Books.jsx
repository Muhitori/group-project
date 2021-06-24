import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Pagination } from '../../pagination/Pagination';
import { Carousel } from '../../common/carousel/Carousel';
import { SearchBar } from '../../common/searchBar/Searchbar';
import { BooksList } from '../../shared/books/BooksList';
import { getPageCount } from '../../../store/slices/product-slice';
import { SideBar } from '../../common/sideBar/SideBar';

export const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPageCount());
  }, []);

  return (
    <>
      <Carousel />
      <SideBar />
      <SearchBar />
      <BooksList />
      <Pagination />
    </>
  );
};
