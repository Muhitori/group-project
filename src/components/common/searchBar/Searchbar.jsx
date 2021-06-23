import { Box } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { getProductsByTitleAsync } from '../../../store/slices/product-slice';
import { tokenSelector } from '../../../store/selectors/auth-selector';

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);

  const changeInput = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getProductsByTitleAsync({ token, searchQuery }));
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
          <InputLabel htmlFor="component-simple">search</InputLabel>
          <Input
            type="text"
            autoComplete="off"
            placeholder="search"
            value={searchQuery}
            onChange={changeInput}
          />
        </FormControl>
      </form>
    </Box>
  );
};
