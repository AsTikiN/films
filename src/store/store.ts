import { configureStore } from "@reduxjs/toolkit";
import { filmsApi } from "./filmsApi/filmsApi";
import filmSlice from "./reducers/filmReducer";

export const store = configureStore({
  reducer: {
    [filmsApi.reducerPath]: filmsApi.reducer,
    film: filmSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(filmsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
