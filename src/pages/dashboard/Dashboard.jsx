import React from "react";
import General from "./General";
import PopularConnent from "./PopularConnent";
import Nationality from "./Nationality";
import PsychotypesAndEvents from "./PsychotypesAndEvents";
import Actions from "./Actions";
import MostActiveSerment from "./MostActiveSerment";
import Connects from "./Connects";

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
    </React.Fragment>
  );
};

export default Dashboard;
