import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Spinner from '../../components/loaders/spinner';
import MenuForm from './menu/menu-form';
import AddDish from './menu/add-dish';
import EditDish from './menu/edit-dish';

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
      <Route path="menu/add-dish" element={<AddDish />} />
      <Route path="menu/edit-dish/:id" element={<EditDish />} />
    </Route>
  </Routes>
);

export default ManagerRoutes;
