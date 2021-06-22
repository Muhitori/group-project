import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlideArrow } from './SlideArrow';
import { CustomSlide } from './CustomSlide';
import { useStyle } from './Styles';

export const Carousel = () => {
  const classes = useStyle();

  const settings = {
    dots: true,
    className: classes.carousel,
    prevArrow: <SlideArrow />,
    nextArrow: <SlideArrow />,
  };

  const slidesContent = [
    {
      slideNumber: 1,
      imageUrl:
        'https://langate.com/wp-content/uploads/2020/12/code-refactoring.jpg',
    },
    {
      slideNumber: 2,
      imageUrl:
        'https://www.letstute.com/assets/img/course_banner/rhapsody_in_blue_by_verticaldubai-d4yxrhk-900x300.jpg',
    },
    {
      slideNumber: 3,
      imageUrl: 'https://images.alphacoders.com/119/thumb-1920-119481.jpg',
    },
    {
      slideNumber: 4,
      imageUrl:
        'https://sm.mashable.com/mashable_in/photo/default/nasa-galaxy_9pu4.jpg',
    },
    {
      slideNumber: 5,
      imageUrl:
        'https://i.pinimg.com/originals/88/bc/35/88bc35b5833487afaff407296b531fcb.jpg',
    },
    {
      slideNumber: 6,
      imageUrl: 'https://cdn.hipwallpaper.com/i/89/85/0G2Yy5.jpg',
    },
  ];

  const slides = slidesContent.map(({ slideNumber, imageUrl }) => (
    <CustomSlide
      key={slideNumber}
      slideNumber={slideNumber}
      imageUrl={imageUrl}
    />
  ));

  return <Slider {...settings}>{slides}</Slider>;
};
