import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { moviesOperations, moviesSelectors } from '../../redux/movies';

import { Button } from 'react-bootstrap';
import Styles from './MoviesList.module.css';

const MoviesList = () => {
  const dispatch = useDispatch();

  const movies = useSelector(moviesSelectors.getMovies);

  return (
    <>
      <ul className={Styles.list}>
        {movies.map(({ id, title, year, format }) => {
          return (
            <li key={id} className={Styles.li}>
              <span className={Styles.span}>Id: {id}</span>
              <span className={Styles.span}>Title: {title}</span>
              <span className={Styles.span}>Year: {year}</span>
              <span className={Styles.span}>Format: {format}</span>

              <Link to={`/movies/${id}`} className={Styles.btn}>
                <Button variant="primary" type="button">
                  Show more
                </Button>
              </Link>

              <Button
              className={Styles.deleteBtn}
                variant="primary"
                type="button"
                onClick={() => dispatch(moviesOperations.remove(id))}
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
