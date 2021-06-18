import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Contacts } from './Contacts';
import { Cart } from './Cart';

export function Layout() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/books" />} />
        <Route path="/contacts" render={() => <Contacts />} />
        <Route path="/cart" render={() => <Cart />} />
      </Switch>
      <Footer />
    </Router>
  );
}
