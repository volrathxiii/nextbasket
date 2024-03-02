import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { ProductModel } from '@/app/types'

export interface FavoriteSlice {
  data: {
    [key: number]: ProductModel
  }
}

const initialState: FavoriteSlice = {
  data: [],
}

export const FavoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<{product:ProductModel}>) => {
      state.data  = Object.keys(state.data ).filter(objKey =>
        objKey != action.payload.product.id).reduce((newObj, key) =>
        {
            newObj[key] = state.data[key];
            return newObj;
        }, {}
      );
  },
    add: (state, action: PayloadAction<{product:ProductModel}>) => {
        state.data = {...state.data, [action.payload.product.id]: action.payload.product}
    }
  },
})

export const { add, remove } = FavoriteSlice.actions

export default FavoriteSlice.reducer