import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '@/variables/reduxTypes'

interface IInitialState {
  user: IUser | null
  errorSignIn: string | null
  errorSignUp: string | null
  onSuccess: boolean
}

const initialState: IInitialState = {
  user: null,
  errorSignIn: null,
  errorSignUp: null,
  onSuccess: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
      state.onSuccess = true
      state.errorSignIn = null
      state.errorSignUp = null
    },
    signInFailure: (state, action: PayloadAction<string>) => {
      state.onSuccess = false
      state.errorSignIn = action.payload
    },
    signUpFailure: (state, action: PayloadAction<string>) => {
      state.onSuccess = false
      state.errorSignUp = action.payload
    },
    deleteInfo: (state) => {
      state.user = null
      state.errorSignIn = null
      state.errorSignUp = null
      state.onSuccess = false
    },
  },
})

export const { signInFailure, signUpFailure, deleteInfo, setUser } = userSlice.actions

export default userSlice.reducer
