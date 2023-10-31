import { put, takeEvery } from 'redux-saga/effects'
import { imagesController } from '@/repositories/images/imagesController'
import { typeImages, typeImage } from '@/repositories/images/interfaces/imagesController'
import { PayloadAction } from '@reduxjs/toolkit'
import { setImages } from '@/features/images/imagesSlice'
import { FirebaseError } from 'firebase/app'

export function* fetchPostImage(action: PayloadAction<typeImage>) {
  try {
    const image = action.payload
    const images: typeImages = yield imagesController.getImages() as Promise<typeImages>

    const responseImages: typeImages = yield imagesController.setImage(
      image,
      images,
    ) as Promise<typeImages>

    yield put(setImages(responseImages))
  } catch (error) {
    yield alert((error as FirebaseError).code)
  }
}

export function* postImageSaga() {
  yield takeEvery('images/postImage', fetchPostImage)
}
