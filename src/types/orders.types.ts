export enum OrderStatus {
  NEW = 'New',
  CANCELED = 'Canceled',
  IN_PROGRESS = 'In progress',
  READY_FOR_DELIVERY = 'Ready for delivery',
  COMPLETED = 'Completed',
}

export enum OrderStatusNum {
  NEW = 1,
  IN_PROGRESS = 2,
  READY_FOR_DELIVERY = 3,
  COMPLETED = 4,
  CANCELED = 5,
}

export type Status =
  | 'New'
  | 'In progress'
  | 'Ready for delivery'
  | 'Completed'
  | 'Canceled';

export interface Order {
  id: string;
  orderId: number;
  cost: number;
  date: Date;
  address: string;
  dishes: Dish[];
  status: Status;
}

type Dish = {
  name: string;
  amount: number;
};
