import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { errorsSelector } from '../../../store/selectors/ui-selector';
import { createError } from '../../../store/slices/ui-slice';
import { Error } from './Error';
import { useStyle } from './Style';

export const ErrorNotifications = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const errors = useSelector(errorsSelector);

  useEffect(() => {
    setTimeout(() => {
      dispatch(createError('error'));
    }, 1000);
  }, []);

  return (
    <div className={classes['error-container']}>
      {errors.map(({ id, message }) => (
        <Error id={id} message={message} key={nanoid()} />
      ))}
    </div>
  );
};
