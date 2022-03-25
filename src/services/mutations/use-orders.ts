import { useMutation, useQueryClient } from 'react-query';
import { useSnackbar } from 'notistack';
import request from '../request';

interface RequestData {
  id: string;
  status: number;
  courierService?: number;
  deliveryType: number;
}

export const useUpdateOrderStatus = () => {
  const qc = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  return useMutation(
    (data: RequestData) =>
      request
        .put(`/order/${data.id}`, {
          status: data.status,
          courierService: data.courierService ?? 0,
          deliveryType: data.deliveryType,
        })
        .then((res) => res.data),
    {
      onSuccess() {
        qc.invalidateQueries('orders');
      },
      onError() {
        enqueueSnackbar('Some error occurred', { variant: 'error' });
      },
    }
  );
};
