import { makeStyles } from '@material-ui/core';
import { LIGHT_COLOR, MAIN_COLOR } from '../../../../utils/constants';

export const useStyle = makeStyles((theme) => ({
  modal: {
    marginTop: '5%',
  },
  formContainer: {
    backgroundColor: MAIN_COLOR,
    padding: theme.spacing(5, 3),
    border: `1px solid ${LIGHT_COLOR}`,
    borderRadius: '5px',
  },
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  formField: {
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
}));
