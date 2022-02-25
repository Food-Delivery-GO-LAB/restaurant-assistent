export enum Order {
  NEW = 'New',
  CANCELED = 'Canceled',
  IN_PROGRESS = 'In progress',
  READY_FOR_DELIVERY = 'Ready for delivery',
  COMPLETED = 'Completed',
}

export interface IOrderStatus {
  status:
    | 'New'
    | 'In progress'
    | 'Ready for delivery'
    | 'Completed'
    | 'Canceled';
}
