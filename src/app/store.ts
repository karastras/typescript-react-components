import {configureStore} from '@reduxjs/toolkit'
import exempleReducer from "../features/exemple/Exemple.slice";

export const store = configureStore({
  reducer: {
    exemple: exempleReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

