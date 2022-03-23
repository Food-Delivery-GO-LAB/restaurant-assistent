import { AuthActions, AuthCredentials } from '../../types/auth.types';
import { getStorage } from '../../utils/local-storage';

export const initialState = {
  userId: getStorage('userId') ?? '',
  role: getStorage('role') ?? '',
  tokens: {
    access: getStorage('accessToken') ?? '',
    refresh: getStorage('refreshToken') ?? '',
  },
};

export const authReducer = (state: AuthCredentials, action: AuthActions) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        tokens: {
          refresh: action.payload.refreshToken,
          access: action.payload.accessToken,
        },
        userId: state.userId,
        role: state.role,
      };
    case 'SET_AUTH_CREDENTIALS':
      return {
        ...state,
        userId: action.payload.userId,
        role: action.payload.role,
      };
    case 'LOGOUT':
      window.location.reload();
      return {
        userId: '',
        role: '',
        tokens: {
          access: '',
          refresh: '',
        },
      };
    default:
      return state;
  }
};
