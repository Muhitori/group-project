/* eslint-disable react/jsx-props-no-spreading */
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Route } from 'react-router-dom';
import { tokenSelector } from '../../store/selectors/auth-selector';
import { Login } from '../pages/login/Login';

export const PrivateRoute = ({ component, path }) => {
  const isLogin = !!useSelector(tokenSelector);
  const finalComponent = isLogin ? component : Login;
  return <Route path={path} component={finalComponnt} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string,
};

PrivateRoute.defaultProps = {
  path: '/',
};
