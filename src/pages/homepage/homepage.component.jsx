import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import Footer from '../../components/footer/footer.component';
import ImageSlide from '../../components/imageSlides/imageSlides.component';
import Catgory from '../category/category';
import Category from '../../pages/category/category';
export const HomePage = () => {
  return (
    <div className='homepage'>
      <div className="main-slide">
        <div className="category-menu">
          <h3>Product category</h3>
          {/* <Category /> */}
        </div>
        <div className="product-slide">
          <ImageSlide />
        </div>
      </div>
      <Directory />
      {/* <Catgory /> */}
    </div>
  );
};
