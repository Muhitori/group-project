import { makeStyles } from '@material-ui/core';
import { MAIN_COLOR } from '../../../utils/constants';

export const useStyle = makeStyles((theme) => ({
  'error-container': {
    position: 'absolute',
    top: theme.spacing(3),
    right: theme.spacing(3),
    minWidth: '20%',
    zIndex: '10',
  },
  error: {
    marginTop: theme.spacing(2),
    background: MAIN_COLOR,
  },
}));
