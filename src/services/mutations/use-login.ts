import { useMutation } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LOGIN_URL } from '../../configs/app.config';
import { useAuth } from '../../state/auth/auth.state';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export const useLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  return useMutation(
    (data: LoginRequest) =>
      axios
        .post<LoginResponse>(`${LOGIN_URL}/users/login`, data)
        .then((res) => res.data),
    {
      onSuccess(data) {
        login({
          tokens: { access: data.accessToken, refresh: data.refreshToken },
        });
        navigate('/');
      },
    }
  );
};
