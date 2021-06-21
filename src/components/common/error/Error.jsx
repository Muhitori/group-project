import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Alert } from '@material-ui/lab';
import { useStyle } from './Style';
import { deleteError } from '../../../store/slices/ui-slice';

export const Error = ({ message, id }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const deleteAlert = () => {
    dispatch(deleteError(id));
  };

  useEffect(() => {
    setTimeout(() => {
      deleteAlert();
    }, 10000);
  }, []);

  return (
    <Alert
      className={classes.error}
      onClose={() => deleteAlert()}
      variant="outlined"
      severity="error"
    >
      {message}
    </Alert>
  );
};

Error.propTypes = {
  message: PropTypes.string,
  id: PropTypes.string,
};

Error.defaultProps = {
  message: '',
  id: '',
};
