import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { jadwalSholatApi } from "./services/jadwalSholat";

export const store = configureStore({
  reducer: {
    [jadwalSholatApi.reducerPath]: jadwalSholatApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jadwalSholatApi.middleware),
});

setupListeners(store.dispatch)
