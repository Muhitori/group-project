import { makeStyles } from '@material-ui/core';
import {
  LIGHT_COLOR,
  LIGHT_COLOR_SHADOW,
  MAIN_COLOR,
} from '../../utils/constants';

export const useStyle = makeStyles((theme) => ({
  header: {
    position: 'fixed',
    backgroundColor: MAIN_COLOR,
    width: '100%',
    zIndex: '1',
    borderBottom: `1px solid ${LIGHT_COLOR}`,
    boxShadow: `3px 3px 2px 1px ${LIGHT_COLOR_SHADOW}`,
  },
  container: {
    maxWidth: '100%',
    padding: theme.spacing(0, 2),
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  toolbarLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  toolbarTitle: {
    padding: theme.spacing(0, 1),
  },
  toolbarButton: {
    position: 'relative',
    marginLeft: theme.spacing(2),
  },
  cartCounter: {
    position: 'absolute',
    top: '-7px',
    right: '-7px',
    minWidth: '15px',
    minHeight: '15px',
    padding: '3px',
    backgroundColor: 'red',
    borderRadius: '50%',
    fontSize: '10px',
  },
}));
