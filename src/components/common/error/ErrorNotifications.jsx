import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { errorsSelector } from '../../../store/selectors/ui-selector';
import { Error } from './Error';
import { useStyle } from './Style';

export const ErrorNotifications = () => {
  const classes = useStyle();
  const errors = useSelector(errorsSelector);

  return (
    <div className={classes['error-container']}>
      {errors.map(({ id, message }) => (
        <Error id={id} message={message} key={nanoid()} />
      ))}
    </div>
  );
};
