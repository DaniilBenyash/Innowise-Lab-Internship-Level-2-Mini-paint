import { Navigate } from 'react-router'
import { useUserData } from '../../features/userData/useUserData'
import { SIGN_IN } from '../../variables/routes'
import { ReactNode } from 'react'

type ProtectedRouteProps = {
  children: ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { userData } = useUserData()

  return <>{userData ? children : <Navigate to={SIGN_IN} />}</>
}
