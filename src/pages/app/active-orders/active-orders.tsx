import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Wrapper } from './active-orders.style';
import Title from '../../../components/typography/title';

interface Column {
  id: 'orderId' | 'date' | 'address' | 'dishes' | 'total' | 'status';
  label: string;
}

const columns: readonly Column[] = [
  { id: 'orderId', label: 'Order ID' },
  { id: 'date', label: 'Date' },
  { id: 'address', label: 'Address' },
  { id: 'dishes', label: 'Dishes' },
  { id: 'total', label: 'Total' },
  { id: 'status', label: 'Status' },
];

interface Data {
  orderId: number;
  date: string;
  address: string;
  dishes: string;
  total: number;
  status: 1 | 2 | 3 | 4 | 5;
}

function createData(
  orderId: number,
  date: string,
  address: string,
  dishes: string,
  total: number,
  status: 1 | 2 | 3 | 4 | 5
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
    1
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    1
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    1
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    1
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    1
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    1
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    1
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    1
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    1
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    1
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    1
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    1
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    1
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    1
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    1
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    1
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    1
  ),
  createData(
    101,
    '26 March 2020, 12:42 AM',
    'улица Притыцкого 30',
    'Hamburger',
    15.1,
    1
  ),
];

const ActiveOrders = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
          maxHeight: '70vh',
          overflow: 'auto',
          borderRadius: '4px',
        }}
      >
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id}>{column.label}</TableCell>
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
                    <TableCell>{row.dishes}</TableCell>
                    <TableCell>${row.total}</TableCell>
                    <TableCell>{row.status}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
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
