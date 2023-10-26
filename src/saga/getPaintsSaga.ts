import { put, takeEvery } from 'redux-saga/effects';
import { canvasService } from '../dataBaseServices/canvasService';
import { setPaints } from '../features/paintsData/paintsDataSlice';
import { typePaints } from '../dataBaseServices/canvasService';

export function* fetchGetPaints() {
  try {
    const paints: typePaints = yield (canvasService.getPaints() as Promise<typePaints>) 
    
    
    yield put(setPaints(paints));
  } catch (error: any) {
    yield alert(error.code);
  }
}

export function* getPaintsSaga() {
  yield takeEvery("paints/getPaints", fetchGetPaints);
}
