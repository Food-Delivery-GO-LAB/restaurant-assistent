import { useQuery } from 'react-query';
import request from '../request';
import { Dish } from '../../types/dish.types';

export const useDishes = (id: string) =>
  useQuery(['dishes'], () =>
    request
      .get<{ data: Dish[] }>(`/dish/restaurant/${id}`)
      .then((res) => res.data.data)
  );
