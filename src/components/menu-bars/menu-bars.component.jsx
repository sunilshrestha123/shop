import React from 'react';
import './menu-bar.style.scss';
const MenuBar = () => (
  <div className='navbar'>
    <a href='#home'>Home</a>
    <a href='#news'>News</a>
    <div className='dropdown'>
      <button className='dropbtn'>Product</button>
      <div className='dropdown-content'>
        <div className='header'>
          <h3>Our Product</h3>
        </div>
        <div className='row'>
          <div className='column'>
            <h3>Category 1</h3>
            <a href='#'>Link 1</a>
            <a href='#'>Link 2</a>
            <a href='#'>Link 3</a>
          </div>
          <div className='column'>
            <h3>Category 2</h3>
            <a href='#'>Link 1</a>
            <a href='#'>Link 2</a>
            <a href='#'>Link 3</a>
          </div>
          <div className='column'>
            <h3>Category 3</h3>
            <a href='#'>Link 1</a>
            <a href='#'>Link 2</a>
            <a href='#'>Link 3</a>
          </div>
        </div>
      </div>
    </div>
    <div className='dropdown'>
      <button className='dropbtn'>Dropdown</button>
      <div className='dropdown-content'>
        <div className='header'>
          <h3>Our Product</h3>
        </div>
        <div className='row'>
          <div className='column'>
            <h3>Category 1</h3>
            <a href='#'>Link 1</a>
            <a href='#'>Link 2</a>
            <a href='#'>Link 3</a>
          </div>
          <div className='column'>
            <h3>Category 2</h3>
            <a href='#'>Link 1</a>
            <a href='#'>Link 2</a>
            <a href='#'>Link 3</a>
          </div>
          <div className='column'>
            <h3>Category 3</h3>
            <a href='#'>Link 1</a>
            <a href='#'>Link 2</a>
            <a href='#'>Link 3</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default MenuBar;
