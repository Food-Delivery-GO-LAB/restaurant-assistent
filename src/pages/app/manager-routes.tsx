import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Spinner from '../../components/loaders/spinner';

const ManagerPage = React.lazy(() => import('./manager-page'));
const ActiveOrders = React.lazy(() => import('./active-orders'));
const MenuList = React.lazy(() => import('./menu'));

const ManagerRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <React.Suspense fallback={<Spinner />}>
          <ManagerPage />
        </React.Suspense>
      }
    >
      <Route
        path="active-orders"
        element={
          <React.Suspense fallback={<Spinner />}>
            <ActiveOrders />
          </React.Suspense>
        }
      />
      <Route
        path="menu"
        element={
          <React.Suspense fallback={<Spinner />}>
            <MenuList />
          </React.Suspense>
        }
      />
    </Route>
  </Routes>
);

export default ManagerRoutes;
