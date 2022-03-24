import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Spinner from '../components/loaders/spinner';

const AuthPage = React.lazy(() => import('../pages/auth'));

const AuthRoute = () => (
  <Routes>
    <Route
      path="/auth"
      element={
        <React.Suspense fallback={<Spinner />}>
          <AuthPage />
        </React.Suspense>
      }
    />
    <Route path="*" element={<Navigate to="/auth" replace />} />
  </Routes>
);

export default AuthRoute;
