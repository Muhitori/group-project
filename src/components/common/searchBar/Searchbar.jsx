import { Box, Input, FormControl } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import { getProductsByTitleAsync } from '../../../store/slices/product-slice';

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getProductsByTitleAsync({ searchQuery }));
  };

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, 500px)"
      justifyContent="center"
      marginTop="20px"
    >
      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel htmlFor="search">search</InputLabel>
          <Input
            type="text"
            autoComplete="off"
            placeholder="search"
            value={searchQuery}
            onChange={handleInputChange}
            id="search"
          />
        </FormControl>
      </form>
    </Box>
  );
};
