import React, { useState } from "react";
import style from "./style.module.scss";
import { ReactComponent as FirstImg1 } from "../../assets/icons/psychotypes/1.svg";
import { ReactComponent as FirstImg2 } from "../../assets/icons/psychotypes/2.svg";
import { ReactComponent as FirstImg3 } from "../../assets/icons/psychotypes/3.svg";
import { ReactComponent as FirstImg4 } from "../../assets/icons/psychotypes/4.svg";
import { ReactComponent as FirstImg5 } from "../../assets/icons/psychotypes/5.svg";
import { ReactComponent as FirstImg6 } from "../../assets/icons/psychotypes/6.svg";
import { ReactComponent as FirstImg7 } from "../../assets/icons/psychotypes/7.svg";
import { ReactComponent as FirstImg8 } from "../../assets/icons/psychotypes/8.svg";
import { ReactComponent as ChevronRight } from "../../assets/icons/psychotypes/chevron-right.svg";
import { ReactComponent as ChevronDown } from "../../assets/icons/psychotypes/chevron-down.svg";

import { ReactComponent as ArrowDown } from "../../assets/icons/psychotypes/arrow-down.svg";
import { ReactComponent as Coffee } from "../../assets/icons/psychotypes/coffee.svg";
import { ReactComponent as Music } from "../../assets/icons/psychotypes/music.svg";
import { ReactComponent as Breakfast } from "../../assets/icons/psychotypes/breakfast.svg";
import { ReactComponent as BayView } from "../../assets/icons/psychotypes/bay-view.svg";
import { ReactComponent as Baby } from "../../assets/icons/psychotypes/baby.svg";
import { ReactComponent as Wine } from "../../assets/icons/psychotypes/wine.svg";

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import Entertainment from "./Entertainment";

const Psychotypes = ({ filterChoose }) => {
  const [choosePsychotype, setChoosePsychotype] = useState(null);
  const [choosePsychotype2, setChoosePsychotype2] = useState(null);
  const [showDetailsIndex, setShowDetailsIndex] = useState(null);
  const [selectValue, setSelectValue] = useState("");

  const data = [
    { title: "Want to share energy", shows: 12, value: 23 },
    { title: "Want to recuperate", shows: 5, value: 2 },
    { title: "Need to cool down", shows: 6, value: 6 },
    { title: "Romance me", shows: 12, value: 12 },
    { title: "Find my mood, plz", shows: 31, value: 23 },
    { title: "Looking for harmony", shows: 5, value: 12 },
    { title: "Give me chill", shows: 7, value: 5 },
    { title: "Want to admire", shows: 9, value: 9 },
    { title: "No comments", shows: 0, value: 0 },
  ];

  const CustomLabel = ({ x, y, value }) => (
    <text x={x + 70} y={y - 2} fill="#8c8c8c" fontSize="9" textAnchor="start">
      {value}
    </text>
  );

  return (
    <React.Fragment>
      {filterChoose === "entertainment" ? (
        <Entertainment />
      ) : (
        <React.Fragment>
          <section className={style.psychotypes}>
            <div className={style.psychotypes__item}>
              <div className={style.psychotypes__item__top}>
                <h2>Users by psychotype</h2>
                <p>8.52k</p>
              </div>

              <table className={style.psychotypes__list}>
                <tr>
                  <th></th>
                  <th>Total people</th>
                  <th>Over a period</th>
                  <th></th>
                </tr>

                {[
                  {
                    icon: <FirstImg1 />,
                    name: "Active tiger",
                    totalPeople: 1350,
                    overPeriod: 350,
                  },

                  {
                    icon: <FirstImg2 />,
                    name: "Interested adventurer",
                    totalPeople: 1350,
                    overPeriod: 350,
                  },

                  {
                    icon: <FirstImg3 />,
                    name: "Forever resting sloth",
                    totalPeople: 1350,
                    overPeriod: 350,
                  },

                  {
                    icon: <FirstImg4 />,
                    name: "A swim-loving trickster",
                    totalPeople: 1350,
                    overPeriod: 350,
                  },

                  {
                    icon: <FirstImg5 />,
                    name: "Unstoppable athlete",
                    totalPeople: 1350,
                    overPeriod: 350,
                  },

                  {
                    icon: <FirstImg6 />,
                    name: "Foodie",
                    totalPeople: 1350,
                    overPeriod: 350,
                  },

                  {
                    icon: <FirstImg7 />,
                    name: "Pointy-head",
                    totalPeople: 1350,
                    overPeriod: -350,
                  },

                  {
                    icon: <FirstImg8 />,
                    name: "Family fan",
                    totalPeople: 1350,
                    overPeriod: 350,
                  },
                ].map(({ icon, name, totalPeople, overPeriod }) => (
                  <tr className={style.psychotypes__list__items}>
                    <td>
                      <div className={style.psychotypes__name}>
                        {icon}
                        <p>{name}</p>
                      </div>
                    </td>

                    <td>
                      <p>{new Intl.NumberFormat("en").format(totalPeople)}</p>
                    </td>

                    <td>
                      <p
                        style={
                          overPeriod < 0
                            ? { color: "#ff453a" }
                            : { color: "#28c76f" }
                        }
                      >
                        {overPeriod > 0 && "+"}
                        {new Intl.NumberFormat("en").format(overPeriod)}
                      </p>
                    </td>

                    <td>
                      <button
                        onClick={() =>
                          setChoosePsychotype({
                            name: name,
                          })
                        }
                      >
                        <ChevronRight />
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
            </div>

            {choosePsychotype && (
              <React.Fragment>
                <div
                  className={`${style.psychotypes__item} ${style.psychotypes__item__spec2}`}
                >
                  <h2 className={style.psychotypes__item__title}>
                    The most popular interests and content
                  </h2>

                  <ul className={style.psychotypes__item__list}>
                    {[
                      {
                        title: "Melomaniac",
                        totalPeople: 350,
                        overPeriod: 320,
                        elements: [
                          {
                            title: "Melomaniac",
                            totalPeople: 108,
                            overPeriod: -7,
                          },

                          {
                            title: "Clubs",
                            totalPeople: 108,
                            overPeriod: -7,
                          },

                          {
                            title: "Aquaparks",
                            totalPeople: 108,
                            overPeriod: 34,
                          },

                          {
                            title: "Gyms",
                            totalPeople: 108,
                            overPeriod: -327,
                          },

                          {
                            title: "Сoffee houses",
                            totalPeople: 108,
                            overPeriod: 32,
                          },
                        ],
                      },

                      {
                        title: "Melomaniac",
                        totalPeople: 350,
                        overPeriod: 320,
                        elements: [
                          {
                            title: "Melomaniac",
                            totalPeople: 108,
                            overPeriod: -7,
                          },

                          {
                            title: "Clubs",
                            totalPeople: 108,
                            overPeriod: -7,
                          },

                          {
                            title: "Aquaparks",
                            totalPeople: 108,
                            overPeriod: 34,
                          },

                          {
                            title: "Gyms",
                            totalPeople: 108,
                            overPeriod: -327,
                          },

                          {
                            title: "Сoffee houses",
                            totalPeople: 108,
                            overPeriod: 32,
                          },
                        ],
                      },

                      {
                        title: "Melomaniac",
                        totalPeople: 350,
                        overPeriod: 320,
                        elements: [
                          {
                            title: "Melomaniac",
                            totalPeople: 108,
                            overPeriod: -7,
                          },

                          {
                            title: "Clubs",
                            totalPeople: 108,
                            overPeriod: -7,
                          },

                          {
                            title: "Aquaparks",
                            totalPeople: 108,
                            overPeriod: 34,
                          },

                          {
                            title: "Gyms",
                            totalPeople: 108,
                            overPeriod: -327,
                          },

                          {
                            title: "Сoffee houses",
                            totalPeople: 108,
                            overPeriod: 32,
                          },
                        ],
                      },

                      {
                        title: "Melomaniac",
                        totalPeople: 432,
                        overPeriod: -20,
                        elements: [
                          {
                            title: "Melomaniac",
                            totalPeople: 108,
                            overPeriod: -7,
                          },

                          {
                            title: "Clubs",
                            totalPeople: 108,
                            overPeriod: -7,
                          },

                          {
                            title: "Aquaparks",
                            totalPeople: 108,
                            overPeriod: 34,
                          },

                          {
                            title: "Gyms",
                            totalPeople: 108,
                            overPeriod: -327,
                          },

                          {
                            title: "Сoffee houses",
                            totalPeople: 108,
                            overPeriod: 32,
                          },
                        ],
                      },

                      {
                        title: "Melomaniac",
                        totalPeople: 350,
                        overPeriod: 320,
                        elements: [
                          {
                            title: "Melomaniac",
                            totalPeople: 108,
                            overPeriod: -7,
                          },

                          {
                            title: "Clubs",
                            totalPeople: 108,
                            overPeriod: -7,
                          },

                          {
                            title: "Aquaparks",
                            totalPeople: 108,
                            overPeriod: 34,
                          },

                          {
                            title: "Gyms",
                            totalPeople: 108,
                            overPeriod: -327,
                          },

                          {
                            title: "Сoffee houses",
                            totalPeople: 108,
                            overPeriod: 32,
                          },
                        ],
                      },

                      {
                        title: "Melomaniac",
                        totalPeople: 1233,
                        overPeriod: 320,
                        elements: [
                          {
                            title: "Melomaniac",
                            totalPeople: 108,
                            overPeriod: -7,
                          },

                          {
                            title: "Clubs",
                            totalPeople: 108,
                            overPeriod: -7,
                          },

                          {
                            title: "Aquaparks",
                            totalPeople: 108,
                            overPeriod: 34,
                          },

                          {
                            title: "Gyms",
                            totalPeople: 108,
                            overPeriod: -327,
                          },

                          {
                            title: "Сoffee houses",
                            totalPeople: 108,
                            overPeriod: 32,
                          },
                        ],
                      },

                      {
                        title: "Melomaniac",
                        totalPeople: 350,
                        overPeriod: 320,
                        elements: [
                          {
                            title: "Melomaniac",
                            totalPeople: 108,
                            overPeriod: -7,
                          },

                          {
                            title: "Clubs",
                            totalPeople: 108,
                            overPeriod: -7,
                          },

                          {
                            title: "Aquaparks",
                            totalPeople: 108,
                            overPeriod: 34,
                          },

                          {
                            title: "Gyms",
                            totalPeople: 108,
                            overPeriod: -327,
                          },

                          {
                            title: "Сoffee houses",
                            totalPeople: 108,
                            overPeriod: 32,
                          },
                        ],
                      },
                    ].map(
                      ({ title, totalPeople, overPeriod, elements }, index) => (
                        <li key={index}>
                          <div
                            className={style.psychotypes__item__main__content}
                          >
                            <p>{title}</p>
                            <p>{totalPeople}</p>
                            <p
                              style={
                                overPeriod < 0
                                  ? { color: "#ff453a" }
                                  : { color: "#28c76f" }
                              }
                            >
                              {overPeriod > 0 && "+"}
                              {new Intl.NumberFormat("en").format(overPeriod)}
                            </p>
                            <button
                              onClick={() =>
                                setShowDetailsIndex(
                                  showDetailsIndex === index ? null : index
                                )
                              }
                            >
                              <ChevronDown
                                style={
                                  showDetailsIndex === index
                                    ? { transform: "rotate(180deg)" }
                                    : {
                                        transform: "rotate(0deg)",
                                      }
                                }
                              />
                            </button>
                          </div>

                          <div
                            className={style.psychotypes__item__list__details}
                          >
                            <ul>
                              {showDetailsIndex === index &&
                                elements.map(
                                  (
                                    { title, totalPeople, overPeriod },
                                    index
                                  ) => (
                                    <li key={index}>
                                      <p>{title}</p>
                                      <p>{totalPeople}</p>
                                      <p
                                        style={
                                          overPeriod < 0
                                            ? { color: "#ff453a" }
                                            : { color: "#28c76f" }
                                        }
                                      >
                                        {overPeriod > 0 && "+"}
                                        {new Intl.NumberFormat("en").format(
                                          overPeriod
                                        )}
                                      </p>
                                    </li>
                                  )
                                )}
                            </ul>
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div
                  className={`${style.psychotypes__item} ${style.psychotypes__item__last}`}
                >
                  <div className={style.psychotypes__item__top}>
                    <h2>Total people</h2>
                    <p>8.52k</p>
                  </div>

                  <div className={style.psychotypes__item__select}>
                    <p>Interest</p>
                    <select
                      onChange={(event) => setSelectValue(event.target.value)}
                      value={selectValue}
                    >
                      <option value="Melomaniac">Melomaniac</option>
                      <option value="Aquaparks">Aquaparks</option>
                      <option value="Restaurants">Restaurants</option>
                    </select>
                  </div>

                  <div className={style.psychotypes__item__data}>
                    <div>
                      <button>
                        <ArrowDown />
                      </button>
                    </div>

                    <p>Total people</p>
                    <p>Over a period</p>
                  </div>

                  <ul className={style.psychotypes__item__list__sec}>
                    {[
                      {
                        name: "Restaurants",
                        totalPeople: 852,
                        overPeriod: 123,
                      },

                      {
                        name: "Clubs",
                        totalPeople: 852,
                        overPeriod: 123,
                      },

                      {
                        name: "Aquaparks",
                        totalPeople: 852,
                        overPeriod: 123,
                      },

                      {
                        name: "Gyms",
                        totalPeople: 852,
                        overPeriod: 123,
                      },

                      {
                        name: "Сoffee houses",
                        totalPeople: 852,
                        overPeriod: 123,
                      },

                      {
                        name: "Bars",
                        totalPeople: 852,
                        overPeriod: -123,
                      },

                      {
                        name: "City parks",
                        totalPeople: 2352,
                        overPeriod: 123,
                      },
                    ].map(({ name, totalPeople, overPeriod }, index) => (
                      <li key={index}>
                        <div
                          className={style.psychotypes__item__list__item__main}
                        >
                          <p>{name}</p>
                          <p>{totalPeople}</p>
                          <p
                            style={
                              overPeriod < 0
                                ? { color: "#ff453a" }
                                : { color: "#28c76f" }
                            }
                          >
                            {overPeriod > 0 && "+"}
                            {new Intl.NumberFormat("en").format(overPeriod)}
                          </p>
                        </div>

                        {index === 0 && (
                          <ul>
                            <li>
                              <Coffee />
                              <p>Tasty coffee</p>
                            </li>

                            <li>
                              <Music />
                              <p>Live music</p>
                            </li>

                            <li>
                              <Breakfast />
                              <p>Breakfast</p>
                            </li>

                            <li>
                              <BayView />
                              <p>Bay View</p>
                            </li>

                            <li>
                              <Baby />
                              <p>Children's room</p>
                            </li>

                            <li>
                              <Wine />
                              <p>Wine list</p>
                            </li>
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </React.Fragment>
            )}
          </section>

          <section className={style.psychotypes}>
            <div className={style.psychotypes__item}>
              <div className={style.psychotypes__item__top}>
                <h2>Feelings starts</h2>
                <p>562</p>
              </div>

              <table className={style.psychotypes__list}>
                <tr>
                  <th></th>
                  <th>Total people</th>
                  <th>Over a period</th>
                  <th></th>
                </tr>

                {[
                  {
                    icon: <FirstImg1 />,
                    name: "Active tiger",
                    totalPeople: 1350,
                    overPeriod: 350,
                  },

                  {
                    icon: <FirstImg2 />,
                    name: "Interested adventurer",
                    totalPeople: 1350,
                    overPeriod: 350,
                  },

                  {
                    icon: <FirstImg3 />,
                    name: "Forever resting sloth",
                    totalPeople: 1350,
                    overPeriod: 350,
                  },

                  {
                    icon: <FirstImg4 />,
                    name: "A swim-loving trickster",
                    totalPeople: 1350,
                    overPeriod: 350,
                  },

                  {
                    icon: <FirstImg5 />,
                    name: "Unstoppable athlete",
                    totalPeople: 1350,
                    overPeriod: 350,
                  },

                  {
                    icon: <FirstImg6 />,
                    name: "Foodie",
                    totalPeople: 1350,
                    overPeriod: 350,
                  },

                  {
                    icon: <FirstImg7 />,
                    name: "Pointy-head",
                    totalPeople: 1350,
                    overPeriod: -350,
                  },

                  {
                    icon: <FirstImg8 />,
                    name: "Family fan",
                    totalPeople: 1350,
                    overPeriod: 350,
                  },
                ].map(({ icon, name, totalPeople, overPeriod }) => (
                  <tr className={style.psychotypes__list__items}>
                    <td>
                      <div className={style.psychotypes__name}>
                        {icon}
                        <p>{name}</p>
                      </div>
                    </td>

                    <td>
                      <p>{new Intl.NumberFormat("en").format(totalPeople)}</p>
                    </td>

                    <td>
                      <p
                        style={
                          overPeriod < 0
                            ? { color: "#ff453a" }
                            : { color: "#28c76f" }
                        }
                      >
                        {overPeriod > 0 && "+"}
                        {new Intl.NumberFormat("en").format(overPeriod)}
                      </p>
                    </td>

                    <td>
                      <button
                        onClick={() =>
                          setChoosePsychotype2({
                            name: name,
                          })
                        }
                      >
                        <ChevronRight />
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
            </div>

            {choosePsychotype2 && (
              <React.Fragment>
                <div
                  className={`${style.psychotypes__item} ${style.psychotypes__item__spec}`}
                >
                  <h2 className={style.psychotypes__item__title}>
                    Sentiment table
                  </h2>

                  <div className={style.psychotypes__item__top__data}>
                    <p>Shows</p>
                    <p>Average match</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    {data.map((item, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        {/* Текстовые метки */}
                        <span
                          style={{
                            fontSize: "14px",
                            color: "#4A4A4A",
                            width: "220px",
                          }}
                        >
                          {item.title}
                        </span>
                        <span
                          style={{
                            width: "30px",
                            textAlign: "right",
                            color: "#4A4A4A",
                          }}
                        >
                          {item.shows}
                        </span>

                        {/* График */}
                        <div style={{ flex: 2, marginLeft: "10px" }}>
                          <ResponsiveContainer width="100%" height={20}>
                            <BarChart layout="vertical" data={[item]}>
                              <XAxis type="number" hide />
                              <YAxis type="category" dataKey="label" hide />
                              <Bar
                                dataKey="total"
                                fill="#F3F3F3"
                                barSize={10}
                                radius={[10, 10, 10, 10]}
                              />
                              <Bar
                                dataKey="value"
                                fill="#7B61FF"
                                barSize={10}
                                radius={[10, 10, 10, 10]}
                                label={<CustomLabel />}
                              />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </React.Fragment>
            )}
          </section>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Psychotypes;
