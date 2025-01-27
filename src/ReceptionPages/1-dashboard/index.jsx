import React from "react";
import CardContainer from "./_components/CardContainer";
import VisitChart from "./_components/VisitChart";
import RoomState from "./_components/RoomState";
import Appointment from "./_components/Appointment";
import {RightBar} from "_components/StyledComponent";
import authentication from "_services/authentication.service";
import "./index.scss";
// import { Scrollbars } from "react-custom-scrollbars-2";
// import {RightBar} from '_components/StyledComponent/RightBar';
// import PropTypes from 'prop-types'

function Dashboard(props) {
  return (
    <div className="dashboard">
      <p className="dashboard__title">
        Xin chào, <span>{authentication.getCurrentUser()?.payload.employee_name}</span>
      </p>
      <div className="dashboard__cards">
        <CardContainer />
      </div>
      <div className="dashboard__averageVisitChart">
          <VisitChart/>
      </div>
      <div className="dashboard__roomState">
          <RoomState/>
      </div>
      <div className="dashboard__appointment">
          <Appointment/>
      </div>
      <RightBar>
        <div>Hoạt động gần đây</div>
        {/* <div>Bệnh nhân</div> */}
      </RightBar>
    </div>
  );
}

Dashboard.propTypes = {};

export default Dashboard;
