import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Contacts } from '../pages/contacts/Contacts';
import { Cart } from '../pages/cart/Cart';
import { tokenSelector } from '../../store/selectors/auth-selector';
import { Login } from '../pages/login/Login';
import { Books } from '../pages/books/Books';

export function Routing() {
  const token = useSelector(tokenSelector);
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => token ? <Redirect to="/books" /> : <Redirect to="/login" />}
      />
      <Route
        path="/login"
        render={() => (token ? <Redirect to="/books" /> : <Login />)}
      />
      <Route
        path="/books"
        render={() => (token ? <Books /> : <Redirect to="/login" />)}
      />
      <Route path="/contacts" render={() => <Contacts />} />
      <Route path="/cart" render={() => <Cart />} />
    </Switch>
  );
}
