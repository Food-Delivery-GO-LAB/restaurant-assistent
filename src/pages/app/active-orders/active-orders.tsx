import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { ButtonContainer, StyledStatus, Wrapper } from './active-orders.style';
import Title from '../../../components/typography/title';
import Button from '../../../components/buttons/button';
import { OrderStatus, OrderStatusNum } from '../../../types/orders.types';
import { useOrders } from '../../../services/queries/use-orders';
import { colors } from '../../../styles/variables';
import ActiveOrdersButton from './active-orders-button';

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
  { id: 'date', label: 'Date' },
  { id: 'address', label: 'Address' },
  { id: 'dishes', label: 'Dishes' },
  { id: 'total', label: 'Total' },
  { id: 'status', label: 'Status' },
  { id: 'actions', label: 'Actions' },
];

const ActiveOrders = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
                        <Button buttonType="secondary">View</Button>
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
                          {order.status === OrderStatus.NEW && (
                            <ActiveOrdersButton
                              buttonType="primary"
                              id={order.id}
                              text="Accept"
                              status={OrderStatusNum.IN_PROGRESS}
                            />
                          )}
                          {(order.status === OrderStatus.NEW ||
                            order.status === OrderStatus.IN_PROGRESS) && (
                            <ActiveOrdersButton
                              buttonType="text"
                              id={order.id}
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
    </Wrapper>
  );
};

export default ActiveOrders;
