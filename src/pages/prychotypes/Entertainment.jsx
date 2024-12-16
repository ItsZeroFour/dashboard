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
import { ReactComponent as Menu } from "../../assets/icons/psychotypes/more-vert.svg";

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

const Entertainment = () => {
  const data = [
    { name: "Active tiger", value: 400 },
    { name: "Interested adventurer", value: 300 },
    { name: "Forever resting sloth", value: 300 },
    { name: "A swim-loving trickster", value: 124 },
    { name: "Unstoppable athlete", value: 40 },
    { name: "Foodie", value: 435 },
    { name: "Pointy-head", value: 123 },
    { name: "Family fan", value: 123 },
  ];

  const barData = [
    { name: "Melomaniac", value: 400 },
    { name: "Drinker", value: 350 },
    { name: "Party person", value: 300 },
    { name: "Live in a \n non-stop rhythm", value: 250 },
    { name: "Hedonist", value: 200 },
    { name: "Like extreme", value: 250 },
    { name: "Follow celebrities", value: 100 },
  ];

  const COLORS = [
    "#0785F9",
    "#17A2B8",
    "#55A042",
    "#7A6760",
    "#965101",
    "#F5B800",
    "#F90707",
    "#F94C07",
  ];

  return (
    <React.Fragment>
      <section className={style.entertainment}>
        <div className={style.entertainment__item}>
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx={200} // Центр X (середина width)
              cy={200} // Центр Y (середина height)
              innerRadius={100} // Внутренний радиус (увеличиваем)
              outerRadius={150} // Внешний радиус (увеличиваем)
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            {/* Используем SVG для текста */}
            <svg>
              <text
                x={205}
                y={200}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="16"
                fontWeight="bold"
              >
                8.52k
              </text>

              <text
                x={205}
                y={215}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="10"
                fontWeight="regular"
              >
                Total
              </text>
            </svg>
          </PieChart>

          <ul>
            {[
              {
                name: "Active tiger",
                icon: <FirstImg1 />,
              },

              {
                name: "Interested adventurer",
                icon: <FirstImg2 />,
              },

              {
                name: "Forever resting sloth",
                icon: <FirstImg3 />,
              },

              {
                name: "A swim-loving trickster",
                icon: <FirstImg4 />,
              },

              {
                name: "Unstoppable athlete",
                icon: <FirstImg5 />,
              },

              {
                name: "Foodie",
                icon: <FirstImg6 />,
              },

              {
                name: "Pointy-head",
                icon: <FirstImg7 />,
              },

              {
                name: "Family fan",
                icon: <FirstImg8 />,
              },
            ].map(({ name, icon }) => (
              <li key={name}>
                {icon}
                <p>{name}</p>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`${style.entertainment__item} ${style.entertainment__item__sec}`}
        >
          <div className={style.entertainment__title}>
            <h2>The most popular interests</h2>
          </div>

          <div className={style.entertainment__item__category}>
            <div className={style.entertainment__item__category__name}>
              <FirstImg1 />
              <p>Active tiger</p>
            </div>

            <button>
              <Menu />
            </button>
          </div>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={barData}
              margin={{ top: 50, right: 20, left: 20, bottom: 55 }}
            >
              <CartesianGrid strokeDasharray="0 1" />
              <XAxis
                dataKey="name"
                tick={{
                  fontSize: 10,
                  angle: -90,
                  textAnchor: "end",
                  width: 50,
                  wordWrap: "break-word",
                }}
                dx={-15}
                axisLine={false}
                tickLine={false}
                width={200}
                interval={0}
              />
              <YAxis
                tick={{ fontSize: 14, fill: "#c4c4c4" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <Bar dataKey="value" barSize={40} radius={[5, 5, 5, 5]}>
                {barData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill="#7367F0"
                    opacity={index === 0 ? 1 : 0.5} // Первая колонка с полной непрозрачностью
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Entertainment;
