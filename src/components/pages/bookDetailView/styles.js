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
  pictureWrap: {
    marginRight: 25,
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
  descriptoinWrap: {
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    fontSize: 20,
    marginBottom: 10,
  },
  description: {
    width: '100%',
    textAlign: 'left',
    arginBottom: 10,
  },
  cardButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  star: {
    marginRight: 15,
  },
  arrow: {
    marginBottom: 5,
  },
  contentWrap: {
    display: 'flex',
  },
}));
