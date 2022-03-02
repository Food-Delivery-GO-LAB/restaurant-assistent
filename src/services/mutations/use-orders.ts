import { useMutation, useQueryClient } from 'react-query';
import request from '../request';

interface RequestData {
  id: string;
  status: number;
}

export const useUpdateOrderStatus = () => {
  const qc = useQueryClient();
  return useMutation(
    (data: RequestData) =>
      request
        .put(`/order/${data.id}`, { status: data.status })
        .then((res) => res.data),
    {
      onSuccess() {
        qc.invalidateQueries('orders');
      },
    }
  );
};
