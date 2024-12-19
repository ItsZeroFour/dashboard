import React from "react";
import style from "./style.module.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { ReactComponent as TrendUp } from "../../assets/icons/dashboard/dynamics/trend-up.svg";
import { ReactComponent as TrendDown } from "../../assets/icons/dashboard/dynamics/trend-down.svg";

const Dynamics = ({ percentage = 62.5, increment = 18.2 }) => {
  const segments = 32;

  const activeSegments = Math.round((segments * percentage) / 100);

  const segmentArray = Array.from({ length: segments }, (_, index) => index);

  const firstData = [
    { name: "01/08", uv: 2.5, pv: 1.5 }, // uv - зеленая часть, pv - серый остаток
    { name: "02/08", uv: 2.0, pv: 2.0 },
    { name: "03/08", uv: 3.5, pv: 0.5 },
    { name: "04/08", uv: 2.5, pv: 1.5 },
    { name: "05/08", uv: 2.5, pv: 1.5 },
    { name: "06/08", uv: 2.5, pv: 1.5 },
    { name: "31/08", uv: 2.5, pv: 1.5 },
  ];

  const secondData = [
    { name: "", value: 20, pv: 80 },
    { name: "", value: 30, pv: 70 },
    { name: "", value: 40, pv: 60 },
    { name: "", value: 50, pv: 50 },
    { name: "", value: 70, pv: 30 },
    { name: "", value: 40, pv: 60 },
    { name: "", value: 30, pv: 70 },
    { name: "", value: 20, pv: 80 },
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

  const formatTime = (tick) => {
    const hours = Math.floor(tick);
    const minutes = (tick % 1) * 60;
    return `${hours}:${minutes === 0 ? "00" : minutes}`;
  };

  return (
    <section className={style.dynamics}>
      <h3>Dynamics</h3>

      <div className={style.dynamics__wrapper}>
        <div className={style.dynamics__session_rate}>
          <p>Session Rate</p>

          <div className={style.dynamics__main}>
            <ul>
              <li>
                <p>Retention Rate</p>
                <div className={style.dynamics__session_rate__graph}>
                  <div
                    style={{
                      position: "relative",
                      width: "150px",
                      height: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* SVG контейнер */}
                    <svg
                      width="200"
                      height="200"
                      viewBox="0 0 200 200"
                      style={{ transform: "rotate(-90deg)" }} // Поворачиваем начало на верх
                    >
                      {/* Определение линейного градиента */}
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" style={{ stopColor: "#28DAC6" }} />
                          <stop
                            offset="100%"
                            style={{ stopColor: "#28DAC6" }}
                          />
                        </linearGradient>
                      </defs>

                      {segmentArray.map((_, index) => {
                        const isActive = index < activeSegments;
                        const color = isActive ? "#28DAC6" : "";
                        const radius = 80;
                        const thickness = 18;
                        const gap = 5;
                        const circumference = 2 * Math.PI * radius;
                        const segmentLength = circumference / segments - gap;

                        return (
                          <circle
                            key={index}
                            cx="100"
                            cy="100"
                            r={radius}
                            fill="none"
                            stroke={color}
                            strokeWidth={thickness}
                            strokeDasharray={`${segmentLength} ${circumference}`}
                            strokeDashoffset={
                              -index * (circumference / segments) + gap / 2
                            }
                          />
                        );
                      })}
                    </svg>

                    {/* Центрированный текст */}
                    <div
                      style={{
                        position: "absolute",
                        textAlign: "center",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "bold",
                          color: "#333",
                        }}
                      >
                        {percentage}%
                      </div>
                      <div style={{ fontSize: "1rem", color: "green" }}>
                        +{increment}%
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <p>Session frequency</p>

                <div className={style.dynamics__session_rate__graph}>
                  <div
                    style={{
                      position: "relative",
                      width: "150px",
                      height: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      width="200"
                      height="200"
                      viewBox="0 0 200 200"
                      style={{ transform: "rotate(-90deg)" }} // Поворачиваем начало на верх
                    >
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" style={{ stopColor: "#28DAC6" }} />
                          <stop
                            offset="100%"
                            style={{ stopColor: "#28DAC6" }}
                          />
                        </linearGradient>
                      </defs>

                      {segmentArray.map((_, index) => {
                        const isActive = index < activeSegments;
                        const color = isActive ? "#FF9F43" : "";
                        const radius = 80;
                        const thickness = 18;
                        const gap = 5;
                        const circumference = 2 * Math.PI * radius;
                        const segmentLength = circumference / segments - gap;

                        return (
                          <circle
                            key={index}
                            cx="100"
                            cy="100"
                            r={radius}
                            fill="none"
                            stroke={color}
                            strokeWidth={thickness}
                            strokeDasharray={`${segmentLength} ${circumference}`}
                            strokeDashoffset={
                              -index * (circumference / segments) + gap / 2
                            }
                          />
                        );
                      })}
                    </svg>

                    <div
                      style={{
                        position: "absolute",
                        textAlign: "center",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "bold",
                          color: "#333",
                        }}
                      >
                        {percentage}%
                      </div>
                      <div style={{ fontSize: "1rem", color: "green" }}>
                        +{increment}%
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <div className={style.dynamics__item}>
              <div className={style.dynamics__item__text}>
                <p>Average visit time</p>
                <span>3:20 h</span>

                <div className={style.dynamics__item__procents}>
                  <TrendUp />
                  <p style={{ color: "#28C76F" }}>39.6%</p>
                </div>
              </div>
              <ResponsiveContainer width={250} height={200}>
                <BarChart data={firstData} barCategoryGap="20%">
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "#ccc" }}
                    fontSize={10}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, 4]}
                    tickFormatter={formatTime}
                    tick={{ fill: "#ccc" }}
                    fontSize={10}
                  />
                  <Tooltip cursor={{ fill: "rgba(200, 200, 200, 0.2)" }} />
                  {/* Серый бар */}
                  <Bar
                    dataKey="pv"
                    stackId="a"
                    fill="#4DD290"
                    radius={[0, 0, 5, 5]}
                  />
                  {/* Зелёный бар */}
                  <Bar
                    dataKey="uv"
                    stackId="a"
                    fill="#d9d9d9"
                    radius={[5, 5, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className={style.dynamics__item}>
              <div className={style.dynamics__item__text}>
                <p>Average number of screens per session</p>
                <span>3:20 h</span>

                <div className={style.dynamics__item__procents}>
                  <TrendDown />
                  <p style={{ color: "#EA5455" }}>39.6%</p>
                </div>
              </div>
              <div>
                <ResponsiveContainer width="100%" height={195}>
                  <BarChart
                    layout="vertical"
                    data={secondData}
                    // margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    margin={{ left: -55 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      horizontal={false}
                      vertical={false}
                    />
                    <XAxis
                      type="number"
                      domain={[0, 100]}
                      tick={{ fontSize: 10 }}
                    />
                    <YAxis
                      type="category"
                      dataKey="name"
                      axisLine={false}
                      tick={false}
                    />
                    <Bar
                      dataKey="pv"
                      stackId="a"
                      fill="#918989"
                      radius={[5, 0, 0, 5]}
                    />
                    {/* Зелёный бар */}
                    <Bar
                      dataKey="value"
                      stackId="a"
                      fill="#d9d9d9"
                      radius={[0, 5, 5, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
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
                  <Tooltip />
                  <Radar
                    name="procents"
                    dataKey="A"
                    stroke="#28DAC6"
                    fill="#7367F0"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dynamics;
