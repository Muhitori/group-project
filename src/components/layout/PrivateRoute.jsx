import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { tokenSelector } from '../../store/selectors/auth-selector';

export const PrivateRoute = ({ component, ...rest }) => {
  const isLogin = !!useSelector(tokenSelector);
  return (
    <Route
      {...rest}
      render={() => (isLogin ? component : <Redirect to="/login" />)}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};
