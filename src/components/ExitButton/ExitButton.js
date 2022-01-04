import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';
import Styles from './ExitButton.module.css';

const ExitButton = () => {
  return (
    <Link to={`/logout`} className={Styles.exitButton}>
      <Button variant="outline-primary" type="button">
        Exit
      </Button>
    </Link>
  );
};

export default ExitButton;
