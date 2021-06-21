import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles({
  header: {
    width: '100%',
    marginTop: 10,
    minHeight: 50,
    position: 'fixed',
  },
  container: {
    marginLeft: 50,
    marginRight: 50,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerNav: {
    display: 'flex',
  },
  headerLogo: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginRight: 20,
  },
  navItem: {
    marginRight: 30,
    minWidth: 50,
    listStyleType: 'none',
    '&:last-child': {
      marginRight: 0,
    },
  },
  log: {
    padding: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 3,
    '&:hover': {
      backgroundColor: 'rgb(50, 50, 112)',
      color: 'white',
    },
  },
});
