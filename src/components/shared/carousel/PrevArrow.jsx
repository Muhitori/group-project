import { PropTypes } from 'prop-types';
import { sliderArrowColor } from '../../../utils/consts';

export const PrevArrow = ({ className, style, onClick }) => {
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

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

PrevArrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => {},
};
