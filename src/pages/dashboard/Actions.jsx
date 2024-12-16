import React from "react";
import style from "./style.module.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ReactComponent as View } from "../../assets/icons/dashboard/actions/view.svg";
import { ReactComponent as Check1 } from "../../assets/icons/dashboard/actions/check-circle.svg";
import { ReactComponent as Check2 } from "../../assets/icons/dashboard/actions/check-circle-2.svg";
import { ReactComponent as Walk } from "../../assets/icons/dashboard/actions/walk.svg";

const Actions = ({ percentage = 62.5, increment = 18.2 }) => {
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
    </section>
  );
};

export default Actions;
