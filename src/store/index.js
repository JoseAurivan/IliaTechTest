import customersSlice from './reducers/customer';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
      customers: customersSlice,
    }
  });

export default store;