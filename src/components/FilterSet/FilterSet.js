import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import { toast } from 'react-toastify';

import Styles from './FilterSet.module.css';

const FilterSet = ({ onFilter, onOrder, reset }) => {
  const [title, setTitle] = useState('');
  const [actor, setActor] = useState('');
  const [order, setOrder] = useState(true);

  const onFilterChange = e => {
    e.preventDefault();
    const { name, value } = e.currentTarget;

    if (name) {
      switch (name) {
        case 'title':
          setTitle(value);
          break;

        case 'actor':
          setActor(value);
          break;

        default:
          return;
      }
    } else {
      toast.error('Incorrect input data');
    }
  };

  const onOrderFunc = () => {
    onOrder({ order: !order });
    setOrder(!order);
  };

  const onFilterConfirm = () => {
    if (actor === '' && title === '') {
      return;
    } else if (actor !== '' && title === '') {
      onFilter({ actor });
    } else if (actor === '' && title !== '') {
      onFilter({ title });
    } else if (actor !== '' && title !== '') {
      onFilter({ title, actor });
    }
  };

  const onReset = () => {
    reset();
    setActor('');
    setTitle('');
  };

  return (
    <div className={Styles.filter}>
      <Button
        variant="primary"
        type="button"
        className={Styles.sortButton}
        onClick={onOrderFunc}
      >
        Sort {order ? <span>A-Z</span> : <span>Z-A</span>}
      </Button>

      <Form.Control
        className={Styles.input}
        type="text"
        placeholder="Filter by title"
        name="title"
        value={title}
        onChange={onFilterChange}
      />
      <Button
        variant="outline-primary"
        type="submit"
        className={Styles.filterButton}
        onClick={onFilterConfirm}
      >
        Filter
      </Button>

      <Form.Control
        className={Styles.input}
        type="name"
        placeholder="Filter by actors name"
        name="actor"
        value={actor}
        onChange={onFilterChange}
      />
      <Button
        variant="outline-primary"
        type="submit"
        className={Styles.filterButton}
        onClick={onFilterConfirm}
      >
        Filter
      </Button>

      <Button
        variant="primary"
        type="submit"
        className={Styles.resetButton}
        onClick={onReset}
      >
        Reset
      </Button>
    </div>
  );
};

export default FilterSet;
