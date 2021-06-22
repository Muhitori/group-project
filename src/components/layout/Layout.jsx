import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../header/Header';
import { Main } from '../main/Main';
import { Footer } from '../footer/Footer';
import { useStyles } from './Styles';

export function Layout() {
  const classes = useStyles();
  return (
    <div className={classe.pageContainer}>
      <Router>
        <Header />
        <Main />

        <Footer />
      </Router>
    </div>
  );
}
