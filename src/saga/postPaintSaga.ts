import { put, takeEvery } from 'redux-saga/effects'
import { canvasService, typePaints, typePaint } from '../dataBaseServices/canvasService'
import { PayloadAction } from '@reduxjs/toolkit'
import { setPaints } from '../features/paintsData/paintsDataSlice'
import { FirebaseError } from 'firebase/app'

export function* fetchPostPaint(action: PayloadAction<typePaint>) {
  try {
    const paint = action.payload
    const paints: typePaints = yield canvasService.getPaints() as Promise<typePaints>

    const data: typePaints = yield canvasService.setPaint(paint, paints) as Promise<typePaints>

    yield put(setPaints(data))
  } catch (error) {
    yield alert((error as FirebaseError).code)
  }
}

export function* postPaintSaga() {
  yield takeEvery('paints/postPaint', fetchPostPaint)
}
