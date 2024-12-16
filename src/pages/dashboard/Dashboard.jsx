import React from "react";
import General from "./General";
import PopularConnent from "./PopularConnent";
import Nationality from "./Nationality";
import PsychotypesAndEvents from "./PsychotypesAndEvents";
import Actions from "./Actions";

const Dashboard = () => {
  return (
    <React.Fragment>
      <General />
      <Nationality />
      <PsychotypesAndEvents />
      <PopularConnent />
      <Actions />
    </React.Fragment>
  );
};

export default Dashboard;
