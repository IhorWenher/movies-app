import { useDispatch } from 'react-redux';
import { moviesOperations } from '../../redux/movies';

import Backdrop from '../Backdrop';
import { Button } from 'react-bootstrap';

import Styles from './MovieRemoveModal.module.css';

const MovieRemoveModal = ({ id, toggleRemoveModal }) => {
  const dispatch = useDispatch();

  const onRemove = () => {
    dispatch(moviesOperations.remove(id));
    toggleRemoveModal();
  };

  return (
    <Backdrop>
      <div className={Styles.confirmContainer}>
        <p className={Styles.text}>
          Are you sure you want to delete this movie?
        </p>
        <div>
          <button className={Styles.btn} type="button" onClick={onRemove}>
            <span>Yes, delete!</span>
          </button>
          <Button className={Styles.btn} onClick={toggleRemoveModal}>
            <span>No, cancel</span>
          </Button>
        </div>
      </div>
    </Backdrop>
  );
};

export default MovieRemoveModal;
