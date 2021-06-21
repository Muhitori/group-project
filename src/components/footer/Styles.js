import { makeStyles } from '@material-ui/core/styles';
import { LIGHT_COLOR } from '../../utils/consts';

export const useStyle = makeStyles((theme) => ({
  footer: {
    marginTop: 'auto',
    backgroundColor: LIGHT_COLOR,
  },
  container: {
    maxWidth: '100%',
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  privacyNavItem: {
    marginRight: theme.spacing(3),
  },
  itemLink: {
    '&:hover': {
      color: 'blue',
    },
  },
  logoLink: {
    marginBottom: theme.spacing(2),
  },
  signNav: {
    display: 'flex',
    listStyleType: 'none',
  },
  signNavItem: {
    marginRight: theme.spacing(3),
    '&:last-child': {
      color: 'blue',
    },
  },
  privacyNav: {
    display: 'flex',
    listStyleType: 'none',
  },
  footerCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
