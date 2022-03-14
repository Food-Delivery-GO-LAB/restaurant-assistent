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

interface SingleOrder {
  address: string;
  clientFullName: string;
  clientPhoneNumber: number;
  cost: number;
  deliveryTime: string;
  deliveryType: number;
  dishes: [
    {
      amount: number;
      name: string;
    }
  ];
  id: string;
  orderId: number;
  status: number;
}

export const useSingleOrder = (id: string) =>
  useQuery(['order'], () =>
    request
      .get<{ data: SingleOrder }>(`/order/${id}`)
      .then((res) => res.data.data)
  );
