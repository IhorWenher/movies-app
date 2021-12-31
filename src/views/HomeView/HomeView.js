import React from 'react';
import image from '../../images/movies_image.png';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Styles from './HomeView.module.css';

const HomeView = () => {
  return (
    <div className={Styles.container}>
      <img src={image} alt="videotape" width="500" />
      <div>
        <h1 className={Styles.h1}>Let's create your film world</h1>
        <div className={Styles.buttons}>
          <Link to="/login" className={Styles.authLink}>
            <Button className={Styles.button} type="button">
              Login
            </Button>
          </Link>
          <p>or</p>
          <Link to="/register" className={Styles.authLink}>
            <Button className={Styles.button} type="button">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
