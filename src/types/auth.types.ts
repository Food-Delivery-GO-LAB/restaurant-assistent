export type FormType = 'login' | 'registration' | 'passRestore';

export interface IUserTokenData {
  UserId: number;
  Role: string;
  exp: number;
}

export interface Tokens {
  tokens: {
    access: string;
    refresh: string;
  };
}

export type UserData = {
  userId: string;
  role: string;
};

export type Login = {
  type: 'LOGIN';
  payload: {
    accessToken: string;
    refreshToken: string;
  };
};

export type Logout = {
  type: 'LOGOUT';
};

export type SetAuthCredentials = {
  type: 'SET_AUTH_CREDENTIALS';
  payload: {
    userId: string;
    role: string;
  };
};

export interface AuthCredentials extends Tokens {
  userId: string;
  role: string;
}

export interface AuthContextInterface extends AuthCredentials {
  login: (data: Tokens) => void;
  logout: () => void;
}

export type AuthActions = Login | SetAuthCredentials | Logout;
