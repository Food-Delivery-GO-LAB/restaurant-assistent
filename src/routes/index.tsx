import React from 'react';
import { useAuth } from '../state/auth/auth.state';
import ManagerRoute from './manager.routes';
import AuthRoute from './auth.routes';

const UnAuthenticatedRouter = () => (
  <>
    <AuthRoute />
  </>
);

const AuthenticatedRouter = () => (
  <>
    <ManagerRoute />
  </>
);

const AppPages = () => {
  const user = useAuth();
  return (
    <>
      {user.tokens?.access ? (
        <AuthenticatedRouter />
      ) : (
        <UnAuthenticatedRouter />
      )}
    </>
  );
};

export default AppPages;
