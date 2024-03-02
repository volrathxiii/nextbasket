import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { ProductModel } from '@/app/types'

export interface FavoriteModel {
  [key: number]: ProductModel
}

export interface FavoriteSlice {
  data: FavoriteModel
}

const initialState: FavoriteSlice = {
  data: [],
}

export const FavoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<{ product: ProductModel }>) => {
      state.data = Object.keys(state.data)
        .filter(objKey => objKey != String(action.payload.product.id))
        .reduce((newObj:FavoriteModel, key) => {
          newObj[Number(key)] = state.data[Number(key)];
          return newObj;
        }, {}
        );
    },
    add: (state, action: PayloadAction<{ product: ProductModel }>) => {
      state.data = { ...state.data, [action.payload.product.id]: action.payload.product }
    }
  },
})

export const { add, remove } = FavoriteSlice.actions

export default FavoriteSlice.reducer