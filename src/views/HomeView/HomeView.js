import React from 'react';
import image from './contact image.png';
import Styles from './HomeView.module.css';

const HomeView = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.h1}>Be in contact...</h1>
      <img src={image} alt="Phone connects to earth" width="500" />
    </div>
  );
};

export default HomeView;
