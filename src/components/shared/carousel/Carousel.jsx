import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PrevArrow } from './PrevArrow';
import { NextArrow } from './NextArrow';
import { CustomSlide } from './CustomSlide';
import { useStyle } from './Styles';

export const Carousel = () => {
  const classes = useStyle();

  const settings = {
    dots: true,
    className: classes.carousel,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const slides = [1, 2, 3, 4, 5, 6].map((number) => (
    <CustomSlide key={number} number={number} />
  ));

  return <Slider {...settings}>{slides}</Slider>;
};
