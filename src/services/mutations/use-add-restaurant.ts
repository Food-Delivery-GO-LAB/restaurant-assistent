import { useMutation } from 'react-query';
import { IRestaurant } from '../../types/restaurant.types';
import request from '../request';

export const useAddRestaurant = () =>
  useMutation((data: IRestaurant) =>
    request.post<{ id: string }>('/restaurant', data).then((res) => res.data)
  );
