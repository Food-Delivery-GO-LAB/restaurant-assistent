import { useQuery } from 'react-query';
import request from '../request';

export const useDish = (id: string) =>
  useQuery(['dish'], () =>
    request.get(`/dish/restaurant/${id}`).then((res) => res.data)
  );
