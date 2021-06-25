import { Switch, Redirect } from 'react-router-dom';
import { Contacts } from '../pages/contacts/Contacts';
import { Cart } from '../pages/cart/Cart';
import { Books } from '../pages/books/Books';
import { BookDetailView } from '../pages/bookDetailView/BookDetailView';
import { PrivateRoute } from './PrivateRoute';

export function Routing() {
  return (
    <Switch>
      <Redirect exact from="/" to="/books" />
      <PrivateRoute path="/books/:id" component={BookDetailView} />
      <PrivateRoute path="/books" component={Books} />
      <PrivateRoute path="/contacts" component={Contacts} />
      <PrivateRoute path="/cart" component={Cart} />
    </Switch>
  );
}
