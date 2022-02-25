import { IOrderStatus, Order } from '../types/orders.types';

export const changeStatusColor = (data: IOrderStatus) => {
  switch (data.status) {
    case Order.NEW:
      return '#12AB74';
    case Order.IN_PROGRESS:
      return '#F87E25';
    case Order.READY_FOR_DELIVERY:
      return '#826DD7';
    default:
      return 'black';
  }
};
