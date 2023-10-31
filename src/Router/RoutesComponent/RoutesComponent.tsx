import { MainPage } from '@/pages/MainPage/MainPage'
import { PaintPage } from '@/pages/PaintPage'
import { SignUpPage } from '@/pages/SignUpPage'
import { SignInPage } from '@/pages/SingInPage'
import { ProtectedRoute } from '../ProtectedRouter/ProtectedRoute'
import { Route, Routes } from 'react-router'
import { MAIN_PAGE, PAINT_PAGE, SIGN_IN, SIGN_UP } from '@/variables/routes'

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route
        path={MAIN_PAGE}
        element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={PAINT_PAGE}
        element={
          <ProtectedRoute>
            <PaintPage />
          </ProtectedRoute>
        }
      />
      <Route path={SIGN_IN} element={<SignInPage />} />
      <Route path={SIGN_UP} element={<SignUpPage />} />
    </Routes>
  )
}
