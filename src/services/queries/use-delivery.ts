import { useQuery } from 'react-query';
import request from '../request';
import { Paginated } from '../../types/utility.types';
import { DeliveryService } from '../../types/delivery.types';

export const useDeliveryServices = () =>
  useQuery('delivery-services', () =>
    request
      .get<Paginated<DeliveryService>>('/order/delivery-service')
      .then((res) => res.data.data)
  );
