import { put, takeEvery } from 'redux-saga/effects'
import { firebaseAuthСontroller } from '@/repositories/auth/firebaseAuthСontroller'
import { setUser, signInFailure } from '@/features/user/userSlice'
import { PayloadAction } from '@reduxjs/toolkit'
import { IAuthCredentials, IUser } from '@/variables/reduxTypes'
import { UserCredential } from 'firebase/auth'
import { FirebaseError } from 'firebase/app'

export function* fetchSignIn(action: PayloadAction<IAuthCredentials>) {
  try {
    const email = action.payload.email
    const password = action.payload.password

    const data: UserCredential = yield firebaseAuthСontroller.signIn(
      email,
      password,
    ) as Promise<UserCredential>

    const user: IUser = yield { email: data.user.email, id: data.user.uid }

    yield put(setUser(user))
  } catch (error) {
    yield put(signInFailure((error as FirebaseError).code))
  }
}

export function* signInSaga() {
  yield takeEvery('user/signIn', fetchSignIn)
}
