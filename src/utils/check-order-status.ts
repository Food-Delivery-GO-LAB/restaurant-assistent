import { IOrderStatus, OrderStatus } from '../types/orders.types';

export const changeStatusColor = (data: IOrderStatus) => {
  switch (data.status) {
    case OrderStatus.NEW:
      return '#12AB74';
    case OrderStatus.IN_PROGRESS:
      return '#F87E25';
    case OrderStatus.READY_FOR_DELIVERY:
      return '#826DD7';
    default:
      return 'black';
  }
};
