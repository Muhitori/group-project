import { PropTypes } from 'prop-types';
import { sliderArrowColor } from '../../../utils/constants';

export const SlideArrow = ({ className, style, onClick }) => {
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

SlideArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

SlideArrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => {},
};
