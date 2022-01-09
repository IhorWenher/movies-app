import { ToastContainer } from 'react-toastify';
import Styles from './Container.module.css';

const Container = ({ children }) => {
  return (
    <div className={Styles.container}>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {children}
    </div>
  );
};

export default Container;
