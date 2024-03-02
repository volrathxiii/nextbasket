import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { ProductModel } from '@/app/types'

export interface CartSlice {
  data: {
    [key: string]: {
      product: ProductModel,
      count: number
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

    reduceQuantity: (state, action: PayloadAction<{ product: ProductModel }>) => {
      state.data = { ...state.data, [action.payload.product.id]: {
        product: action.payload.product,
        count: state.data[action.payload.product.id].count-1
      }}
    },

    addQuantity: (state, action: PayloadAction<{ product: ProductModel }>) => {
      state.data = { ...state.data, [action.payload.product.id]: {
        product: action.payload.product,
        count: state.data[action.payload.product.id].count+1
      }}
    },
  }
})

export const { add, remove, addQuantity,reduceQuantity } = CartSlice.actions

export default CartSlice.reducer