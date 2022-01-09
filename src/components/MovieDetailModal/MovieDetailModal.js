import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moviesOperations, moviesSelectors } from '../../redux/movies';

import Backdrop from '../Backdrop';
import Styles from './MovieDetailModal.module.css';
import { Button } from 'react-bootstrap';

const MovieDetailModal = ({ id, toggleDetailModal }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moviesOperations.getOne(id));
  }, [dispatch, id]);

  const movie = useSelector(moviesSelectors.getOneMovie);

  return (
    <Backdrop>
      <div className={Styles.container}>
        {movie.actors && (
          <>
            <h1 className={Styles.title}>{movie.title}</h1>
            <span className={Styles.span}>Year: {movie.year}</span>
            <span className={Styles.span}>Format: {movie.format}</span>
            <ul className={Styles.ul}>
              Actors:
              {movie.actors.map(({ id, name }) => {
                return (
                  <li key={id} className={Styles.li}>
                    <span className={Styles.span}>{name}</span>
                  </li>
                );
              })}
            </ul>

            <Button variant="primary" type="button" onClick={toggleDetailModal}>
              Back to movies
            </Button>
          </>
        )}
      </div>
    </Backdrop>
  );
};

export default MovieDetailModal;
