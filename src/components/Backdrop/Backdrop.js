import React from 'react';
import { createPortal } from 'react-dom';

import Styles from './Backdrop.module.css';

const Backdrop = ({ children }) => {
  const modalRoot = document.querySelector('#modal-root');
  return createPortal(
    <div id="backdrop" className={Styles.backdrop}>
      {children}
    </div>,
    modalRoot,
  );
};

export default Backdrop;
