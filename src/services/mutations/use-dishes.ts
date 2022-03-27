import { useMutation, useQueryClient } from 'react-query';
import { useSnackbar } from 'notistack';
import request from '../request';
import { UpdatedDish } from '../../types/dish.types';

export const useUpdateDish = (id: string | undefined) => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(
    (data: UpdatedDish) =>
      request.put(`/dish/${id}`, data).then((res) => res.data),
    {
      onSuccess() {
        enqueueSnackbar('Dish information changed', { variant: 'success' });
      },
    }
  );
};

export const useAddDish = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(
    (data: UpdatedDish) => request.post('/dish', data).then((res) => res.data),
    {
      onSuccess() {
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
