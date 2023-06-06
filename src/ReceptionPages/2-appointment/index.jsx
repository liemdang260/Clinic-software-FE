import React, { useEffect, useState } from "react";
import Infomation from "./infomation";
import Content from "./content";
import AppoimentDemand from "./rightbar";
import BarChart from "_components/BarChart";
import appointment from "_services/appointment.service";
import { dateParse } from "_constants/date";
import PieChart from "_components/PieChart";
import { useDispatch } from "react-redux";
import {
  appointmentSelector,
  fetchAppointmentData,
} from "../../_app/appointment/appointmentSlice";
import "./index.scss";
import { useSelector } from "react-redux";
// import PropTypes from 'prop-types';
// const data = [
//     {id: 1, TIMES: new Date(), TYPE: 1, PATIENT_NAME: 'Nguyễn Văn A', EMPLOYEE_NAME: 'Phúc'}
// ];
function Appointment(props) {
  const appointment = useSelector(appointmentSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAppointmentData());
  });

  return (
    <div className="appointment-container">
      <div style={{ width: "38%" }}>
        <Infomation />
        <BarChart />
        <PieChart />
      </div>
      <div style={{ width: "60%" }}>
        <Content data={appointment} />
      </div>
      <AppoimentDemand></AppoimentDemand>
    </div>
  );
}

Appointment.propTypes = {};

export default Appointment;
