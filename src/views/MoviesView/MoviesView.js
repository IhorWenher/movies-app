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
import { toast } from 'react-toastify';
import { Pagination } from '@mui/material';

const MoviesView = () => {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState(null);
  const [filter, setFilter] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const isLoading = useSelector(moviesSelectors.getLoading);

  useEffect(() => {
    let offset = 0;
    if (currentPage > 1) {
      offset = (currentPage - 1) * 12;
    }

    const params = {
      ...filter,
      limit: 12,
      offset: offset,
    };

    dispatch(moviesOperations.getList(params));
  }, [filter, currentPage, dispatch]);

  const movies = useSelector(moviesSelectors.getMovies);
  const moviesCount = useSelector(moviesSelectors.getMoviesCount);
  const pagesCount = Math.ceil(moviesCount / 12);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onFileChange = e => {
    const fileFromInput = e.target.files[0];
    const fileArray = fileFromInput.name.split('');
    const format = fileArray.slice(fileArray.length - 4).join('');
    if (format === '.txt') {
      setFile(fileFromInput);
    } else {
      toast.error('Incorrect file format! Please, upload another file');
    }
  };

  const onFileUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append('myFile', file, file.name);
      dispatch(moviesOperations.importFile(file));
    } else {
      toast.error('File not found');
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

  const handlePagination = e => {
    const newPageNumber = Number(e.target.innerText);
    setCurrentPage(newPageNumber);
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
      {movies.length > 0 && (
        <Pagination
          count={pagesCount}
          page={currentPage}
          color="primary"
          className={Styles.pagination}
          onChange={handlePagination}
        />
      )}
      <MoviesList />
      <ExitButton />
    </div>
  );
};

export default MoviesView;
