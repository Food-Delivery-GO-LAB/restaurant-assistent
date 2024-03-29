import { OrderStatus, Status } from '../types/orders.types';
import { colors } from '../styles/variables';

export const changeStatusColor = (data: Status) => {
  switch (data) {
    case OrderStatus.NEW:
      return '#12AB74';
    case OrderStatus.IN_PROGRESS:
      return '#F87E25';
    case OrderStatus.READY_FOR_DELIVERY:
      return '#826DD7';
    case OrderStatus.COMPLETED:
      return `${colors.green}`;
    default:
      return 'black';
  }
};
