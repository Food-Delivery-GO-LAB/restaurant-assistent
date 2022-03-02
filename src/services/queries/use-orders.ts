import { useQuery } from 'react-query';
import request from '../request';
import { Order } from '../../types/orders.types';

interface OrderRequests {
  limit: number;
}

export const useOrders = (data: OrderRequests) =>
  useQuery(['orders'], () =>
    request
      .get<{ data: Order[] }>(`/order?limit=${data.limit}`)
      .then((res) => res.data.data)
  );
