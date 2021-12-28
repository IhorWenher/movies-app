import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner } from 'react-bootstrap';

import { moviesSelectors } from '../../redux/movies';
import { userOperations } from '../../redux/user';

/* import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
 */
import Styles from './MoviesView.module.css';

const MoviesView = () => {
  const loading = useSelector(moviesSelectors.getLoading);
  const movies = useSelector(moviesSelectors.getMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(userOperations.logOut);
      Storage.clear();
    };
  }, [dispatch]);

  return (
    <div className={Styles.container}>
      Movies
      {/* <h2 className={Styles.h2}>Phonebook page</h2>
      <ContactForm />
      <h2 className={Styles.h2}>
        {contactsLength !== 0 && 'Contacts'}
        {loading && <Spinner animation="border" variant="primary" />}
      </h2>

      {contactsLength > 1 && <Filter />}
      <ContactList /> */}
    </div>
  );
};

export default MoviesView;
