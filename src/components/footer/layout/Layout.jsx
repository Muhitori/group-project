import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../../header/Header';
import { Footer } from '../Footer';
import { Contacts } from '../../Contacts';
// import s from './Layout.module.css';

export function Layout() {
  return (
    <Router>
      <Header />
      {/* <div className={s.content}></div> */}
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
