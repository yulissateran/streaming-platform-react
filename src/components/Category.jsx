import React from 'react';
import '../assets/styles/components/Category.scss';

const Category = ({ children, title }) => (
  <div className="Category">
    <h2 className="categories__title">{ title }</h2>
    {children}
  </div>);
export default Category;