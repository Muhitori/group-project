import { makeStyles } from '@material-ui/core';
import { MAIN_COLOR } from '../../../utils/constants';

export const useStyle = makeStyles((theme) => ({
  'error-container': {
    position: 'absolute',
    top: '0',
    right: '0',
    minWidth: '20%',
    zIndex: '10',
  },
  error: {
    marginTop: theme.spacing(2),
    background: MAIN_COLOR,
  },
}));
