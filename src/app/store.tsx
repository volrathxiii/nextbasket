import { configureStore,combineReducers, Middleware } from '@reduxjs/toolkit'

import FavoriteSlice from '../components/Favorites/FavoriteSlice'
import CartSlice from '../components/Cart/CartSlice';

/**
 * redux-persist seems to have a bug
 * so this is just a work-around to store in 
 * localStorage
 */
const localStorageMiddleware: Middleware<{},RootState> = storeApi => next => action => {
    const result = next(action);
    localStorage.setItem('applicationState', JSON.stringify(storeApi.getState()));
    return result;
  };

const reHydrateStore = () => {
  if (typeof window !== "undefined") {
    const applicationState = localStorage.getItem('applicationState')
    if (applicationState !== null) {
      return JSON.parse(applicationState); // re-hydrate the store
    }
  }
};

const rootReducer = combineReducers({ 
  cart: CartSlice, 
  favorites: FavoriteSlice,
})

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: reHydrateStore(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


