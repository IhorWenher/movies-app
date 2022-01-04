import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Styles from './FilterSet.module.css';

const FilterSet = ({ onFilter, onOrder, reset }) => {
  const [title, setTitle] = useState(null);
  const [actor, setActor] = useState(null);
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
      alert('Incorrect input data!');
    }
  };

  const onOrderFunc = () => {
    onOrder({ order: !order });
    setOrder(!order);
  };

  const onFilterConfirm = () => {
    onFilter({ title, actor });
    setTitle(null);
    setActor(null);
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
        onClick={reset}
      >
        Reset
      </Button>
    </div>
  );
};

export default FilterSet;
