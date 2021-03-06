import { Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { hasErrorsSelector } from '../../store/selectors/ui-selector';
import { ErrorNotifications } from '../common/error/ErrorNotifications';
import { Routing } from '../layout/Routing';
import { useStyle } from './Styles';

export const Main = () => {
  const classes = useStyle();
  const hasErrors = useSelector(hasErrorsSelector);
  return (
    <main className={classes.main}>
      <Container maxWidth="lg">
        <Routing />
        {hasErrors && <ErrorNotifications />}
      </Container>
    </main>
  );
};
