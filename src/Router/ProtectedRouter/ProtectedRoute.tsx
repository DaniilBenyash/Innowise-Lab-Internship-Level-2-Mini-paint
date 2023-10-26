import { Navigate } from 'react-router';
import { useUserData } from '../../features/userData/useUserData';
import { SIGN_IN, PAINT_PAGE } from '../../variables/routes';

export const ProtectedRoute = ({ children }: any) => {
  const { userData } = useUserData();

  return <>{userData ? children : <Navigate to={SIGN_IN} />}</>;
};
