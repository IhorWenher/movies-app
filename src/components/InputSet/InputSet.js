import { Form, Button } from 'react-bootstrap';
import Styles from './InputSet.module.css';

const InputSet = ({ onFileChange, onFileUpload, toggleModal }) => {
  return (
    <div className={Styles.inputContainer}>
      <Button variant="primary" type="submit" onClick={toggleModal}>
        Add +
      </Button>
      <span className={Styles.span}>or</span>
      <Form.Control
        className={Styles.input}
        type="file"
        onChange={onFileChange}
      />
      <Button className={Styles.uploadButton} onClick={onFileUpload}>
        Upload
      </Button>
    </div>
  );
};

export default InputSet;
