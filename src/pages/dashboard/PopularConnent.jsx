import React, { useState } from "react";
import style from "./style.module.scss";
import listImg1 from "../../assets/icons/dashboard/popular_content/1.png";
import listImg2 from "../../assets/icons/dashboard/popular_content/2.png";
import listImg3 from "../../assets/icons/dashboard/popular_content/3.png";
import listImg4 from "../../assets/icons/dashboard/popular_content/4.png";
import listImg5 from "../../assets/icons/dashboard/popular_content/5.png";

import { ReactComponent as FirstImg1 } from "../../assets/icons/psychotypes/1.svg";
import { ReactComponent as FirstImg2 } from "../../assets/icons/psychotypes/2.svg";
import { ReactComponent as FirstImg3 } from "../../assets/icons/psychotypes/3.svg";
import { ReactComponent as FirstImg4 } from "../../assets/icons/psychotypes/4.svg";
import { ReactComponent as FirstImg5 } from "../../assets/icons/psychotypes/5.svg";

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const PopularConnent = () => {
  const [activeButton, setActiveButton] = useState(3);

  const CustomLabel = ({ x, y }) => (
    <text x={x} y={y - 3} fill="#8c8c8c" fontSize="8" textAnchor="start">
      Visits
    </text>
  );

  const data = [
    {
      img: listImg1,
      name: "At.mosphere",
      type: "Restaurant",
      views: 520000,
      viewsProcents: "10%",
      bookings: 520000,
      bookingsProcents: "85%",
      visits: {
        value: 520000,
        procents: "85%",
        color: "#7367F0",
        total: 520000,
      },
      mostActiveType: "Forever resting sloth",
      mostActiveTypeIcon: <FirstImg1 />,
      mostActiveTypeCount: 520000,
      mostActiveTypeProcents: "52%",
      interests:
        "Coffee connoisseur, Like lazy vacations, Hookah lover,  Hedonist",
    },

    {
      img: listImg2,
      name: "At.mosphere",
      type: "Restaurant",
      views: 520000,
      viewsProcents: "10%",
      bookings: 520000,
      bookingsProcents: "85%",
      visits: {
        value: 432000,
        procents: "85%",
        color: "#EA5455",
        total: 520000,
      },
      mostActiveType: "Forever resting sloth",
      mostActiveTypeIcon: <FirstImg2 />,
      mostActiveTypeCount: 520000,
      mostActiveTypeProcents: "52%",
      interests:
        "Coffee connoisseur, Like lazy vacations, Hookah lover,  Hedonist",
    },

    {
      img: listImg3,
      name: "At.mosphere",
      type: "Restaurant",
      views: 520000,
      viewsProcents: "10%",
      bookings: 520000,
      bookingsProcents: "85%",
      visits: {
        value: 351000,
        procents: "85%",
        color: "#28C76F",
        total: 520000,
      },
      mostActiveType: "Forever resting sloth",
      mostActiveTypeIcon: <FirstImg3 />,
      mostActiveTypeCount: 520000,
      mostActiveTypeProcents: "52%",
      interests:
        "Coffee connoisseur, Like lazy vacations, Hookah lover,  Hedonist",
    },

    {
      img: listImg4,
      name: "At.mosphere",
      type: "Restaurant",
      views: 520000,
      viewsProcents: "10%",
      bookings: 520000,
      bookingsProcents: "85%",
      visits: {
        value: 228000,
        procents: "85%",
        color: "#00CFE8",
        total: 520000,
      },
      mostActiveType: "Forever resting sloth",
      mostActiveTypeIcon: <FirstImg4 />,
      mostActiveTypeCount: 520000,
      mostActiveTypeProcents: "52%",
      interests:
        "Coffee connoisseur, Like lazy vacations, Hookah lover,  Hedonist",
    },

    {
      img: listImg5,
      name: "At.mosphere",
      type: "Restaurant",
      views: 520000,
      viewsProcents: "10%",
      bookings: 520000,
      bookingsProcents: "85%",
      visits: {
        value: 145000,
        procents: "85%",
        color: "#FFD643",
        total: 520000,
      },
      mostActiveType: "Forever resting sloth",
      mostActiveTypeIcon: <FirstImg5 />,
      mostActiveTypeCount: 520000,
      mostActiveTypeProcents: "52%",
      interests:
        "Coffee connoisseur, Like lazy vacations, Hookah lover,  Hedonist",
    },
  ];

  function formatNumber(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/.0$/, "") + "k";
    }
    return num.toString();
  }

  return (
    <section className={style.popular_content}>
      <h2>Top-5 Popular content</h2>

      <ul className={style.popular_content__buttons}>
        <li>
          <button
            className={
              activeButton === 0 && style.popular_content__button__active
            }
            onClick={() => setActiveButton(0)}
          >
            Free
          </button>
        </li>

        <li>
          <button
            className={
              activeButton === 1 && style.popular_content__button__active
            }
            onClick={() => setActiveButton(1)}
          >
            Cheap
          </button>
        </li>

        <li>
          <button
            className={
              activeButton === 2 && style.popular_content__button__active
            }
            onClick={() => setActiveButton(2)}
          >
            Average cost
          </button>
        </li>

        <li>
          <button
            className={
              activeButton === 3 && style.popular_content__button__active
            }
            onClick={() => setActiveButton(3)}
          >
            Expensive
          </button>
        </li>
      </ul>

      <div className={style.popular_content__list}>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <div className={style.popular_content__item__name}>
                <img src={item.img} alt={item.name} />

                <div className={style.popular_content__name__title}>
                  <h3>{item.name}</h3>
                  <p>{item.type}</p>
                </div>
              </div>

              <div className={style.popular_content__views}>
                <p>Views</p>

                <div className={style.popular_content__views__count}>
                  <p>{formatNumber(item.views)}</p>
                  <span>{item.viewsProcents}</span>
                </div>
              </div>

              <div className={style.popular_content__bookings}>
                <p>Bookings</p>

                <div className={style.popular_content__bookings__count}>
                  <p>{formatNumber(item.bookings)}</p>
                  <span>{item.bookingsProcents}</span>
                </div>
              </div>

              <div className={style.popular_content__visits}>
                <div style={{ flex: 2, marginLeft: "10px", width: 70 }}>
                  <ResponsiveContainer width="100%" height={30}>
                    <BarChart layout="vertical" data={[item.visits]}>
                      <XAxis type="number" hide />
                      <YAxis type="category" dataKey="label" hide />
                      <Bar
                        dataKey="total"
                        fill="#F3F3F3"
                        barSize={15}
                        radius={[10, 10, 10, 10]}
                        style={{ transform: "translateY(10px)" }}
                      />
                      <Bar
                        dataKey="value"
                        fill={item.visits.color}
                        barSize={15}
                        radius={[10, 10, 10, 10]}
                        label={<CustomLabel />}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className={style.popular_content__visits__count}>
                  <p>{formatNumber(item.visits.value)}</p>
                  <span>{item.visits.procents}</span>
                </div>
              </div>

              <div className={style.popular_content__active}>
                <div className={style.popular_content__active__name}>
                  <p>The most active type</p>

                  <div>
                    {item.mostActiveTypeIcon} <p>{item.mostActiveType}</p>
                  </div>
                </div>

                <div className={style.popular_content__active__count}>
                  <p>{formatNumber(item.mostActiveTypeCount)}</p>
                  <span>{item.mostActiveTypeProcents}</span>
                </div>
              </div>

              <div className={style.popular_content__active__interests}>
                <p>Interests</p>
                <p>{item.interests}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PopularConnent;
