/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useMemo } from 'react';
import { login as loginAction, logout as logoutAction } from './auth.actions';
import { authReducer, initialState } from './auth.reducer';
import { AuthContextInterface, Tokens } from '../../types/auth.types';

const AuthContext = React.createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

export const AuthProvider: React.FC = ({ children }) => {
  const [authState, dispatch] = React.useReducer(authReducer, initialState);

  const login = useCallback(
    (data: Tokens) => {
      dispatch(loginAction(data));
    },
    [dispatch]
  );

  const logout = useCallback(() => {
    dispatch(logoutAction());
  }, [dispatch]);

  const authStore = useMemo(
    () => ({
      ...authState,
      login,
      logout,
    }),
    [authState]
  );
  return (
    <AuthContext.Provider value={authStore}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
