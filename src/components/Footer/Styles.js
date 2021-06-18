import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles({
  footer: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    right: 0,
    marginTop: 10,
    paddingTop: 15,
    minHeight: 50,
  },
  container: {
    marginLeft: 50,
    marginRright: 50,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  privacyNavItem: {
    marginRight: 20,
  },
  itemLink: {
    '&:hover': {
      color: 'blue',
    },
  },
  logoLink: {
    marginBottom: 10,
  },
  signNav: {
    display: 'flex',
    listStyleType: 'none',
  },
  signNavItem: {
    marginRight: 20,
    '&:last-child': {
      color: 'blue',
    },
  },
  privacyNav: {
    display: 'flex',
    listStyleType: 'none',
  },
});
