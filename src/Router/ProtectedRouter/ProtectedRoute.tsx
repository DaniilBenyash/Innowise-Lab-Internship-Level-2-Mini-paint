import { Navigate } from 'react-router'
import { useUser } from '@/features/user/useUser'
import { SIGN_IN } from '@/variables/routes'

type ProtectedRouteProps = {
  children: JSX.Element
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useUser()

  return (user.user ? children : <Navigate to={SIGN_IN} />)
}
