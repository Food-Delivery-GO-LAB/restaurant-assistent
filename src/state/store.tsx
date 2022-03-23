import React from 'react';
import { AuthProvider } from './auth/auth.state';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
