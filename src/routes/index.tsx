import React from 'react';
import { useAuth } from '../state/auth/auth.state';
import ManagerRoute from './manager.route';
import AuthRoute from './auth.route';

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

const Pages = () => {
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

export default Pages;
