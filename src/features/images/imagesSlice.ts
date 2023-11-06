import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { IImage } from '@/repositories/images/interfaces/imagesController'

interface IInitialState {
  images: IImage[] | null
}

const initialState: IInitialState = {
  images: null,
}

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<IImage[]>) => {
      state.images = action.payload
    },
  },
})

export const { setImages } = imagesSlice.actions

export default imagesSlice.reducer
