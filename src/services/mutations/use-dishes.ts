import { useMutation, useQueryClient } from 'react-query';
import { useSnackbar } from 'notistack';
import request from '../request';
import { NewDish, UpdatedDish } from '../../types/dish.types';

export const useUpdateDish = (id: string | undefined) => {
  const qc = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(
    (data: UpdatedDish) =>
      request.put(`/dish/${id}`, data).then((res) => res.data),
    {
      onSuccess() {
        qc.invalidateQueries('dishes');
        enqueueSnackbar('Dish information changed', { variant: 'success' });
      },
    }
  );
};

export const useAddDish = () => {
  const qc = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(
    (data: NewDish) => request.post('/dish', data).then((res) => res.data),
    {
      onSuccess() {
        qc.invalidateQueries('dishes');
        enqueueSnackbar('New dish added', { variant: 'success' });
      },
    }
  );
};

export const useDeleteDish = () => {
  const qc = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation((id: string) => request.delete(`/dish/${id}`), {
    onSuccess() {
      qc.invalidateQueries('dishes');
      enqueueSnackbar('Dish deleted', { variant: 'success' });
    },
  });
};
