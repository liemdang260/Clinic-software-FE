import { all } from "redux-saga/effects";
import appointmentSaga from "./appointment/appointmentSaga";

export default function* rootSaga() {
  yield all([appointmentSaga()]);
}
