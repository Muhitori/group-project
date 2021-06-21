import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Contacts } from '../pages/contacts/Contacts';
import { Cart } from '../pages/cart/Cart';
import { tokenSelector } from '../../store/selectors/auth-selector';
import { Login } from '../pages/login/Login';
import { Books } from '../pages/books/Books';
import { PrivateRoute } from './PrivateRoute';

export function Routing() {
  const token = useSelector(tokenSelector);
  return (
    <Switch>
      <PrivateRoute path="/books" component={Books} />
      {/* <Route path="/books" render={() => Books} /> */}
      {/* <Route
        exact
        path="/"
        render={() => token ? <Redirect to="/books" /> : <Redirect to="/login" />}
      /> */}
      <Route
        path="/login"
        render={() => <Login />}
      />
      {/* <Route
        path="/books"
        render={() => (token ? <Books /> : <Redirect to="/login" />)}
      /> */}
      <Route path="/contacts" component={() => <Contacts />} />
      <Route path="/cart" component={() => <Cart />} />
    </Switch>
  );
}
