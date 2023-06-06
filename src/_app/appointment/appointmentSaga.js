import appointmentServices from "_services/appointment.service";
import {
  fetchAppointmentData as fetchData,
  fetchAppointmentDataSuccess as fetchDataSuccess,
  fetchAppointmentDataFailure as fetchDataFailure,
  createAppointment as createAppointmentAction,
  createAppointmentSuccess,
  createAppointmentFailure,
} from "./appointmentSlice";
import {
  put,
  call,
  takeLatest,
  all,
  take,
  takeEvery,
  delay,
  fork,
} from "redux-saga/effects";
import { ca } from "date-fns/locale";

export function* fetchAppointmentData() {
  // yield console.log("test");
  // yield delay(1000);
  // yield put(fetchDataSuccess());
  // console.log(new Date(Date.now()));
  try {
    const data = yield call(
      appointmentServices.getAppointmentByWeek,
      new Date(Date.now()),
    );
    // yield put(fetchDataSuccess(), data);
    console.log(data);
    yield put(fetchDataSuccess(data));
  } catch (e) {
    console.log(e);
    yield put(fetchDataFailure());
  }
}

export function* createAppointment(action) {
  try {
    const data = yield call(
      appointmentServices.createAppointment,
      action.payload,
    );
    yield put(createAppointmentSuccess(), data);
  } catch (error) {
    console.log(error);
    yield put(createAppointmentFailure());
  }
}

export function* watchFetchAppointmentData() {
  yield takeLatest(fetchData.type, fetchAppointmentData);
}

export function* watchCreateAppointment() {
  yield takeLatest(createAppointmentAction.type, createAppointment);
}

export default function* appointmentSaga() {
  yield fork(watchFetchAppointmentData);
  yield fork(watchCreateAppointment);
}
