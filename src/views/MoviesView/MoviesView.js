import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moviesSelectors, moviesOperations } from '../../redux/movies';
import { Link } from 'react-router-dom';
import { userOperations } from '../../redux/user';

import Backdrop from '../../components/Backdrop';
import MoviesModal from '../../components/MoviesModal';
import InputSet from '../../components/InputSet';
import FilterSet from '../../components/FilterSet';
import MoviesList from '../../components/MoviesList';

import Styles from './MoviesView.module.css';
import { Form, Button } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';

const MoviesView = () => {
  const [showModal, setShowModal] = useState(false);
  const isLoading = useSelector(moviesSelectors.getLoading);
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  useEffect(() => {
    const params = {
      /*  sort:, */
      order: 'DESC',
      limit: 20,
      offset: 0,
    };
    dispatch(moviesOperations.getList(params));
  }, [dispatch]);

  const movies = useSelector(moviesSelectors.getMovies);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onFileChange = e => {
    setFile(e.target.files[0]);
  };

  const onFileUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append('myFile', file, file.name);
      dispatch(moviesOperations.importFile(file));
    }
  };

  return (
    <div className={Styles.container}>
      <h1 className={Styles.h1}>
        Your movies
        {isLoading && <Spinner animation="border" variant="primary" />}
      </h1>
      {movies.length < 1 && (
        <p>You have no movies yet, please press '+' to add your first</p>
      )}
      {showModal && (
        <Backdrop>
          <MoviesModal togleModal={toggleModal} />
        </Backdrop>
      )}

      <InputSet
        onFileChange={onFileChange}
        onFileUpload={onFileUpload}
        toggleModal={toggleModal}
      />

      <FilterSet />

      <MoviesList />

      <Link to={`/logout`} className={Styles.exitButton}>
        <Button variant="outline-primary" type="button">
          Exit
        </Button>
      </Link>
    </div>
  );
};

export default MoviesView;
