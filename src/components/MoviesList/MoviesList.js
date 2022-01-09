import { useState } from 'react';
import { useSelector } from 'react-redux';
import { moviesSelectors } from '../../redux/movies';

import MovieDetailModal from '../MovieDetailModal';
import MovieRemoveModal from '../MovieRemoveModal';

import { Button } from 'react-bootstrap';
import Styles from './MoviesList.module.css';

const MoviesList = () => {
  const [showMovieModal, setShowMovieModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [idToDetail, setIdToDetail] = useState(null);
  const [idToRemove, setIdToRemove] = useState(null);

  const movies = useSelector(moviesSelectors.getMovies);

  const onDetailRequest = id => {
    setIdToDetail(id);
    setShowMovieModal(true);
  };

  const onRemoveRequest = id => {
    setIdToRemove(id);
    setShowRemoveModal(true);
  };

  return (
    <>
      {showMovieModal && (
        <MovieDetailModal
          id={idToDetail}
          toggleDetailModal={() => setShowMovieModal(false)}
        />
      )}
      {showRemoveModal && (
        <MovieRemoveModal
          id={idToRemove}
          toggleRemoveModal={() => setShowRemoveModal(false)}
        />
      )}
      <ul className={Styles.list}>
        {movies.map(({ id, title, year, format }) => {
          return (
            <li key={id} className={Styles.li}>
              <span className={Styles.span}>Id: {id}</span>
              <span className={Styles.span}>Title: {title}</span>
              <span className={Styles.span}>Year: {year}</span>
              <span className={Styles.span}>Format: {format}</span>

              <Button
                variant="primary"
                type="button"
                onClick={() => onDetailRequest(id)}
              >
                Show more
              </Button>

              <Button
                className={Styles.deleteBtn}
                variant="primary"
                type="button"
                onClick={() => onRemoveRequest(id)}
              >
                Delete
              </Button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MoviesList;
