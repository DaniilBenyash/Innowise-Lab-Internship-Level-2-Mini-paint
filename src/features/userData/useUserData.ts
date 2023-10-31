import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { deleteInfo } from './userDataSlice'
import { typeAuthData } from '@/variables/reduxTypes'

export const useUserData = () => {
  const dispatch = useAppDispatch()
  const userData = useAppSelector((state) => state.user.userData)
  const deleteUser = () => dispatch(deleteInfo())

  const signInError = useAppSelector((state) => state.user.errorSignIn)
  
  const signInUser = (userData: typeAuthData) =>
    dispatch({ type: 'userData/signIn', payload: userData })

  const signUpError = useAppSelector((state) => state.user.errorSignUp)
  const signUpUser = (userData: typeAuthData) =>
    dispatch({ type: 'userData/signUp', payload: userData })

  return {
    userData,
    deleteUser,
    signInError,
    signInUser,
    signUpError,
    signUpUser,
  }
}
