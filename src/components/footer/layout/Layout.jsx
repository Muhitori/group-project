import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import { Header } from '../../header/Header';
import { Footer } from '../Footer';
import { Contacts } from '../../Contacts';
import { Cart } from '../../Cart';

export function Layout() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" render={() => <Redirect to="/books" />} />
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
