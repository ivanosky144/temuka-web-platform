import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

interface RouteWrapperProps {
  children: React.ReactNode;
  type: 'protected' | 'public';
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({ children, type }) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  if (type === 'protected' && !isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (type === 'public' && isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default RouteWrapper;
