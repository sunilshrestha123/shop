import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import Footer from '../../components/footer/footer.component';
export const HomePage = () => {
  return (
    <div className='homepage'>
      <Directory />
    </div>
  );
};
