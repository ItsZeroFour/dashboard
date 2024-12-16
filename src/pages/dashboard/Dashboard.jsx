import React from "react";
import style from "./style.module.scss";
import General from "./General";
import Nationality from "./Nationality";
import PsychotypesAndEvents from "./PsychotypesAndEvents";

const Dashboard = () => {
  return (
    <React.Fragment>
      <General />
      <Nationality />
      <PsychotypesAndEvents />
    </React.Fragment>
  );
};

export default Dashboard;
