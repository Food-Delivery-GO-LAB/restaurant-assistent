import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { ButtonContainer, StyledStatus, Wrapper } from './active-orders.style';
import Title from '../../../components/typography/title';
import Button from '../../../components/buttons/button';
import { OrderStatus, OrderStatusNum } from '../../../types/orders.types';
import { useOrders } from '../../../services/queries/use-orders';
import { colors } from '../../../styles/variables';
import ActiveOrdersButton from './active-orders-button';
import { useModal } from '../../../hooks/use-modal';
import Modal from '../../../components/modal';
import Spinner from '../../../components/loaders/spinner';
import DeliveryIcon from '../../../components/icons/delivery.icon';
import CheckIcon from '../../../components/icons/check.icon';
import CancelIcon from '../../../components/icons/cancel.icon';

interface Column {
  id:
    | 'orderId'
    | 'date'
    | 'address'
    | 'dishes'
    | 'total'
    | 'status'
    | 'actions';
  label: string;
}

const columns: readonly Column[] = [
  { id: 'orderId', label: 'Order ID' },
  { id: 'date', label: 'Time | Date' },
  { id: 'address', label: 'Address' },
  { id: 'dishes', label: 'Dishes' },
  { id: 'total', label: 'Total' },
  { id: 'status', label: 'Status' },
  { id: 'actions', label: 'Actions' },
];

const ActiveOrders = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [orderId, setOrderId] = useState('');

  const dishModal = useModal();
  const DishModal = React.lazy(() => import('./dish-modal'));

  const orders = useOrders({ limit: 10 });

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Wrapper>
      <Spinner loading={orders.isLoading}>
        <Title position="left" size="md">
          Active Orders
        </Title>
        <Paper
          sx={{
            width: '100%',
            maxHeight: '75vh',
            overflow: 'auto',
            borderRadius: '4px',
          }}
        >
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      sx={{
                        fontSize: '1em',
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
                {orders.data &&
                  orders.data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((order) => (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={order.orderId}
                      >
                        <TableCell>{order.orderId}</TableCell>
                        <TableCell>
                          {new Date(order.date).toLocaleTimeString()}
                          {', '}
                          {new Date(order.date).toLocaleDateString()}
                        </TableCell>
                        <TableCell>{order.address}</TableCell>
                        <TableCell>
                          <Button
                            onClick={() => {
                              setOrderId(order.id);
                              dishModal.open();
                            }}
                            buttonType="secondary"
                          >
                            View
                          </Button>
                          <Modal
                            open={dishModal.isOpen}
                            onClose={dishModal.close}
                          >
                            <React.Suspense fallback={<Spinner />}>
                              <DishModal id={orderId} />
                            </React.Suspense>
                          </Modal>
                        </TableCell>
                        <TableCell>{order.cost} BYN</TableCell>
                        <TableCell
                          sx={{
                            p: '10px',
                            minWidth: 160,
                          }}
                        >
                          <StyledStatus status={order.status}>
                            {order.status}
                          </StyledStatus>
                        </TableCell>
                        <TableCell>
                          <ButtonContainer>
                            {order.status === OrderStatus.IN_PROGRESS && (
                              <ActiveOrdersButton
                                buttonType="primary"
                                id={order.id}
                                icon={<DeliveryIcon />}
                                text="Deliver"
                                status={OrderStatusNum.READY_FOR_DELIVERY}
                              />
                            )}
                            {order.status === OrderStatus.NEW && (
                              <ActiveOrdersButton
                                buttonType="primary"
                                id={order.id}
                                icon={<CheckIcon />}
                                text="Accept"
                                status={OrderStatusNum.IN_PROGRESS}
                              />
                            )}
                            {(order.status === OrderStatus.NEW ||
                              order.status === OrderStatus.IN_PROGRESS) && (
                              <ActiveOrdersButton
                                buttonType="text"
                                id={order.id}
                                icon={<CancelIcon />}
                                text="Reject"
                                status={OrderStatusNum.CANCELED}
                              />
                            )}
                          </ButtonContainer>
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 50]}
            component="div"
            count={orders.data?.length ?? 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Spinner>
    </Wrapper>
  );
};

export default ActiveOrders;
