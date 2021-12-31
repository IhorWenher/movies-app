import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { moviesOperations } from '../../redux/movies';

import Styles from './Movies.module.css';

const MoviesModal = ({ togleModal }) => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [format, setFormat] = useState('VHS');
  const [actors, setActors] = useState('');

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
        setActors(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (title === '' || year === '' || 2022 > actors > 1930) {
      return alert('Enter or correct data!');
    }

    const movie = {
      title: title,
      year: year,
      format: format,
      actors: [actors, actors, actors, actors],
    };
    console.log(movie);
    togleModal();

    dispatch(moviesOperations.create(movie));
    reset();
  };

  const reset = () => {
    setTitle('');
    setYear('');
    setFormat('');
    setActors([]);
  };

  return (
    <>
      <form className={Styles.form} action="" onSubmit={handleSubmit}>
        <p className={Styles.p}>Введите информацию</p>
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
          <option value="Blue-Ray">Blue-Ray</option>
        </select>
        <input
          className={Styles.input}
          name="actors"
          type="text"
          onChange={handleChange}
          placeholder="Add actors"
        />
        <div className={Styles.buttons}>
          <input type="submit" value="Добавить" />
          <button type="button" className={Styles.btn} onClick={togleModal}>
            Отмена
          </button>
        </div>
      </form>
    </>
  );
};

export default MoviesModal;
