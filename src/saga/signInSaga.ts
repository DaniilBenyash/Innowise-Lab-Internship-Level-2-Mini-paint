import { put, takeEvery } from 'redux-saga/effects';
import { authService } from '../dataBaseServices/firebaseAuth';
import { setUser, signInFailure } from '../features/userData/userDataSlice';
import { PayloadAction } from "@reduxjs/toolkit";
import { typeAuthData, typeUserData } from '../variables/reduxTypes';
import { UserCredential } from 'firebase/auth';

export function* fetchSignIn(action: PayloadAction<typeAuthData>) {
  try {
    const email = action.payload.email;
    const password = action.payload.password;
    
    const data: UserCredential = yield (authService.signIn(email, password) as Promise<UserCredential>);
    
    const user: typeUserData = yield {email: data.user.email, id: data.user.uid}
    
    yield put(setUser(user));
  } catch (error: any) {
    yield put(signInFailure(error.code));
  }
}

export function* signInSaga() {
  yield takeEvery("userData/signIn", fetchSignIn);
}
