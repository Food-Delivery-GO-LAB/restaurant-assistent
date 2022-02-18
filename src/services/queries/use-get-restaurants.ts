import { useQuery } from 'react-query';
import request from '../request';

export const useGetRestaurants = () =>
  useQuery(['restaurants'], () =>
    request.get('/restaurant').then((res) => res.data)
  );
