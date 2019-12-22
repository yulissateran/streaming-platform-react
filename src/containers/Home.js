import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Category from '../components/Category';
import Carrousel from '../components/Carrousel';
import CarrouselItem from '../components/CarrouselItem';
import Footer from '../components/Footer';
import '../assets/styles/containers/Home.scss';
import useInitialState from '../hooks/UseInitialState';

const Home = () => {
  const API = 'http://localhost:3000/initalState';
  const initialState = useInitialState(API)

  const getCategoriesWithTitle = (videos) => {
    const categories = Object.keys(videos);
    return categories.map(category => {
      let title = '';
      switch (category) {
        case 'mylist': title = 'Mi lista';
          break;
        case 'trends': title = 'Tendencias';
          break;
        case 'originals': title = 'Originales de Netflix';
          break;
      };
      return ({ title, videos: [...videos[category]] })
    });
  };

  const categories = getCategoriesWithTitle(initialState);

  console.log(categories)
  return (
    <div className="App">
      <Header />
      <Search />
      {
        categories.map(category => (
          category.videos.length > 0 &&
          <Category key={category.title} title={category.title}>
            <Carrousel>
              {
                category.videos.map(video => (<CarrouselItem key={video.id} {...video} />))
              }
            </Carrousel>
          </Category>
        ))
      }
      <Footer />
    </div>
  )
};
export default Home;