import React from 'react';
import { Route, Routes } from 'react-router-dom';

const ManagerPage = React.lazy(() => import('./manager-page/manager-page'));
const ActiveOrders = React.lazy(() => import('./active-orders/active-orders'));

const ManagerRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <React.Suspense fallback={<>...</>}>
          <ManagerPage />
        </React.Suspense>
      }
    >
      <Route
        path="active-orders"
        element={
          <React.Suspense fallback={<>...</>}>
            <ActiveOrders />
          </React.Suspense>
        }
      />
    </Route>
  </Routes>
);

export default ManagerRoutes;
