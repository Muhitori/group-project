import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  cartContent: {
    padding: theme.spacing(3, 0),
  },
  cartFooter: {
    display: 'flex',
  },
  cartButton: {
    minWidth: '300px',
  },
  cartGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    display: 'flex',
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  cardMedia: {
    width: '30%',
    paddingTop: '20%',
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActions: {
    position: 'relative',
    width: '20%',
  },
  cardActionsContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  cardActionsField: {
    width: '100%',
  },
  productPrice: {
    width: '90%',
    padding: theme.spacing(0, 2),
  },
}));
