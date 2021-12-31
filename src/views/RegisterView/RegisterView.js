import RegisterForm from '../../components/RegisterForm';
import image from '../../images/clapperboard.png';

import Styles from './RegisterView.module.css';

const RegisterView = () => {
  return (
    <div className={Styles.container}>
      <img src={image} alt="videotape" width="500" />
      <RegisterForm />
    </div>
  );
};

export default RegisterView;
