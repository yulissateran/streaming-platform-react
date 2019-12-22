import React from 'react';
import propTypes from 'prop-types';
import '../assets/styles/components/CarrouselItem.scss';
import playIcon from '../assets/static/icons-play.png'
import addIcon from '../assets/static/icons-add.png'

const CarrouselItem = ({cover, title,year,contentRating, duration}) => (
  <div className="carousel-item">
    <img
      src={cover}
      alt={title}
      className="carousel-item__img"
    />
    <div className="carousel-item__details">
      <div>
        <img src={playIcon} alt="" />
        <img
          src={addIcon}
          alt=""
        />
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          2019 16+ 114 minutos
          { `${year} ${contentRating} ${duration}`}
      </p>
      </div>
    </div>
  </div>
);
CarrouselItem.propTypes = {
  cover: propTypes.string,
  title: propTypes.string,
  year: propTypes.number,
  contentRating: propTypes.string,
  duration: propTypes.number,
};
export default CarrouselItem;