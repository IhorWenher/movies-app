import RegisterForm from '../../components/RegisterForm';

import Styles from './RegisterView.module.css';

const RegisterView = () => {
  return (
    <div>
      <h1 className={Styles.h1}>Registration</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterView;
