import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles((theme) => ({
  'error-container': {
    position: 'absolute',
    top: theme.spacing(3),
    right: theme.spacing(3),
    minWidth: '20%',
  },
  error: {
    marginTop: theme.spacing(2),
  },
}));
