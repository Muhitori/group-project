import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles({
  cartCounter: {
    position: 'absolute',
    top: '-7px',
    right: '-7px',
    minWidth: '15px',
    minHeight: '15px',
    padding: '1px',
    backgroundColor: 'red',
    borderRadius: '50%',
    fontSize: '10px',
  },
});
