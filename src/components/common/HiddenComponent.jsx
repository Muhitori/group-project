import { PropTypes } from 'prop-types';

export const HiddenComponent = ({ isShow, children }) => {
  if (isShow) {
    return <>{children}</>;
  }
  return null;
};

HiddenComponent.propTypes = {
  isShow: PropTypes.bool,
  children: PropTypes.node
};

HiddenComponent.defaultProps = {
  isShow: false,
  children: <></>
};
