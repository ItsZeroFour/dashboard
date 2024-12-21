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
  Cell,
  ResponsiveContainer,
  Bar,
  BarChart,
  XAxis,
  YAxis,
} from "recharts";
import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useInView } from "react-intersection-observer";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const bubbleTextPlugin = {
  id: "bubbleTextPlugin",
  afterDatasetsDraw: (chart) => {
    const ctx = chart.ctx;
    ctx.save();

    chart.data.datasets.forEach((dataset, datasetIndex) => {
      const meta = chart.getDatasetMeta(datasetIndex);
      meta.data.forEach((bubble, index) => {
        const { x, y } = bubble.getProps(["x", "y"], true);
        const value = dataset.data[index].r;
        const value2 = dataset.data[index].p;

        // Размер и стиль текста
        ctx.font = "Regular 14px Unbounded";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Рисуем текст
        ctx.fillText(`${value}k`, x, y);
        ctx.fillText(`${value2}`, x, y + 10);
      });
    });

    ctx.restore();
  },
};

const PsychotypesAndEvents = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

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

  // Bubble chart
  const bubbleData = {
    datasets: [
      {
        label: "Left Chart",
        data: [
          { x: 3.2, y: 2.5, r: 45, p: "+12%" }, // 45k
          { x: 3, y: 2, r: 20, p: "+1%" }, // 20k
          { x: 3, y: 1, r: 13, p: "+32%" }, // 13k
          { x: 4, y: 1, r: 18, p: "+67%" }, // 18k
          { x: 2.1, y: 1, r: 6, p: "+11%" }, // 6k
        ],
        backgroundColor: [
          "#7367f0",
          "#0a84ff",
          "#ff9f43",
          "#ffd643",
          "#28dac6",
        ],
      },
      {
        label: "Right Chart",
        data: [
          { x: 6.1, y: 2, r: 60, p: "+23%" }, // 60k
          { x: 5, y: 2, r: 30, p: "+65%" }, // 30k
          { x: 5.2, y: 1, r: 20, p: "+12%" }, // 20k
          { x: 5, y: 3, r: 18, p: "+23%" }, // 18k
          { x: 6, y: 0, r: 8, p: "+12%" }, // 8k
        ],
        backgroundColor: [
          "#8A4FF0",
          "#459AFF",
          "#53C9C2",
          "#FFA04B",
          "#FFD75E",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: (ctx) => `${ctx.raw.r}k` } },
    },
    scales: {
      x: {
        grid: { display: true, color: "rgba(200, 200, 200, 0.2)" },
        ticks: { display: false },
      },
      y: {
        grid: { display: true, color: "rgba(200, 200, 200, 0.2)" },
        ticks: { display: false },
      },
    },
  };

  return (
    <section className={style.psychotypes_and_events} ref={ref}>
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
                  <div>
                    <span>{item.value}</span>
                    <span>/</span>
                    <span>{item.procents}%</span>
                  </div>
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

      <div className={style.events}>
        <h3>Place/events content</h3>

        <ul className={style.events__categorys}>
          <li>
            <p>Leisure</p>
          </li>

          <li>
            <p>Business</p>
          </li>
        </ul>

        <ul className={style.events__types}>
          <li>
            <p>Accounts:</p>
          </li>
          <li>
            <p>Business</p>
          </li>
          <li>
            <p>Business-premium</p>
          </li>
          <li>
            <p>Premium</p>
          </li>
          <li>
            <p>Pro</p>
          </li>
          <li>
            <p>Influencer</p>
          </li>
        </ul>

        {inView && (
          <Bubble
            data={bubbleData}
            options={options}
            plugins={[bubbleTextPlugin]}
          />
        )}
      </div>
    </section>
  );
};

export default PsychotypesAndEvents;
