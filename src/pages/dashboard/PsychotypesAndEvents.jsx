import React from "react";
import style from "./style.module.scss";
import { ReactComponent as FirstImg1 } from "../../assets/icons/psychotypes/1.svg";
import { ReactComponent as FirstImg2 } from "../../assets/icons/psychotypes/2.svg";
import { ReactComponent as FirstImg3 } from "../../assets/icons/psychotypes/3.svg";
import { ReactComponent as FirstImg4 } from "../../assets/icons/psychotypes/4.svg";
import { ReactComponent as FirstImg5 } from "../../assets/icons/psychotypes/5.svg";
import { ReactComponent as FirstImg6 } from "../../assets/icons/psychotypes/6.svg";
import { ReactComponent as FirstImg7 } from "../../assets/icons/psychotypes/7.svg";
import { ReactComponent as FirstImg8 } from "../../assets/icons/psychotypes/8.svg";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const PsychotypesAndEvents = () => {
  const data = [
    {
      title: "Active tiger",
      value: 125,
      procents: 12.5,
      icon: <FirstImg1 />,
      color: "#F94C07",
    },
    {
      title: "Interested adventurer",
      value: 12,
      procents: 12.5,
      icon: <FirstImg2 />,
      color: "#55A042",
    },
    {
      title: "Forever resting sloth",
      value: 34,
      procents: 12.5,
      icon: <FirstImg3 />,
      color: "#7A6760",
    },
    {
      title: "A swim-loving trickster",
      value: 75,
      procents: 12.5,
      icon: <FirstImg4 />,
      color: "#0785F9",
    },
    {
      title: "Unstoppable athlete",
      value: 65,
      procents: 12.5,
      icon: <FirstImg5 />,
      color: "#F90707",
    },
    {
      title: "Foodie",
      value: 23,
      procents: 12.5,
      icon: <FirstImg6 />,
      color: "#965101",
    },
    {
      title: "Pointy-head",
      value: 65,
      procents: 12.5,
      icon: <FirstImg7 />,
      color: "#17A2B8",
    },
    {
      title: "Family fan",
      value: 75,
      procents: 12.5,
      icon: <FirstImg8 />,
      color: "#F5B800",
    },
  ];

  return (
    <section className={style.psychotypes_and_events}>
      <div className={style.psychotypes}>
        <div className={style.psychotypes__top}>
          <h3>Psychotypes</h3>
          <p>25,8k</p>
        </div>

        <div className={style.psychotypes__top__graphick}>
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className={style.psychotypes__item__name}>
                <div>
                  <span>
                    {item.icon}
                    {item.title}
                  </span>
                  <span>
                    {item.value} / {item.procents}%
                  </span>
                </div>
              </div>

              {/* График */}
              <div
                style={{ flex: 2, marginLeft: "10px", position: "relative" }}
              >
                {/* Серый фон */}
                <div className={style.psychotypes__top__graphick__line}></div>

                {/* Линия графика */}
                <div style={{ position: "relative", zIndex: 1 }}>
                  <ResponsiveContainer width="100%" height={20}>
                    <BarChart layout="vertical" data={[item]}>
                      <XAxis type="number" hide />
                      <YAxis type="category" dataKey="label" hide />
                      <Bar dataKey="value" barSize={40} radius={[5, 5, 5, 5]}>
                        <Cell fill={item.color} />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PsychotypesAndEvents;
