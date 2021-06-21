import { PropTypes } from 'prop-types';
import { sliderArrowColor } from '../../../utils/consts';

export const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundColor: sliderArrowColor,
      }}
      onClick={onClick}
    />
  );
};

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

NextArrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => {},
};
