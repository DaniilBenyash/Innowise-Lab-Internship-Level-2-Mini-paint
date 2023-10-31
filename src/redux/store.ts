import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import userReducer from '@/features/userData/userDataSlice'
import { signInSaga } from '@/saga/signInSaga'
import { signUpSaga } from '@/saga/signUpSaga'
import paintReducer from '@/features/images/imagesSlice'
import { postImageSaga } from '@/saga/postImageSaga'
import { getImagesSaga } from '@/saga/getImagesSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    user: userReducer,
    images: paintReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(sagaMiddleware)
  },
})

sagaMiddleware.run(signInSaga)
sagaMiddleware.run(signUpSaga)
sagaMiddleware.run(postImageSaga)
sagaMiddleware.run(getImagesSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
