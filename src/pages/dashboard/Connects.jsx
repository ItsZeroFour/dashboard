import React from "react";
import style from "./style.module.scss";
import { ReactComponent as Profile } from "../../assets/icons/dashboard/connects/profile.svg";
import { ReactComponent as List } from "../../assets/icons/dashboard/connects/list.svg";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomLabel1 = ({ x, y, value }) => (
  <text x={x + 2} y={y - 2} fill="#8c8c8c" fontSize="9" textAnchor="start">
    {value} %
  </text>
);

const CustomLabel2 = ({ x, y, value }) => (
  <text x={x + 37} y={y - 2} fill="#8c8c8c" fontSize="9" textAnchor="start">
    {value} %
  </text>
);

const connects = () => {
  const data = [
    {
      name: "Progress",
      orange: 30,
      purple: 20,
    },
  ];

  return (
    <section className={style.connects}>
      <div className={style.connects__first}>
        <h3>Connects</h3>
        <p>Connection ratio</p>

        <ul className={style.connects__first__items}>
          <li>
            <div>
              <div>
                <Profile />
              </div>
              <p>From profile</p>
            </div>

            <p>456</p>
          </li>

          <li>
            <div>
              <div>
                <List />
              </div>
              <p>From content cards</p>
            </div>
            <p>567</p>
          </li>
        </ul>

        <ResponsiveContainer width="100%" height={40}>
          <BarChart
            layout="vertical" // Горизонтальное расположение
            data={data}
            margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
            barSize={20} // Высота линии
          >
            <XAxis type="number" hide /> {/* Скрываем оси */}
            <YAxis dataKey="name" type="category" hide />
            <Bar
              dataKey="orange"
              stackId="a"
              fill="#FFA94D"
              radius={[3, 3, 3, 3]}
              label={<CustomLabel1 />}
            />
            <Bar
              dataKey="purple"
              stackId="a"
              fill="#9775FA"
              radius={[3, 3, 3, 3]}
              label={<CustomLabel2 />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default connects;
