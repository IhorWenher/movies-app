import { useDispatch } from 'react-redux';
import { userOperations } from '../../redux/user';
import { NavLink } from 'react-router-dom';

import Styles from './LogoutConfirm.module.css';
import { Button } from 'bootstrap';

export default function LogoutConfirm() {
  const dispatch = useDispatch();

  return (
    <div className={Styles.confirmContainer}>
      <p className={Styles.text}>Вы уверены?</p>
      <div>
        <Button
          className={Styles.btn}
          type="button"
          onClick={() => dispatch(userOperations.logOut())}
        >
          <span>Выйти</span>
        </Button>
        <NavLink to="/" className={Styles.btn}>
          <Button className={Styles.cancel}>
            <span>Отмена</span>
          </Button>
        </NavLink>
      </div>
    </div>
  );
}
