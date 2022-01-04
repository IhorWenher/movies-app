import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { moviesOperations, moviesSelectors } from '../../redux/movies';

import Styles from './MovieDetailView.module.css';
import { Button } from 'react-bootstrap';

const MovieDetailView = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moviesOperations.getOne(id));
  }, [dispatch, id]);

  const movie = useSelector(moviesSelectors.getOneMovie);

  return (
    <div className={Styles.container}>
      {movie.actors && (
        <>
          <h1>{movie.title}</h1>
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

          <Link to={`/movies`} className={Styles.btn}>
            <Button variant="primary" type="button">
              Back to movies
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default MovieDetailView;
