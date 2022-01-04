import { Form, Button } from 'react-bootstrap';
import Styles from './FilterSet.module.css';

const FilterSet = () => {
  const onFilterChange = e => {
    console.log(e.target.value);
  };

  return (
    <div className={Styles.filter}>
      <Button
        variant="outline-primary"
        type="button"
        className={Styles.button}
        onClick={onFilterChange}
      >
        Sort {}
        <span>A-Z</span>
      </Button>

      <Form.Control
        className={Styles.input}
        type="text"
        placeholder="Filter by title"
        name="title"
        onChange={onFilterChange}
      />
      <Button variant="outline-primary" type="submit" className={Styles.button}>
        Filter
      </Button>

      <Form.Control
        className={Styles.input}
        type="name"
        placeholder="Filter by actors name"
        name="name"
        onChange={onFilterChange}
      />
      <Button variant="outline-primary" type="submit" className={Styles.button}>
        Filter
      </Button>
    </div>
  );
};

export default FilterSet;
