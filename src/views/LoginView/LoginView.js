import LoginForm from '../../components/LoginForm';

import Styles from './LoginView.module.css';

const LoginView = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.h1}>Enter login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginView;
