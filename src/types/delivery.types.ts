export interface DeliveryService {
  Id: number;
  ServiceEmail: string;
  ServiceName: string;
  ServicePhone: string;
  ServiceStatus: 'active' | 'inactive';
}
