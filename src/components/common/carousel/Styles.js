import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles({
  carousel: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
  },
  slideNumber: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '100px',
    color: 'white',
    opacity: '0.5',
  },
  slideImg: {
    width: '100%',
  },
});
