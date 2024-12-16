import React from "react";
import General from "./General";
import PopularConnent from "./PopularConnent";
import Nationality from "./Nationality";
import PsychotypesAndEvents from "./PsychotypesAndEvents";
import Actions from "./Actions";
import MostActiveSerment from "./MostActiveSegment";
import Connects from "./Connects";
import Dynamics from "./Dynamics";

const Dashboard = () => {
  return (
    <React.Fragment>
      <General />
      <Nationality />
      <PsychotypesAndEvents />
      <PopularConnent />
      <Actions />
      <MostActiveSerment />
      <Connects />
      <Dynamics />
    </React.Fragment>
  );
};

export default Dashboard;
