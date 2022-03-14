import { useMutation } from 'react-query';
import request from '../request';
import { UpdatedDish } from '../../types/dish.types';

export const useUpdateDish = (id: string | undefined) =>
  useMutation((data: UpdatedDish) =>
    request.put(`/dish/${id}`, data).then((res) => res.data)
  );
