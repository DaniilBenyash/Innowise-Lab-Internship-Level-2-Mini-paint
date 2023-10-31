import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { typeUserData } from '@/variables/reduxTypes'

export type typeInitialState = {
  userData: typeUserData | null
  errorSignIn: string | null
  errorSignUp: string | null
}

const initialState: typeInitialState = {
  userData: null,
  errorSignIn: null,
  errorSignUp: null,
}

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<typeUserData>) => {
      state.userData = action.payload
      state.errorSignIn = null
      state.errorSignUp = null
    },
    signInFailure: (state, action: PayloadAction<string>) => {
      state.errorSignIn = action.payload
    },
    signUpFailure: (state, action: PayloadAction<string>) => {
      state.errorSignUp = action.payload
    },
    deleteInfo: (state) => {
      state.userData = null
      state.errorSignIn = null
      state.errorSignUp = null
    },
  },
})

export const { signInFailure, signUpFailure, deleteInfo, setUser } = userDataSlice.actions

export default userDataSlice.reducer
