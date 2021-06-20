import { Routing } from '../layout/Routing';
import { useStyle } from './Styles';

export const Main = () => {
  const classes = useStyle();
  return (
    <main className={classes.main}>
      <Routing />
    </main>
  );
};
