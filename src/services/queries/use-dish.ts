import { useQuery } from 'react-query';
import request from '../request';
import { Dish } from '../../types/dish.types';

export const useDishes = (id: string) =>
  useQuery(['dishes'], () =>
    request
      .get<{ data: Dish[] }>(`/dish/restaurant/${id}`)
      .then((res) => res.data.data)
  );

interface DishType {
  name: string;
  id: string;
}

export const useDishTypes = () =>
  useQuery('dishTypes', () =>
    request
      .get<{ data: DishType[] }>('/dish/types')
      .then((res) => res.data.data)
  );
