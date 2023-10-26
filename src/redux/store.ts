import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import userReducer from '../features/userData/userDataSlice'
import { signInSaga } from '../saga/signInSaga'
import { signUpSaga } from '../saga/signUpSaga'
import paintReducer from '../features/paintsData/paintsDataSlice'
import { postPaintSaga } from '../saga/postPaintSaga'
import { getPaintsSaga } from '../saga/getPaintsSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    user: userReducer,
    paints: paintReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(sagaMiddleware)
  },
})

sagaMiddleware.run(signInSaga)
sagaMiddleware.run(signUpSaga)
sagaMiddleware.run(postPaintSaga)
sagaMiddleware.run(getPaintsSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
