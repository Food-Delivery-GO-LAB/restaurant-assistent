import { useQuery } from 'react-query';
import request from '../request';

export const useOrderNotification = () =>
  useQuery(
    'order-notification',
    () =>
      request
        .get<{ data: boolean }>('/order/check-new-orders-mark')
        .then((res) => res.data),
    {
      refetchInterval: 5000,
    }
  );
