import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles((theme) => ({
  main: {
    position: 'relative',
    margin: theme.spacing(8),
    padding: theme.spacing(3, 2, 3),
  },
}));
