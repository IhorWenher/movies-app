import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userOperations } from '../../redux/user';
import { Link } from 'react-router-dom';

import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Styles from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    try {
      e.preventDefault();
      dispatch(userOperations.logIn({ email, password }));
      setEmail('');
      setPassword('');
    } catch (error) {
      toast.error('Incorrect data');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className={Styles.form} autoComplete="off">
      <h1 className={Styles.h1}>Login</h1>
      <Form.Group className="mb-3" controlId="formLoginEmail">
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLoginPassword">
        <Form.Control
          type="password"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Form.Group>
      <div className={Styles.buttons}>
        <Button variant="primary" type="submit" className={Styles.button}>
          Enter
        </Button>
        <p>or</p>
        <Link to="/register" className={Styles.authLink}>
          <Button variant="primary" type="submit" className={Styles.button}>
            Sign In
          </Button>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
