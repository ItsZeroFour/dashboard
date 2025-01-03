import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import filter from "../../assets/icons/header/filter.svg";
import bell from "../../assets/icons/header/bell.svg";
import avatar from "../../assets/images/header/avatar.png";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Calendar } from "../../assets/icons/map/calendar.svg";
import { ReactComponent as List } from "../../assets/icons/psychotypes/list.svg";
import { ReactComponent as Chart } from "../../assets/icons/psychotypes/chart-dots.svg";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Header = ({ filterChoose, setFilterChoose }) => {
  const location = useLocation();

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [backgroundStyle, setBackgroundStyle] = useState({});
  const [backgroundStyle2, setBackgroundStyle2] = useState({});
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleSelect = (ranges) => {
    setDateRange(ranges.selection);
    setIsCalendarOpen(false);
  };

  const navRef = useRef(null);
  const navRef2 = useRef(null);

  const updateBackgroundPosition = (index) => {
    if (!navRef.current) return;
    const nav = navRef.current;
    const buttons = nav.querySelectorAll("button");

    if (!buttons || !buttons[index]) return;
    const button = buttons[index];
    const navRect = nav.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const offsetX = buttonRect.left - navRect.left;
    const offsetY = buttonRect.top - navRect.top;

    setBackgroundStyle({
      transform: `translate(${offsetX}px, ${offsetY}px)`,
      width: `${buttonRect.width}px`,
      height: `${buttonRect.height}px`,
    });
  };

  const updateBackgroundPosition2 = (index) => {
    if (!navRef.current) return;
    const nav = navRef.current;
    const buttons = nav.querySelectorAll("button");

    if (!buttons || !buttons[index]) return;
    const button = buttons[index];
    const navRect = nav.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const offsetX = buttonRect.left - navRect.left;
    const offsetY = buttonRect.top - navRect.top;

    setBackgroundStyle2({
      transform: `translate(${
        index === 1 ? offsetX + 30 : index === 2 ? offsetX + 55 : offsetX + 5
      }px, ${offsetY}px)`,
      width: `${buttonRect.width + 50}px`,
      height: `${buttonRect.height}px`,
    });
  };

  useEffect(() => {
    updateBackgroundPosition(activeIndex);
    updateBackgroundPosition2(activeIndex2);
  }, [activeIndex, activeIndex2]);

  return (
    <header className={style.header}>
      <div className={style.header__wrapper}>
        <h1>Interactive map</h1>

        <div className={style.header__main}>
          <button className={style.header__filter}>
            <img src={filter} alt="filter" />
          </button>

          <div className={style.header__search}>
            <input type="text" placeholder="Search" />
          </div>

          <div className={style.header__not}>
            <button>
              <img src={bell} alt="bell" />

              <div className={style.header__not__count}>
                <p>4</p>
              </div>
            </button>
          </div>

          <div className={style.header__avatar}>
            <Link to="/">
              <img src={avatar} alt="avatar" />
            </Link>
          </div>
        </div>
      </div>

      <section className={style.map__top}>
        <div className={style.map__top__container}>
          <div className={style.map__top__nav}>
            <ul className={style.map__top__nav__list_1} ref={navRef}>
              <div className={style.background} style={backgroundStyle} />
              {["All", "Place", "Events"].map((label, index) => (
                <li key={index}>
                  <button
                    className={index === activeIndex ? style.current : ""}
                    onClick={() => setActiveIndex(index)}
                  >
                    <p className={style.map__upper}>{label}</p>
                  </button>
                </li>
              ))}
            </ul>

            <ul className={style.map__top__nav__list_2}>
              <li>
                <input
                  type="radio"
                  id="all"
                  name="filter"
                  onClick={() => setFilterChoose("all")}
                  checked={filterChoose === "all"}
                />
                <label htmlFor="all" name="filter">
                  All
                </label>
              </li>

              <li>
                <input
                  type="radio"
                  id="entertainment"
                  name="filter"
                  onClick={() => setFilterChoose("entertainment")}
                  checked={filterChoose === "entertainment"}
                />
                <label htmlFor="entertainment" name="filter">
                  Entertainment
                </label>
              </li>

              <li>
                <input
                  type="radio"
                  id="business"
                  name="filter"
                  onClick={() => setFilterChoose("business")}
                  checked={filterChoose === "business"}
                />
                <label htmlFor="business" name="filter">
                  Business
                </label>
              </li>
            </ul>
          </div>

          <div className={style.map__calendar__wrapper}>
            <div
              className={style.map__calendar}
              onClick={() => setIsCalendarOpen(!isCalendarOpen)}
            >
              <div className={style.map__calendar__icon}>
                <Calendar />
              </div>

              <p>
                {`${format(dateRange.startDate, "MMM d yyyy")} - ${format(
                  dateRange.endDate,
                  "MMM d yyyy"
                )}`}
              </p>
            </div>

            {isCalendarOpen && (
              <div className={style.calendarContainer}>
                <DateRange
                  ranges={[dateRange]}
                  onChange={handleSelect}
                  moveRangeOnFirstSelection={false}
                  rangeColors={["#3d91ff"]}
                  locale={ru}
                />
              </div>
            )}
          </div>
        </div>

        <div
          className={
            location.pathname === "/dashboard"
              ? `${style.header__bottom} ${style.header__bottom__spec}`
              : style.header__bottom
          }
        >
          <p>Location: Dubai. Area: JLT</p>
          {location.pathname === "/psychotypes" && (
            <ul>
              <li>
                <button>
                  <List />
                </button>
              </li>

              <li>
                <button>
                  <Chart />
                </button>
              </li>
            </ul>
          )}

          {location.pathname === "/dashboard" && (
            <ul
              className={`${style.map__top__nav__list_1} ${style.map__top__nav__list_2}`}
              ref={navRef2}
            >
              <div className={style.background} style={backgroundStyle2} />
              {["General", "Organic", "Promotion"].map((label, index) => (
                <li key={index}>
                  <button
                    className={index === activeIndex2 ? style.current : ""}
                    onClick={() => setActiveIndex2(index)}
                  >
                    <p className={style.map__upper}>{label}</p>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </header>
  );
};

export default Header;
