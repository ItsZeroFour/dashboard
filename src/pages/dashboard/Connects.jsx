import React from "react";
import style from "./style.module.scss";
import { ReactComponent as Profile } from "../../assets/icons/dashboard/connects/profile.svg";
import { ReactComponent as List } from "../../assets/icons/dashboard/connects/list.svg";
import { ReactComponent as Popular1 } from "../../assets/icons/dashboard/connects/popular-1.svg";
import { ReactComponent as Popular2 } from "../../assets/icons/dashboard/connects/popular-2.svg";
import { ReactComponent as Popular3 } from "../../assets/icons/dashboard/connects/popular-3.svg";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend } from "chart.js";

ChartJS.register(ArcElement, Legend);

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

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#111",
          color: "#fff",
          padding: "5px",
          borderRadius: "5px",
          fontSize: 10,
          boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
        }}
      >
        <p>{`${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const connects = () => {
  const data = [
    {
      name: "Progress",
      orange: 30,
      purple: 20,
    },
  ];

  const radarData = [
    {
      subject: "Sun",
      A: 120,
      B: 110,
      fullMark: 150,
      procents: "50%",
    },
    {
      subject: "Mon",
      A: 98,
      B: 130,
      fullMark: 150,
      procents: "50%",
    },
    {
      subject: "Tue",
      A: 86,
      B: 130,
      fullMark: 150,
      procents: "50%",
    },
    {
      subject: "Wed",
      A: 99,
      B: 100,
      fullMark: 150,
      procents: "50%",
    },
    {
      subject: "Thu",
      A: 85,
      B: 90,
      fullMark: 150,
      procents: "50%",
    },
    {
      subject: "Fri",
      A: 65,
      B: 85,
      fullMark: 150,
      procents: "50%",
    },

    {
      subject: "Sat",
      A: 65,
      B: 85,
      fullMark: 150,
      procents: "50%",
    },
  ];

  const popular_data = {
    datasets: [
      {
        data: [50, 25, 25], // Соотношение секций (проценты)
        backgroundColor: ["#3E9DF8", "#FFD042", "#35C974"], // Цвета (синий, желтый, зеленый)
        borderWidth: 0, // Убираем границы
        cutout: "70%", // Толщина внутреннего круга
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false }, // Убираем легенду
      tooltip: { enabled: false }, // Отключаем всплывающие подсказки
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  function formatNumber(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/.0$/, "") + "k";
    }
    return num.toString();
  }

  return (
    <section className={style.connects}>
      <div className={style.connects__top}>
        <h3>Connects</h3>
        <div>
          <p>12.67k</p>
        </div>
      </div>
      <div className={style.connects__items}>
        <div className={style.connects__first}>
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

        <div className={style.connects__second}>
          <h3>The most active connections time</h3>

          <div className={style.connects__second__graph}>
            <div className={style.connects__second__graph__text}>
              <p>Sunday</p>
              <p>15 pm - 01 am</p>
              <span>15.4k</span>
            </div>

            <div style={{ width: 200, height: 200 }}>
              <ResponsiveContainer width={200} height={200}>
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  data={radarData}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" fontSize={9} />
                  {/* <PolarRadiusAxis fontSize={9} /> */}
                  <Tooltip content={<CustomTooltip />} />
                  <Radar
                    name="procents"
                    dataKey="A"
                    stroke="#28DAC6"
                    fill="#28DAC6"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className={style.connects__third}>
          <h3>Top-3 popular content to connect</h3>

          <div className={style.connects__main}>
            <div
              style={{ position: "relative", width: "150px", height: "150px" }}
            >
              <Doughnut data={popular_data} options={options} />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "16px",
                  fontWeight: "Regular",
                  color: "#444",
                }}
              >
                16,7k
              </div>
            </div>

            <ul>
              {[
                {
                  icon: <Popular1 />,
                  name: "Asian seafood degustation",
                  type: "Food festival",
                  count: 1900,
                  procents: 15,
                },

                {
                  icon: <Popular2 />,
                  name: "Asian seafood degustation",
                  type: "Food festival",
                  count: 1900,
                  procents: 15,
                },

                {
                  icon: <Popular3 />,
                  name: "Asian seafood degustation",
                  type: "Food festival",
                  count: 1900,
                  procents: 15,
                },
              ].map((item, index) => (
                <li key={index}>
                  <div className={style.connects__left}>
                    <div className={style.connects__name}>
                      {item.icon}
                      <p>{item.name}</p>
                    </div>

                    <p>{item.type}</p>
                  </div>

                  <div className={style.connects__zifrs}>
                    <p>{formatNumber(item.count)}</p>
                    <span>{item.procents}%</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default connects;
