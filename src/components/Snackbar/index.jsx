/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Expire } from './styles';

function Snackbar({ autoHideDuration, children, setActions }) {
  const setTimer = (delay) => {
    setTimeout(() => {
      setActions('');
    }, delay);
  };

  useEffect(() => {
    setTimer(autoHideDuration);
  }, []);

  return <Expire>{children}</Expire>;
}

export default Snackbar;
