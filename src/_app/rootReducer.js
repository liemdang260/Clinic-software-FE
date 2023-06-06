import { combineReducers } from "@reduxjs/toolkit";
import appointmentReducer from "./appointment/appointmentSlice";

const rootReducer = combineReducers({
  appointment: appointmentReducer,
});

export default rootReducer;
