import jwtDecode from 'jwt-decode';
import { IUserTokenData, Login, Logout, Tokens } from '../../types/auth.types';
import { removeStorage, setStorage } from '../../utils/local-storage';

export const login = (data: Tokens): Login => {
  const { UserId: id, Role: role }: IUserTokenData = jwtDecode(
    data.tokens.access
  );
  setStorage('accessToken', data.tokens.access);
  setStorage('refreshToken', data.tokens.refresh);
  setStorage('userId', id);
  setStorage('role', role);
  return {
    type: 'LOGIN',
    payload: {
      accessToken: data.tokens.access,
      refreshToken: data.tokens.refresh,
    },
  };
};

export const logout = (): Logout => {
  removeStorage('accessToken');
  removeStorage('refreshToken');
  removeStorage('userId');
  removeStorage('role');
  return {
    type: 'LOGOUT',
  };
};
