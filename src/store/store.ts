import { configureStore } from "@reduxjs/toolkit";
import { filmsApi } from "./filmsApi/filmsApi";

export const store = configureStore({
  reducer: { [filmsApi.reducerPath]: filmsApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmsApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
