import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  carousel: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
  },
  slideContent: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  slideNumber: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '100px',
    opacity: '0.7',
  },
}));
