import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store';
import { logout } from '../../store/slices/authSlice';
import { RootState } from '../../store';

interface PrivateRouteProps {
  children: React.ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);

  useEffect(() => {
    // Double check token validity
    const token = localStorage.getItem('token');
    if (!token && isAuthenticated) {
      dispatch(logout());
    }
  }, [dispatch, isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}