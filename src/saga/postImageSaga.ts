import { put, takeEvery } from 'redux-saga/effects'
import { imagesController } from '@/repositories/images/imagesController'
import { IImage } from '@/repositories/images/interfaces/imagesController'
import { PayloadAction } from '@reduxjs/toolkit'
import { setImages } from '@/features/images/imagesSlice'
import { FirebaseError } from 'firebase/app'

export function* fetchPostImage(action: PayloadAction<IImage>) {
  try {
    const image = action.payload
    const images: IImage[] = yield imagesController.getImages()

    const responseImages: IImage[] = yield imagesController.setImage(
      image,
      images,
    ) as Promise<IImage[]>

    yield put(setImages(responseImages))
  } catch (error) {
    yield alert((error as FirebaseError).code)
  }
}

export function* postImageSaga() {
  yield takeEvery('images/postImage', fetchPostImage)
}
