import { put, takeEvery } from 'redux-saga/effects'
import { canvasService, typePaints } from '../dataBaseServices/canvasService'
import { setPaints } from '../features/paintsData/paintsDataSlice'
import { FirebaseError } from 'firebase/app'

export function* fetchGetPaints() {
  try {
    const paints: typePaints = yield canvasService.getPaints() as Promise<typePaints>

    yield put(setPaints(paints))
  } catch (error) {
    yield alert((error as FirebaseError).code)
  }
}

export function* getPaintsSaga() {
  yield takeEvery('paints/getPaints', fetchGetPaints)
}
