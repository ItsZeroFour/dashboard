import React from "react";
import style from "./style.module.scss";
import General from "./General";
import PopularConnent from "./PopularConnent";

const Dashboard = () => {
  return (
    <React.Fragment>
      <General />

      <PopularConnent />
    </React.Fragment>
  );
};

export default Dashboard;
