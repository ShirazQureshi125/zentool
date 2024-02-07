// CardSlider.js
import React from 'react';
import Slider from 'react-slick';
import MediaCard from '../general-components/card';

const CardSlider = () => {
    const data = [
        {
          image: 'https://www.shutterstock.com/image-vector/orange-clipboard-checklist-icon-isolated-260nw-1320814034.jpg',
          title: 'Edit PDF',
          description: 'Description for lizard 1 for lizard for lizard for lizard',
        },
        {
          image: 'https://www.shutterstock.com/image-vector/orange-clipboard-checklist-icon-isolated-260nw-1320814034.jpg',
          title: 'Crop PDF',
          description: 'Description for lizard 2 for lizard for lizard for lizard',
        },
        {
          image: 'https://www.shutterstock.com/image-vector/orange-clipboard-checklist-icon-isolated-260nw-1320814034.jpg',
          title: 'Replace Text',
          description: 'Description for lizard 3 for lizard for lizard for lizard',
        },
        {
          image: 'https://www.shutterstock.com/image-vector/orange-clipboard-checklist-icon-isolated-260nw-1320814034.jpg',
          title: 'Retate Text',
          description: 'Description for lizard 4 for lizard for lizard for lizard   ',
        },
      ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of cards shown at a time
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {data.map((cardData, index) => (
        <div key={index}>
          <MediaCard {...cardData} />
        </div>
      ))}
    </Slider>
  );
};

export default CardSlider;
