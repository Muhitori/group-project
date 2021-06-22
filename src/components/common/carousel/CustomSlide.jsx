import { Box } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { useStyle } from './Styles';

export const CustomSlide = ({ slideNumber, imageUrl }) => {
  const classes = useStyle();

  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="center"
      maxHeight="400px"
    >
      <div className={classes.slideNumber}>{slideNumber}</div>
      <img className={classes.slideImg} src={imageUrl} alt="" />
    </Box>
  );
};

CustomSlide.propTypes = {
  slideNumber: PropTypes.number,
  imageUrl: PropTypes.string,
};

CustomSlide.defaultProps = {
  slideNumber: 0,
  imageUrl: '',
};
