import { useSelector } from 'react-redux';
import { hasErrorsSelector } from '../../store/selectors/ui-selector';
import { ErrorNotifications } from '../common/error/ErrorNotifications';
import { HiddenComponent } from '../common/HiddenComponent';
import { Routing } from '../layout/Routing';
import { useStyle } from './Styles';

export const Main = () => {
  const classes = useStyle();
  const hasErrors = useSelector(hasErrorsSelector);
  return (
    <main className={classes.main}>
      <Routing />
      <HiddenComponent isShow={hasErrors}>
        <ErrorNotifications />
      </HiddenComponent>
    </main>
  );
};
