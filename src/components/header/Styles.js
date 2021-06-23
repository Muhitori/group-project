import { makeStyles } from '@material-ui/core';
import { LIGHT_COLOR } from '../../utils/constants';

export const useStyle = makeStyles((theme) => ({
  container: {
    maxWidth: '100%',
    padding: theme.spacing(0, 2),
  },
  toolbar: {
    borderBottom: `1px solid ${LIGHT_COLOR}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
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
