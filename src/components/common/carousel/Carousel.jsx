import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlideArrow } from './SlideArrow';
import { CustomSlide } from './CustomSlide';
import { useStyle } from './Styles';
import { slidesContent } from '../../../utils/constants';

export const Carousel = () => {
  const classes = useStyle();

  const settings = {
    dots: true,
    lazyLoad: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    className: classes.carousel,
    prevArrow: <SlideArrow />,
    nextArrow: <SlideArrow />,
  };

  const slides = slidesContent.map(({ slideNumber, imageUrl }) => (
    <CustomSlide
      key={slideNumber}
      slideNumber={slideNumber}
      imageUrl={imageUrl}
    />
  ));

  return <Slider {...settings}>{slides}</Slider>;
};
