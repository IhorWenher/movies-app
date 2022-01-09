import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { moviesOperations } from '../../redux/movies';

import Backdrop from '../Backdrop';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Styles from './Movies.module.css';

const MoviesModal = ({ togleModal }) => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [format, setFormat] = useState('VHS');
  const [actor, setActor] = useState('');
  const [actors, setActors] = useState([]);

  const dispatch = useDispatch();

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'title':
        setTitle(value);
        break;

      case 'year':
        setYear(Number(value));
        break;

      case 'format':
        setFormat(value);
        break;

      case 'actors':
        setActor(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const actorsValidator = actors => {
      const pattern =
        /^[a-zA-Zа-яА-Я]+(([, ' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

      const validatedArray = actors.map(actor => {
        const value = pattern.test(actor);
        return value;
      });

      return validatedArray;
    };

    if (title === '') {
      toast.warn('Title is required');
      return;
    } else if (2022 > year > 1930 || year === 0) {
      toast.warn('Enter year from 1930 to 2022');
      return;
    } else if (actors.length < 1) {
      toast.warn('Please, add actors');
      return;
    } else if (actorsValidator(actors).includes(false)) {
      toast.warn(
        'The name can only consist of letters, apostrophe, comma, dash and spaces.',
      );
      return;
    }

    const movie = {
      title,
      year,
      format,
      actors,
    };

    togleModal();

    dispatch(moviesOperations.create(movie));
    reset();
  };

  const reset = () => {
    setTitle('');
    setYear('');
    setFormat('');
    setActor('');
    setActors([]);
  };

  const addActors = () => {
    setActors([...actors, actor]);
  };

  return (
    <Backdrop>
      <form className={Styles.form} action="" onSubmit={handleSubmit}>
        <p className={Styles.p}>Enter information about movie</p>
        <input
          className={Styles.input}
          name="title"
          type="text"
          placeholder="Movie name"
          onChange={handleChange}
        />
        <input
          className={Styles.input}
          name="year"
          type="number"
          max="2022"
          min="1930"
          placeholder="Year realise"
          onChange={handleChange}
        />
        <select className={Styles.select} name="format" onChange={handleChange}>
          <option value="VHS">VHS</option>
          <option value="DVD">DVD</option>
          <option value="Blu-Ray">Blu-Ray</option>
        </select>
        <input
          className={Styles.input}
          name="actors"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([, ' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only consist of letters, apostrophe, comma, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
          onChange={handleChange}
          placeholder="Add actors"
        />
        <span>You added {actors.length} actors</span>
        <Button
          type="button"
          className={Styles.addActorsButton}
          onClick={addActors}
        >
          <span>Add</span>
        </Button>

        <div className={Styles.buttons}>
          <input type="submit" value="Add" />
          <button type="button" className={Styles.btn} onClick={togleModal}>
            Cancel
          </button>
        </div>
      </form>
    </Backdrop>
  );
};

export default MoviesModal;
