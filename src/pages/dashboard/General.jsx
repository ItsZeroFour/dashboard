import React from "react";
import style from "./style.module.scss";
import { ReactComponent as Star1 } from "../../assets/icons/dashboard/general/star-2.svg";
import { ReactComponent as Exclamation } from "../../assets/icons/dashboard/general/exclamation.svg";
import { ReactComponent as Dollar } from "../../assets/icons/dashboard/general/dollar.svg";
import { ReactComponent as Star2 } from "../../assets/icons/dashboard/general/star-fill.svg";

import { RadialBarChart, RadialBar, Legend, PolarAngleAxis } from "recharts";

const data = [
  { value: 90, max: 100, fill: "#4285F4" }, // Синий (90%)
  { value: 70, max: 100, fill: "#FBBC05" }, // Оранжевый (70%)
  { value: 50, max: 100, fill: "#FFD700" }, // Желтый (50%)
  { value: 30, max: 100, fill: "#7856FF" }, // Фиолетовый (30%)
];

const General = () => {
  const backgroundData = data.map((entry) => ({
    ...entry,
    value: entry.max, // Устанавливаем 100% для базовых линий
    fill: "#e0e0e0", // Цвет недостающей части
  }));

  return (
    <section className={style.dashboard__general}>
      <h2>General Statistics</h2>

      <div className={style.dashboard__general__app}>
        <div className={style.dashboard__general__app__main}>
          <h3>App Analytics</h3>

          <ul>
            <li>
              <div>
                <h4>47k</h4>
              </div>
              <p>Total users</p>
            </li>

            <li>
              <div>
                <h4>1.1k</h4>
              </div>
              <p>New members</p>
            </li>

            <li>
              <div>
                <h4>8.1k</h4>
              </div>
              <p>Invitations sent</p>
            </li>

            <li>
              <div>
                <h4>2.2k</h4>
              </div>
              <p>User loss</p>
            </li>
          </ul>
        </div>

        <ul className={style.dashboard__general__app__statistics}>
          <li>
            <div
              className={style.dashboard__general__app__statistics__item__title}
            >
              <Star1 />
              <p>Premium</p>
            </div>

            <div
              className={
                style.dashboard__general__app__statistics__item__statistics
              }
            >
              <div>
                <p>15k</p>
                <p>+1.3k</p>
              </div>

              <div>
                <p>31%</p>
                <p>+1.3k</p>
              </div>
            </div>
          </li>

          <li>
            <div
              className={style.dashboard__general__app__statistics__item__title}
            >
              <Exclamation />
              <p>Premium</p>
            </div>

            <div
              className={
                style.dashboard__general__app__statistics__item__statistics
              }
            >
              <div>
                <p>15k</p>
                <p>+1.3k</p>
              </div>

              <div>
                <p>31%</p>
                <p>+1.3k</p>
              </div>
            </div>
          </li>

          <li>
            <div
              className={style.dashboard__general__app__statistics__item__title}
            >
              <Dollar />
              <p>Premium</p>
            </div>

            <div
              className={
                style.dashboard__general__app__statistics__item__statistics
              }
            >
              <div>
                <p>15k</p>
                <p>+1.3k</p>
              </div>

              <div>
                <p>31%</p>
                <p>+1.3k</p>
              </div>
            </div>
          </li>

          <li>
            <div
              className={style.dashboard__general__app__statistics__item__title}
            >
              <Star2 />
              <p>Premium</p>
            </div>

            <div
              className={
                style.dashboard__general__app__statistics__item__statistics
              }
            >
              <div>
                <p>15k</p>
                <p>+1.3k</p>
              </div>

              <div>
                <p>31%</p>
                <p>+1.3k</p>
              </div>
            </div>
          </li>
        </ul>

        <div style={{ textAlign: "center" }}>
          {/* График */}
          <RadialBarChart
            width={350}
            height={310}
            cx="50%"
            cy="60%"
            innerRadius="20%"
            outerRadius="140%"
            startAngle={180} // Начало дуг
            endAngle={0} // Конец дуг
            barSize={8}
            data={backgroundData} // Отображаем сначала фоновые линии
          >
            {/* Цветные дуги */}
            <RadialBar data={data} dataKey="value" cornerRadius={20} />

            <RadialBar
              minAngle={15}
              background={{ fill: "#E0E0E0" }}
              clockWise
              dataKey="value"
            />

            {/* Убираем ось (лишние подписи) */}
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          </RadialBarChart>

          {/* Текст в центре */}
          <div
            style={{
              position: "relative",
              top: "-130px", // Подстройка текста для центра
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            47k
            <div style={{ color: "green", fontSize: "10px" }}>+520</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default General;
