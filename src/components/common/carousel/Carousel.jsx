import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlideArrow } from './SlideArrow';
import { CustomSlide } from './CustomSlide';
import { useStyle } from './Styles';
import { SLIDES_CONTENT } from '../../../utils/constants';

export const Carousel = () => {
  const classes = useStyle();

  const settings = {
    dots: true,
    lazyLoad: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 10000,
    className: classes.carousel,
    prevArrow: <SlideArrow />,
    nextArrow: <SlideArrow />,
  };

  const slides = SLIDES_CONTENT.map(({ slideNumber, imageUrl }) => (
    <CustomSlide
      key={slideNumber}
      slideNumber={slideNumber}
      imageUrl={imageUrl}
    />
  ));

  return <Slider {...settings}>{slides}</Slider>;
};
