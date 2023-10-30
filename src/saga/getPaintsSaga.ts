import { put, takeEvery } from 'redux-saga/effects'
import { imagesController } from '../repositories/images/imagesController'
import { typeImages } from '../repositories/images/interfaces/imagesController'
import { setImages } from '../features/images/imagesSlice'
import { FirebaseError } from 'firebase/app'

export function* fetchGetPaints() {
  try {
    const images: typeImages = yield imagesController.getImages() as Promise<typeImages>

    yield put(setImages(images))
  } catch (error) {
    yield alert((error as FirebaseError).code)
  }
}

export function* getPaintsSaga() {
  yield takeEvery('paints/getPaints', fetchGetPaints)
}
