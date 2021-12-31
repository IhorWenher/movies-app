import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userSelectors } from '../redux/user';

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(userSelectors.getIsLoggedIn);
  const token = useSelector(userSelectors.getUserToken);
  return <>{isLoggedIn || token ? children : <Navigate to={redirectTo} />}</>;
}
