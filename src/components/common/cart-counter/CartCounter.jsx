import { PropTypes } from 'prop-types';
import { useStyle } from './Styles';

export const CartCounter = ({ cartLength }) => {
  const classes = useStyle();
  return <div className={classes.cartCounter}>{cartLength}</div>;
};

CartCounter.propTypes = {
  cartLength: PropTypes.number.isRequired,
};
