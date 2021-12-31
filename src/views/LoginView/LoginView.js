import LoginForm from '../../components/LoginForm';
import image from '../../images/play.png';
import Styles from './LoginView.module.css';

const LoginView = () => {
  return (
    <div className={Styles.container}>
      <img src={image} alt="play" width="500" />
      <LoginForm />
    </div>
  );
};

export default LoginView;
