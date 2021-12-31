import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { moviesSelectors, moviesOperations } from '../../redux/movies';
import { userOperations } from '../../redux/user';

import Backdrop from '../../components/Backdrop';
import MoviesModal from '../../components/MoviesModal';

/* import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
 */
import Styles from './MoviesView.module.css';

const MoviesView = () => {
  const [showModal, setShowModal] = useState(false);
  const loading = useSelector(moviesSelectors.getLoading);
  const movies = useSelector(moviesSelectors.getMovies);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  /* 
  useEffect(() => {
    dispatch(moviesOperations.getList());
    console.log(movies);
  }, [dispatch, movies]);
 */
  console.log(showModal);
  /* useEffect(() => {
    return () => {
      dispatch(userOperations.logOut);
      Storage.clear();
    };
  }, [dispatch]);
 */
  return (
    <div className={Styles.container}>
      <p>You have no movies yet, please press '+' to add your first</p>
      <h2>Movies</h2>
      {showModal && (
        <Backdrop>
          <MoviesModal togleModal={toggleModal} />
        </Backdrop>
      )}

      <Button
        variant="primary"
        type="submit"
        className={Styles.button}
        onClick={toggleModal}
      >
        Add
      </Button>

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
