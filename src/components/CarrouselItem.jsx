import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Link} from 'react-router-dom';
import { setFavorite, deleteFavorite } from '../redux/actions';
import '../assets/styles/components/CarrouselItem.scss';
import playIcon from '../assets/static/icons-play.png'
import addIcon from '../assets/static/icons-add.png'
import removeIcon from '../assets/static/remove-icon.png'

const CarrouselItem = (props) => {
  const { cover, title, year, contentRating, duration, id, isFavorite  } = props;
  const handleSetFavorite = () => {
    props.setFavorite({ 
      cover, title, year, contentRating, duration , id, isFavorite
    })
  }
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId)
  }
  return (
    <div className="carousel-item">
      <img
        src={cover}
        alt={title}
        className="carousel-item__img"
      />
      <div className="carousel-item__details">
        <div>
          <Link to={`player/${id}`}>
          <img 
          src={playIcon} 
          alt="Play Icon" 
          />
          </Link>
          
          {
            isFavorite? <img
            src={removeIcon}
            alt=""
            onClick={()=>handleDeleteFavorite(id)}
          /> : 
          <img
          src={addIcon}
          alt=""
          onClick={handleSetFavorite}
        />
          }
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">
            2019 16+ 114 minutos
            {`${year} ${contentRating} ${duration}`}
          </p>
        </div>
      </div>
    </div>
  )
};

CarrouselItem.propTypes = {
  cover: propTypes.string,
  title: propTypes.string,
  year: propTypes.number,
  contentRating: propTypes.string,
  duration: propTypes.number,
};

const mapDispatchToProps =  {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarrouselItem);