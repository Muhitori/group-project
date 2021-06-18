import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { Contacts } from '../pages/contacts/Contacts';
import { Cart } from '../pages/cart/Cart';

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
