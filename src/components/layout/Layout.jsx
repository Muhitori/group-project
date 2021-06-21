import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../header/Header';
import { Main } from '../main/Main';
import { Footer } from '../footer/Footer';

export function Layout() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}
