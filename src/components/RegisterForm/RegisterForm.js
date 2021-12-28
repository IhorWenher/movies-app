import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userOperations } from '../../redux/user';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { validate } from 'indicative/validator';
import { alert } from '@pnotify/core';

import Styles from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setConfirmPassword] = useState('');

  const schema = {
    name: 'string|min:1|max:12',
    email: 'required|email',
    password: 'required|min:6|max:12|confirmed',
    password_confirmation: 'required|min:6|max:12',
  };

  const messages = {
    required: 'Make sure to enter email and password',
    email: 'Enter valid email address',
    min: 'The value of name or password is too small',
    max: 'The value of name or password is too large',
    confirmed: 'Entered passwords do not mutch',
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      case 'password_confirmation':
        return setConfirmPassword(value);

      default:
        return;
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await validate(
        { name, email, password, password_confirmation },
        schema,
        messages,
      );

      dispatch(
        userOperations.register({
          name,
          email,
          password,
          confirmPassword: password_confirmation,
        }),
      );
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
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
  }

  return (
    <Form onSubmit={handleSubmit} className={Styles.form} autoComplete="off">
      <Form.Group className="mb-3" controlId="formRegName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          placeholder="Enter name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formRegEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formRegPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formRegConfPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm your password"
          name="password_confirmation"
          value={password_confirmation}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className={Styles.button}>
        Register
      </Button>
      <p>or</p>
      <Link to="/login" className={Styles.authLink}>
        <Button className={Styles.logBtn} type="submit">
          Log in
        </Button>
      </Link>
    </Form>
  );
};

export default RegisterForm;
