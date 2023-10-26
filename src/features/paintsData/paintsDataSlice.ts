import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { typePaints } from '../../dataBaseServices/canvasService'

type typeInitialState = {
  paints: typePaints | null
}

const initialState: typeInitialState = {
  paints: null,
}

export const paintsDataSlice = createSlice({
  name: 'paints',
  initialState,
  reducers: {
    setPaints: (state, action: PayloadAction<typePaints>) => {
      state.paints = action.payload
    },
  },
})

export const { setPaints } = paintsDataSlice.actions

export default paintsDataSlice.reducer
