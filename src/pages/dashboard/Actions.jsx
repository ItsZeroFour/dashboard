import React, { useState } from "react";
import style from "./style.module.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import { ReactComponent as View } from "../../assets/icons/dashboard/actions/view.svg";
import { ReactComponent as Check1 } from "../../assets/icons/dashboard/actions/check-circle.svg";
import { ReactComponent as Check2 } from "../../assets/icons/dashboard/actions/check-circle-2.svg";
import { ReactComponent as Walk } from "../../assets/icons/dashboard/actions/walk.svg";
import { ReactComponent as More } from "../../assets/icons/dashboard/actions/more-vert.svg";

const Actions = ({ percentage = 62.5, increment = 18.2 }) => {
  const [showPopup, setShowPopup] = useState(false);
  const segments = 32;

  const activeSegments = Math.round((segments * percentage) / 100);

  const segmentArray = Array.from({ length: segments }, (_, index) => index);

  const data = [
    {
      name: "Progress",
      orange: 30, // Длина оранжевого сегмента
      blue: 40, // Длина синего сегмента
      yellow: 10, // Длина жёлтого сегмента
      purple: 20, // Длина фиолетового сегмента
    },
  ];

  const activityData = [
    { date: "1/08", A: 150, B: 80, C: 60, D: 40, E: 20 },
    { date: "3/08", A: 140, B: 100, C: 80, D: 50, E: 30 },
    { date: "6/08", A: 200, B: 120, C: 60, D: 70, E: 20 },
    { date: "9/08", A: 220, B: 150, C: 100, D: 90, E: 30 },
    { date: "12/08", A: 170, B: 80, C: 90, D: 60, E: 40 },
    { date: "15/08", A: 150, B: 110, C: 70, D: 50, E: 30 },
    { date: "18/08", A: 180, B: 140, C: 110, D: 80, E: 50 },
    { date: "21/08", A: 230, B: 170, C: 120, D: 100, E: 60 },
    { date: "24/08", A: 210, B: 160, C: 100, D: 90, E: 80 },
    { date: "27/08", A: 190, B: 150, C: 80, D: 70, E: 60 },
    { date: "30/08", A: 200, B: 180, C: 120, D: 80, E: 50 },
    { date: "2/09", A: 250, B: 200, C: 100, D: 90, E: 40 },
    { date: "5/09", A: 320, B: 220, C: 130, D: 120, E: 80 },
  ];

  return (
    <section className={style.actions}>
      <aside className={style.actions__conversion}>
        <div className={style.actions__conversion__line}>
          <h3>Conversion line</h3>
          <p>42.5k</p>

          <div className={style.actions__conversion__categoryes}>
            <ul>
              {[
                {
                  icon: <View />,
                  name: "Shows",
                  procents: "42.2%",
                  count: 6440,
                },

                {
                  icon: <Check1 />,
                  name: "Cards opened",
                  procents: "23%",
                  count: 6440,
                },

                {
                  icon: <Check2 />,
                  name: "Bookings",
                  procents: "15%",
                  count: 6440,
                },

                {
                  icon: <Walk />,
                  name: "Visits",
                  procents: "52%",
                  count: 6440,
                },
              ].map(({ icon, name, procents, count }) => (
                <li key={name}>
                  <div className={style.actions__conversion__name}>
                    <div className={style.actions__conversion__icon}>
                      {icon}
                    </div>
                    <p>{name}</p>
                  </div>

                  <div className={style.actions__conversion__zifrs}>
                    <p>{procents}</p>
                    <span>{new Intl.NumberFormat("en").format(count)}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <ResponsiveContainer width="100%" height={40}>
            <BarChart
              layout="vertical" // Горизонтальное расположение
              data={data}
              margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
              barSize={20} // Высота линии
            >
              <XAxis type="number" hide /> {/* Скрываем оси */}
              <YAxis dataKey="name" type="category" hide />
              <Tooltip />
              {/* Оранжевый сегмент */}
              <Bar
                dataKey="orange"
                stackId="a"
                fill="#FFA94D"
                radius={[10, 0, 0, 10]}
              />
              {/* Синий сегмент */}
              <Bar dataKey="blue" stackId="a" fill="#3B82F6" />
              {/* Жёлтый сегмент */}
              <Bar dataKey="yellow" stackId="a" fill="#FFD43B" />
              {/* Фиолетовый сегмент */}
              <Bar
                dataKey="purple"
                stackId="a"
                fill="#9775FA"
                radius={[0, 10, 10, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className={style.actions__conversion__rate}>
          <h3>Conversion Rate</h3>

          <div
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
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
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "rgba(115,103,240,1)" }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "rgba(216,8,250,1)" }}
                  />
                </linearGradient>
              </defs>

              {segmentArray.map((_, index) => {
                const isActive = index < activeSegments;
                const color = isActive ? "url(#gradient)" : "";
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
      </aside>

      <aside className={style.actions__activity}>
        <div className={style.actions__activity__top}>
          <h3>Activity monitoring</h3>

          <ul>
            {[
              {
                count: 7840,
                name: "Feedbacks",
              },

              {
                count: 7840,
                name: "Bookings",
              },

              {
                count: 7840,
                name: "Favorites adds",
              },

              {
                count: 7840,
                name: "App opens",
              },

              {
                count: 7840,
                name: "Connects",
              },

              {
                count: 7840,
                name: "Video-reactions",
              },
            ].map(({ count, name }, index) => (
              <li key={name}>
                <input type="checkbox" id={`actions-${index}`} />
                <label htmlFor={`actions-${index}`}>
                  <p>
                    {count > 0 && "+"}
                    {new Intl.NumberFormat("en").format(count)}
                  </p>
                  <span>{name}</span>
                </label>
              </li>
            ))}
          </ul>

          <button onClick={() => setShowPopup(!showPopup)}>
            <More />
          </button>

          {showPopup && (
            <div className={style.actions__activity__popup}>
              <ul>
                <li>
                  <p>Country of origin</p>
                  <select>
                    <option value="India">India</option>
                    <option value="India">India</option>
                    <option value="India">India</option>
                  </select>
                </li>

                <li>
                  <p>Psychotype</p>
                  <select>
                    <option value="Foodie">Foodie</option>
                    <option value="Foodie">Foodie</option>
                    <option value="Foodie">Foodie</option>
                  </select>
                </li>

                <li>
                  <p>Age</p>
                  <select>
                    <option value="18 - 24">18 - 24</option>
                    <option value="18 - 24">18 - 24</option>
                    <option value="18 - 24">18 - 24</option>
                  </select>
                </li>

                <li>
                  <p>Gender</p>
                  <select>
                    <option value="male">male</option>
                    <option value="male">male</option>
                    <option value="male">male</option>
                  </select>
                </li>
              </ul>
            </div>
          )}
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={activityData}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="1 0" />
            <XAxis dataKey="date" fontSize={10} />
            <YAxis domain={[0, 400]} fontSize={10} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="A"
              stroke="#8B5CF6"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="B"
              stroke="#22C55E"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="C"
              stroke="#3B82F6"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="D"
              stroke="#FACC15"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="E"
              stroke="#FB923C"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </aside>
    </section>
  );
};

export default Actions;
