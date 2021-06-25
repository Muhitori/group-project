import { PropTypes } from 'prop-types';
import { SLIDER_ARROW_COLOR } from '../../../utils/constants';

export const SlideArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundColor: SLIDER_ARROW_COLOR,
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
