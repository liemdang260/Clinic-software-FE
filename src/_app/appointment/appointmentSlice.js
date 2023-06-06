import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointments: [],
  appointmentRequest: [],
  isFetching: false,
  isCreating: false,
};
const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    fetchAppointmentData: (state, action) => {
      state.isFetching = true;
      console.log("reducer");
    },
    fetchAppointmentDataSuccess: (state, action) => {
      console.log(action.payload);
      // state.apointments = action.data.filter(
      //   (appointment) => appointment.status === "appointment"
      // );
      // state.appointmentRequest = action.filter(
      //   (appointment) => appointment.status === "request"
      // );
      console.log("success");
      state.isFetching = false;
    },
    fetchAppointmentDataFailure: (state) => {
      state.isFetching = false;
    },
    createAppointment: (state, action) => {
      console.log(action.payload);
    },
    createAppointmentSuccess: (state, action) => {},
    createAppointmentFailure: (state, action) => {},
  },
});

export const {
  test,
  fetchAppointmentData,
  fetchAppointmentDataSuccess,
  fetchAppointmentDataFailure,
  createAppointment,
  createAppointmentSuccess,
  createAppointmentFailure,
} = appointmentSlice.actions;

export const appointmentSelector = (state) => state.appointment.appointments;
export default appointmentSlice.reducer;
