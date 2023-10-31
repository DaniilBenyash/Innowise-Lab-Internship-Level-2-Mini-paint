import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { typeImages } from '@/repositories/images/interfaces/imagesController'

type typeInitialState = {
  images: typeImages | null
}

const initialState: typeInitialState = {
  images: null,
}

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<typeImages>) => {
      state.images = action.payload
    },
  },
})

export const { setImages } = imagesSlice.actions

export default imagesSlice.reducer
