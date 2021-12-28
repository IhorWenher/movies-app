import { useState } from 'react';
import { useDispatch } from 'react-redux';
//import { accountsOperations } from '../../redux/accounts';

import Styles from './Movies.module.css';

const AccountModal = ({ togleModal }) => {
  /*   const [company, setCompany] = useState('Nvidia');
  const [gameName, setGameName] = useState('');
  const [sum, setSum] = useState('');
  const [currency, setCurrency] = useState('Euro');

  const dispatch = useDispatch();

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'company':
        setCompany(value);
        break;

      case 'gameName':
        setGameName(value);
        break;

      case 'sum':
        setSum(Number(value));
        break;

      case 'currency':
        setCurrency(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (gameName === '' || sum === '') {
      return alert('Enter data!');
    }

    const account = {
      company: company,
      gameName: gameName,
      sum: sum,
      currency: currency,
    };

    togleModal();

    dispatch(accountsOperations.addAccount(account));
    reset();
  };

  const reset = () => {
    setCompany('');
    setGameName('');
    setSum('');
    setCurrency('');
  }; */

  return {
    /* <form className={Styles.form} action="" onSubmit={handleSubmit}>
      <p className={Styles.p}>Введите информацию</p>
      <select className={Styles.select} name="company" onChange={handleChange}>
        <option value="Nvidia">Nvidia</option>
        <option value="Activision">Activision</option>
        <option value="Easports">Easports</option>
      </select>
      <input
        className={Styles.input}
        name="gameName"
        type="text"
        placeholder="Введите название игры"
        onChange={handleChange}
      />
      <input
        className={Styles.input}
        name="sum"
        type="number"
        placeholder="Введите сумму оплаты"
        onChange={handleChange}
      />
      <select className={Styles.select} name="currency" onChange={handleChange}>
        <option value="Euro">Euro</option>
        <option value="Dollar">Dollar</option>
      </select>

      <div className={Styles.buttons}>
        <input type="submit" value="Добавить" />
        <button type="button" className={Styles.btn} onClick={togleModal}>
          Отмена
        </button>
      </div>
    </form> */
  };
};

export default AccountModal;
