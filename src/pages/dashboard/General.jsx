import React, { useState } from "react";
import style from "./style.module.scss";
import { ReactComponent as Star1 } from "../../assets/icons/dashboard/general/star-2.svg";
import { ReactComponent as Exclamation } from "../../assets/icons/dashboard/general/exclamation.svg";
import { ReactComponent as Dollar } from "../../assets/icons/dashboard/general/dollar.svg";
import { ReactComponent as Star2 } from "../../assets/icons/dashboard/general/star-fill.svg";

import {
  RadialBarChart,
  RadialBar,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

/* Gender */

const data = [
  {
    name: "Category 1",
    value: 100,
    fill: "#4A90E2", // Синий цвет
  },
  {
    name: "Category 2",
    value: 65,
    fill: "#F5A623", // Оранжевый цвет
  },
  {
    name: "Category 3",
    value: 50,
    fill: "#F8E71C", // Желтый цвет
  },
  {
    name: "Category 4",
    value: 87,
    fill: "#9013FE", // Фиолетовый цвет
  },

  {
    name: "Category 5",
    value: 35,
    fill: "#432673", // Фиолетовый цвет
  },
];

const dataGender = [
  { name: "Progress", value: 45 },
  { name: "Remaining", value: 55 },
];

const dataGender1 = [
  { name: "Progress", value: 35 },
  { name: "Remaining", value: 65 },
];

const dataGender2 = [
  { name: "Progress", value: 20 },
  { name: "Remaining", value: 80 },
];

const COLORS = ["#26C06D", "#EAEAEA"];
const COLORS1 = ["#7367F0", "#EAEAEA"];
const COLORS2 = ["#28DAC6", "#EAEAEA"];

/* device */

const deviceData = [
  { name: "iOS", value: 400 },
  { name: "Android", value: 300 },
  { name: "Huawei", value: 300 },
  { name: "Other", value: 124 },
];

const deviceCOLORS = [
  "rgb(255, 159, 67)",
  "rgb(255, 159, 67, 0.8)",
  "rgb(255, 159, 67, 0.6)",
  "rgb(255, 159, 67, 0.5)",
];

/* age */

const ageData = [
  { name: "18 - 24", value: 150, color: "#836FFF", offset: -10 },
  { name: "25 - 35", value: 350, color: "#FFD54F", offset: -5 },
  { name: "35 - 45", value: 1500, color: "#546E7A", offset: 5 },
  { name: "45 - 50", value: 4555, color: "#2196F3", offset: 10 },
  { name: "50+", value: 8000, color: "#26C6DA", offset: 15 },
];

const General = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <section className={style.dashboard__general} ref={ref}>
      <h2>General Statistics</h2>

      {inView && (
        <React.Fragment>
          <motion.div
            className={style.dashboard__general__app}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
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
                  className={
                    style.dashboard__general__app__statistics__item__title
                  }
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
                  className={
                    style.dashboard__general__app__statistics__item__title
                  }
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
                  className={
                    style.dashboard__general__app__statistics__item__title
                  }
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
                  className={
                    style.dashboard__general__app__statistics__item__title
                  }
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

            <div className={style.dashboard__general__app__graph}>
              <RadialBarChart
                width={470}
                height={440}
                cx="50%"
                cy="47%"
                innerRadius="35%"
                outerRadius="100%"
                barSize={10}
                data={data}
                startAngle={180}
                endAngle={0}
              >
                <Tooltip
                  formatter={(value, name, props) => {
                    return [
                      `Value: ${value};`,
                      `Category: ${props.payload.name}`,
                    ];
                  }}
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                  labelStyle={{ fontWeight: "bold" }}
                />
                <RadialBar
                  minAngle={5}
                  background
                  clockWise
                  dataKey="value"
                  cornerRadius={5}
                />
                <text
                  x="50%"
                  y="39%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                >
                  47k
                </text>
                <text
                  x="50%"
                  y="43%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{ fontSize: "12px", fill: "green" }}
                >
                  +520
                </text>
              </RadialBarChart>
            </div>
          </motion.div>

          <motion.div
            className={style.dashboard__general__people}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <div className={style.dashboard__general__people__left}>
              <div className={style.dashboard__general__people__gender}>
                <div className={style.dashboard__general__people__gender__left}>
                  <h3>Gender</h3>
                  <ul>
                    <li>Male</li>
                    <li>Female</li>
                    <li>Other</li>
                  </ul>
                </div>

                <div
                  className={style.dashboard__general__people__gender__right}
                >
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      position: "relative",
                    }}
                  >
                    <PieChart width={200} height={200}>
                      <Pie
                        data={dataGender}
                        innerRadius={80} // Внутренний радиус (для кольцевой формы)
                        outerRadius={90} // Внешний радиус
                        startAngle={90} // Начало рисования
                        endAngle={-270} // Конец рисования (обратный ход)
                        fill="#8884d8"
                        dataKey="value"
                        cornerRadius={5} // Закруглённые углы
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                      </Pie>
                    </PieChart>
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      45%
                      <div style={{ fontSize: "16px", color: "#999" }}>
                        21,2k
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      position: "relative",
                    }}
                  >
                    <PieChart width={200} height={200}>
                      <Pie
                        data={dataGender1}
                        innerRadius={80} // Внутренний радиус (для кольцевой формы)
                        outerRadius={90} // Внешний радиус
                        startAngle={90} // Начало рисования
                        endAngle={-270} // Конец рисования (обратный ход)
                        fill="#8884d8"
                        dataKey="value"
                        cornerRadius={5} // Закруглённые углы
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS1[index]} />
                        ))}
                      </Pie>
                    </PieChart>
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      35%
                      <div style={{ fontSize: "16px", color: "#999" }}>
                        16,5k
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      position: "relative",
                    }}
                  >
                    <PieChart width={200} height={200}>
                      <Pie
                        data={dataGender2}
                        innerRadius={80} // Внутренний радиус (для кольцевой формы)
                        outerRadius={90} // Внешний радиус
                        startAngle={90} // Начало рисования
                        endAngle={-270} // Конец рисования (обратный ход)
                        fill="#8884d8"
                        dataKey="value"
                        cornerRadius={5} // Закруглённые углы
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS2[index]} />
                        ))}
                      </Pie>
                    </PieChart>
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      20%
                      <div style={{ fontSize: "16px", color: "#999" }}>
                        9,4k
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={style.dashboard__general__people__device}>
                <div className={style.dashboard__general__people__device__info}>
                  <h3>Device type</h3>

                  <ul>
                    <li>
                      <p>iOS</p>
                    </li>

                    <li>
                      <p>Android</p>
                    </li>

                    <li>
                      <p>Huawei</p>
                    </li>

                    <li>
                      <p>Other</p>
                    </li>
                  </ul>
                </div>

                <div>
                  <PieChart width={200} height={200}>
                    {" "}
                    {/* Увеличили ширину и высоту */}
                    <Pie
                      data={deviceData}
                      cx={100} // Центр X (середина width)
                      cy={100} // Центр Y (середина height)
                      innerRadius={70} // Внутренний радиус (увеличили)
                      outerRadius={95} // Внешний радиус (увеличили)
                      fill="#8884d8"
                      paddingAngle={0}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={deviceCOLORS[index]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    {/* Корректируем текстовые элементы */}
                    <svg>
                      <text
                        x={105} // Корректируем позицию текста под центр
                        y={100}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize="14" // Увеличили шрифт
                        fontWeight="bold"
                      >
                        8.52k
                      </text>

                      <text
                        x={105}
                        y={115}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize="10" // Увеличили шрифт
                        fontWeight="regular"
                      >
                        Total
                      </text>
                    </svg>
                  </PieChart>
                </div>
              </div>
            </div>

            <div className={style.dashboard__general__people__right}>
              <div className={style.dashboard__general__people__age}>
                <div className={style.dashboard__general__people__age__top}>
                  <h3>Age range</h3>
                  <p>
                    <span>47k</span> total users
                  </p>
                </div>

                <ul>
                  <li>
                    <p>18 - 24</p>
                    <span>150</span>
                  </li>

                  <li>
                    <p>25 - 35</p>
                    <span>350</span>
                  </li>

                  <li>
                    <p>36 - 45</p>
                    <span>1.500</span>
                  </li>

                  <li>
                    <p>45 - 50</p>
                    <span>4.555</span>
                  </li>

                  <li>
                    <p>50+</p>
                    <span>8.000</span>
                  </li>
                </ul>
              </div>

              <div>
                <PieChart width={170} height={170}>
                  <Pie
                    data={ageData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={85}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {ageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>

                  <Tooltip />
                </PieChart>
              </div>
            </div>
          </motion.div>
        </React.Fragment>
      )}
    </section>
  );
};

export default General;
