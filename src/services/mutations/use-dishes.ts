import { useMutation, useQueryClient } from 'react-query';
import request from '../request';
import { NewDish, UpdatedDish } from '../../types/dish.types';

export const useUpdateDish = (id: string | undefined) => {
  const qc = useQueryClient();
  return useMutation(
    (data: UpdatedDish) =>
      request.put(`/dish/${id}`, data).then((res) => res.data),
    {
      onSuccess() {
        qc.invalidateQueries('dishes');
      },
    }
  );
};

export const useAddDish = () => {
  const qc = useQueryClient();
  return useMutation(
    (data: NewDish) => request.post('/dish', data).then((res) => res.data),
    {
      onSuccess() {
        qc.invalidateQueries('dishes');
      },
    }
  );
};

export const useDeleteDish = () => {
  const qc = useQueryClient();
  return useMutation((id: string) => request.delete(`/dish/${id}`), {
    onSuccess() {
      qc.invalidateQueries('dishes');
    },
  });
};
