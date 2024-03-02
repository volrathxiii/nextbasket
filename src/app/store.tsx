import { configureStore } from '@reduxjs/toolkit'

import FavoriteSlice from './components/Favorites/FavoriteSlice'
import CartSlice from './components/Cart/CartSlice';

/**
 * redux-persist seems to have a bug
 * so this is just a work-around to store in 
 * localStorage
 */
const localStorageMiddleware = ({ getState }) => {
    return next => action => {
        const result = next(action);
        localStorage.setItem('applicationState', JSON.stringify(getState()));
        return result;
    };
};

const reHydrateStore = () => {
    if (typeof window !== "undefined") {
        if (localStorage.getItem('applicationState') !== null) {
            return JSON.parse(localStorage.getItem('applicationState')); // re-hydrate the store
        }
    }
};

export const store = configureStore({
    reducer: {
        favorites: FavoriteSlice,
        cart: CartSlice
    },
    preloadedState: reHydrateStore(),
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(localStorageMiddleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


