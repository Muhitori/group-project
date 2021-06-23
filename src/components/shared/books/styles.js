import { makeStyles } from '@material-ui/core/styles';

export const useCardStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '450px',
    padding: '20px',
    marginBottom: '30px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
  },
  footer: {
    width: '100%',
    padding: '10px',
    textAlign: 'center',
  },
  name: {
    fontSize: 15,
  },
  description: {
    width: '100%',
    textAlign: 'left',
  },
  cardButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  star: {
    marginRight: 15,
  },
  isFavorite: {
    backgroundColor: 'yellow',
  },
  inCart: {
    backgroundColor: 'green',
  },
}));
