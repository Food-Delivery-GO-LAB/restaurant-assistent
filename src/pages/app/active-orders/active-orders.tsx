import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {
  ButtonContainer,
  StyledButton,
  StyledStatus,
  Wrapper,
} from './active-orders.style';
import Title from '../../../components/typography/title';
import Button from '../../../components/buttons/button';
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
  { id: 'date', label: 'Date' },
  { id: 'address', label: 'Address' },
  { id: 'dishes', label: 'Dishes' },
  { id: 'total', label: 'Total' },
  { id: 'status', label: 'Status' },
  { id: 'actions', label: 'Actions' },
];

interface Data {
  orderId: number;
  date: string;
  address: string;
  dishes: string;
  total: number;
  status:
    | 'New'
    | 'In progress'
    | 'Ready for delivery'
    | 'Completed'
    | 'Canceled';
}

function createData(
  orderId: number,
  date: string,
  address: string,
  dishes: string,
  total: number,
  status:
    | 'New'
    | 'In progress'
    | 'Ready for delivery'
    | 'Completed'
    | 'Canceled'
): Data {
  return { orderId, date, address, dishes, total, status };
}

const rows = [
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    'New'
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    'New'
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    'Ready for delivery'
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    'In progress'
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    'In progress'
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    'In progress'
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    'In progress'
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    'In progress'
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    'In progress'
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    'In progress'
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    'In progress'
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    'In progress'
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    'In progress'
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    'In progress'
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    'In progress'
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    'In progress'
  ),
];

const ActiveOrders = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
                  <TableCell sx={{ fontSize: '1em' }} key={column.id}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.orderId}
                  >
                    <TableCell>{row.orderId}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.address}</TableCell>
                    <TableCell>
                      <Button buttonType="secondary">View</Button>
                    </TableCell>
                    <TableCell>{row.total} BYN</TableCell>
                    <TableCell
                      sx={{
                        p: '10px',
                        minWidth: 160,
                      }}
                    >
                      <StyledStatus status={row.status}>
                        {row.status}
                      </StyledStatus>
                    </TableCell>
                    <TableCell>
                      <ButtonContainer>
                        <StyledButton buttonType="primary">
                          <CheckIcon />
                          Accept
                        </StyledButton>
                        <StyledButton buttonType="text">
                          <CancelIcon />
                          Reject
                        </StyledButton>
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
          count={rows.length}
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
