import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search';
import Category from '../components/Category';
import Carrousel from '../components/Carrousel';
import CarrouselItem from '../components/CarrouselItem';
import '../assets/styles/containers/Home.scss';
import useInitialState from '../hooks/UseInitialState';

const Home = (props) => {
const {myList, trends, originals} = props;
  const getCategoriesWithTitle = (videos) => {
    console.log('convert categories')
    const categories = Object.keys(videos);
    return categories.map(category => {
      let title = '';
      let isFavorite = false;
      switch (category) {
        case 'myList': 
        title = 'Mi lista';
        isFavorite = true;
          break;
        case 'trends': title = 'Tendencias';
          break;
        case 'originals': title = 'Originales de Netflix';
          break;
      };
      return ({ title,isFavorite, videos: [...videos[category]] })
    });
  };
  const categories = getCategoriesWithTitle({myList,originals,trends});
  return (
    <>
      <Search />
      {
        categories.map(category => (
          category.videos.length > 0 &&
          <Category key={category.title} title={category.title}>
            <Carrousel>
              {
                category.videos.map(video => (
                <CarrouselItem 
                key={video.id} 
                {...video} 
                isFavorite={category.isFavorite}
                />
                ))
              }
            </Carrousel>
          </Category>
        ))
      }
    </>
  )
};

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals
  }
}

export default connect(mapStateToProps, null)(Home)