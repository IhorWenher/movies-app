import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moviesSelectors, moviesOperations } from '../../redux/movies';

import MoviesModal from '../../components/MoviesModal';
import InputSet from '../../components/InputSet';
import FilterSet from '../../components/FilterSet';
import MoviesList from '../../components/MoviesList';
import ExitButton from '../../components/ExitButton';

import Styles from './MoviesView.module.css';

import { Spinner } from 'react-bootstrap';

const MoviesView = () => {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState(null);
  const [filter, setFilter] = useState({});
  const isLoading = useSelector(moviesSelectors.getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const params = {
      ...filter,
      limit: 20,
      offset: 0,
    };
    dispatch(moviesOperations.getList(params));
  }, [filter, dispatch]);

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
    } else {
      alert('File not found!');
    }
  };

  const onFilter = filterValues => {
    setFilter(filterValues);
  };

  const onOrder = orderValue => {
    if (orderValue.order) {
      setFilter({ order: 'DESC', sort: 'title' });
    } else {
      setFilter({ order: 'ASC', sort: 'title' });
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
      {showModal && <MoviesModal togleModal={toggleModal} />}
      <InputSet
        onFileChange={onFileChange}
        onFileUpload={onFileUpload}
        toggleModal={toggleModal}
      />
      <FilterSet
        onFilter={onFilter}
        onOrder={onOrder}
        reset={() => setFilter({})}
      />
      <MoviesList />
      <ExitButton />
    </div>
  );
};

export default MoviesView;
