import { PropTypes } from 'prop-types';
import { useStyle } from './Styles';

export const CustomSlide = ({ number }) => {
  const classes = useStyle();

  return (
    <div className={classes.slideContent}>
      <div className={classes.slideNumber}>{number}</div>
      <img
        src="https://shareconomy-prod.s3.amazonaws.com/uploads/blog/blog_image/9/landscape_900_x_300_px.jpg"
        alt=""
      />
    </div>
  );
};

CustomSlide.propTypes = {
  number: PropTypes.number,
};

CustomSlide.defaultProps = {
  number: 0,
};
