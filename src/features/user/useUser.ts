import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { deleteInfo } from './userSlice'
import { IAuthCredentials } from '@/variables/reduxTypes'

export const useUser = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user)
  const deleteUser = () => dispatch(deleteInfo())

  const signInError = useAppSelector((state) => state.user.errorSignIn)

  const signInUser = (user: IAuthCredentials) => dispatch({ type: 'user/signIn', payload: user })

  const signUpError = useAppSelector((state) => state.user.errorSignUp)
  const signUpUser = (user: IAuthCredentials) => dispatch({ type: 'user/signUp', payload: user })

  return {
    user,
    deleteUser,
    signInError,
    signInUser,
    signUpError,
    signUpUser,
  }
}
