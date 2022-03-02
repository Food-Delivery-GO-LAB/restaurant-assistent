export enum OrderStatus {
  NEW = 'New',
  CANCELED = 'Canceled',
  IN_PROGRESS = 'In progress',
  READY_FOR_DELIVERY = 'Ready for delivery',
  COMPLETED = 'Completed',
}

export enum OrderStatusNum {
  NEW = 1,
  CANCELED = 2,
  IN_PROGRESS = 3,
  READY_FOR_DELIVERY = 4,
  COMPLETED = 5,
}

export interface IOrderStatus {
  status:
    | 'New'
    | 'In progress'
    | 'Ready for delivery'
    | 'Completed'
    | 'Canceled';
}

export interface Order {
  id: string;
  orderId: number;
  cost: number;
  date: Date;
  address: string;
  dishes: Dish[];
  status:
    | 'New'
    | 'In progress'
    | 'Ready for delivery'
    | 'Completed'
    | 'Canceled';
}

type Dish = {
  name: string;
  amount: number;
};
