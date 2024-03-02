import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { ProductModel } from '@/app/types'

export interface CartSlice {
  data: {
    [key: string]: {
      product: ProductModel,
      count: 0
    }
  }
}

const initialState: CartSlice = {
  data: {},
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // remove item
    remove: (state, action: PayloadAction<{ product: ProductModel }>) => {
      state.data = Object.keys(state.data).filter((objKey: string) =>
        objKey != action.payload.product.id).reduce((newObj, key: string) => {
          newObj[key] = state.data[key];
          return newObj;
        }, {}
        );
    },
    // add item
    add: (state, action: PayloadAction<{ product: ProductModel, count: number }>) => {
      state.data = {
        ...state.data, [action.payload.product.id]: {
          product: action.payload.product,
          count: action.payload.count
        }
      }
    },

    setQuantity: (state, action: PayloadAction<{ product: ProductModel, count: number }>) => {
      state.data = { ...state.data, [action.payload.product.id]: action.payload.product }
    }
  },
})

export const { add, remove, setQuantity } = CartSlice.actions

export default CartSlice.reducer