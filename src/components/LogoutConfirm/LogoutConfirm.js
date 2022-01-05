import { useDispatch } from 'react-redux';
import { userOperations } from '../../redux/user';
import { Link } from 'react-router-dom';

import Styles from './LogoutConfirm.module.css';

const LogoutConfirm = () => {
  const dispatch = useDispatch();

  return (
    <div className={Styles.confirmContainer}>
      <p className={Styles.text}>Are you sure?</p>
      <div>
        <button
          className={Styles.btn}
          type="button"
          onClick={() => dispatch(userOperations.logOut())}
        >
          <span>Yes, exit!</span>
        </button>
        <Link to="/movies" className={Styles.btn}>
          <span>No, cancel</span>
        </Link>
      </div>
    </div>
  );
};

export default LogoutConfirm;
