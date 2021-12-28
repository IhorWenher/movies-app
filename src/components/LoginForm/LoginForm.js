import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userOperations } from '../../redux/user';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

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
      alert({
        text: error[0].message,
        hide: true,
        delay: 2000,
        sticker: false,
        closer: true,
        dir1: 'down',
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit} className={Styles.form} autoComplete="off">
      <Form.Group className="mb-3" controlId="formLoginEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLoginPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className={Styles.button}>
        Enter
      </Button>
      <p>or</p>
      <Link to="/register" className={Styles.authLink}>
        <Button variant="primary" type="submit" className={Styles.button}>
          Sign In
        </Button>
      </Link>
    </Form>
  );
};

export default LoginForm;
