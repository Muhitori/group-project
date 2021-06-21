import { makeStyles } from '@material-ui/core';
import { LIGHT_COLOR } from '../../utils/consts';

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
    marginLeft: theme.spacing(2),
  },
}));
