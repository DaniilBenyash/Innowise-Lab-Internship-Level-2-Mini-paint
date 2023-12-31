import { put, takeEvery } from 'redux-saga/effects'
import { imagesController } from '@/repositories/images/imagesController'
import { IImage } from '@/repositories/images/interfaces/imagesController'
import { setImages } from '@/features/images/imagesSlice'
import { FirebaseError } from 'firebase/app'

export function* fetchGetImages() {
  try {
    const images: IImage[] = yield imagesController.getImages()

    yield put(setImages(images))
  } catch (error) {
    yield alert((error as FirebaseError).code)
  }
}

export function* getImagesSaga() {
  yield takeEvery('images/getImages', fetchGetImages)
}
