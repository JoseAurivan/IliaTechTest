import customersSlice from './reducers/customer';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
      customers: customersSlice,
    }
  });

export type RootState = ReturnType<typeof store.getState> 
export default store;