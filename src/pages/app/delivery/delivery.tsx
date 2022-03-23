import React from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Title from '../../../components/typography/title';
import { StyledBox, Wrapper } from './delivery.style';
import { colors } from '../../../styles/variables';
import { useDeliveryServices } from '../../../services/queries/use-delivery';
import Button from '../../../components/buttons';
import Text from '../../../components/typography/text';
import { useUpdateOrderStatus } from '../../../services/mutations/use-orders';
import { OrderStatusNum } from '../../../types/orders.types';

interface IProps {
  id: string;
  orderId: number;
}

const Delivery: React.FC<IProps> = ({ id, orderId }) => {
  const columns = [
    { id: 'title', label: 'Title' },
    { id: 'phone', label: 'Phone' },
    { id: 'email', label: 'Email' },
    { id: 'status', label: 'Status' },
    { id: 'action', label: 'Action' },
  ];

  const updateOrderSts = useUpdateOrderStatus();
  const deliveryServices = useDeliveryServices();

  const handleClick = (courierService: number) => {
    updateOrderSts.mutate({
      id,
      status: OrderStatusNum.READY_FOR_DELIVERY,
      deliveryType: 2,
      courierService,
    });
  };

  const style = {
    padding: '10px',
  };

  return (
    <Wrapper>
      <Title size="md" fontWeight="500">
        Delivery of OrderID-{orderId}
      </Title>
      <StyledBox>
        <Text>Choose the Courier Service</Text>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    sx={{
                      padding: '10px',
                      backgroundColor: `${colors.white_lighter}`,
                    }}
                    key={column.id}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {deliveryServices.data &&
                deliveryServices.data.map((service) => (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={service.Id}
                    sx={style}
                  >
                    <TableCell sx={style}>{service.ServiceName}</TableCell>
                    <TableCell sx={style}>{service.ServicePhone}</TableCell>
                    <TableCell sx={style}>{service.ServiceEmail}</TableCell>
                    <TableCell sx={style}>
                      {service.ServiceStatus === 'active'
                        ? '✔️ Active'
                        : '❌ Inactive'}
                    </TableCell>
                    <TableCell sx={style}>
                      {service.ServiceStatus === 'active' && (
                        <Button onClick={() => handleClick(service.Id)}>
                          Pass
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledBox>
    </Wrapper>
  );
};

export default Delivery;
