import React from "react";
import style from "./style.module.scss";
import { ReactComponent as Img1 } from "../../assets/icons/psychotypes/1.svg";
import { ReactComponent as Img2 } from "../../assets/icons/psychotypes/2.svg";
import { ReactComponent as Img3 } from "../../assets/icons/psychotypes/3.svg";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Active tiger", value: 400, procents: 12 },
  { name: "Interested adventurer", value: 300, procents: 23 },
  { name: "Forever resting sloth", value: 210, procents: 14 },
  { name: "A swim-loving trickster", value: 80, procents: 12 },
  { name: "Unstoppable athlete", value: 40, procents: 12 },
  { name: "Foodie", value: 43, procents: 12 },
  { name: "Pointy-head", value: 123, procents: 12 },
  { name: "Family fan", value: 123, procents: 12 },
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

const getTopThreeIndexes = (data) => {
  return [...data]
    .map((entry, index) => ({ index, value: entry.value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 3)
    .map((entry) => entry.index);
};

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
  index,
  procents,
  topThreeIndexes,
}) => {
  if (topThreeIndexes.includes(index)) {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="12"
      >
        {procents}%
      </text>
    );
  }
  return null;
};

const MostActiveSegment = () => {
  const topThreeIndexes = getTopThreeIndexes(data);

  return (
    <section className={style.most_active_segment}>
      <h3>Top-3 portrait of the most active segment</h3>

      <div className={style.most_active_segment__top}>
        <ul>
          {[
            {
              icon: <Img1 />,
              name: "Active Tiger",
              gender: "Male",
              age: "36 - 45",
              country: "India",
              religion: "Hindu",
              interests:
                "Drinker, Like to dance, Hedonist, Live in a non-stop rhythm",
            },

            {
              icon: <Img2 />,
              name: "Interested Adventurer",
              gender: "Female",
              age: "25 - 35",
              country: "USA",
              religion: "Christian",
              interests: "Explorer, Loves outdoor activities, Social butterfly",
            },

            {
              icon: <Img3 />,
              name: "Forever Resting Sloth",
              gender: "Male",
              age: "45 - 55",
              country: "Canada",
              religion: "Agnostic",
              interests: "Relaxation, Books, Home comfort, Quiet life",
            },
          ].map((item, index) => (
            <li key={index}>
              <div className={style.most_active_segment__item__top}>
                {item.icon}
                <p>{item.name}</p>
              </div>

              <ul>
                <li>
                  <p>Gender</p>
                  <p>{item.gender}</p>
                </li>

                <li>
                  <p>Age</p>
                  <p>{item.age} y.o.</p>
                </li>

                <li>
                  <p>Country</p>
                  <p>{item.country}</p>
                </li>

                <li>
                  <p>Religion</p>
                  <p>{item.religion}</p>
                </li>

                <li>
                  <p>Interests</p>
                  <p>{item.interests}</p>
                </li>
              </ul>
            </li>
          ))}
        </ul>

        <PieChart width={170} height={170}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={85}
            fill="#8884d8"
            dataKey="value"
            label={(props) =>
              renderCustomizedLabel({ ...props, topThreeIndexes })
            }
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </section>
  );
};

export default MostActiveSegment;
