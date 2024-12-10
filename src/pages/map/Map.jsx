import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import { ReactComponent as Calendar } from "../../assets/icons/map/calendar.svg";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css"; // Тема
import map from "../../assets/images/map/map.png";

/* Hotels images */

import { ReactComponent as Location } from "../../assets/icons/map/location.svg";
import hotelImg1 from "../../assets/images/map/hotel-img-1.png";
import hotelImg2 from "../../assets/images/map/hotel-img-2.png";
import { ReactComponent as Time } from "../../assets/icons/map/time.svg";
import { ReactComponent as Walk } from "../../assets/icons/map/walk.svg";
import { ReactComponent as ProfilePlus } from "../../assets/icons/map/profile-plus.svg";
import { ReactComponent as Star } from "../../assets/icons/map/star.svg";
import { ReactComponent as CheckCircle } from "../../assets/icons/map/check-circle.svg";
import { ReactComponent as Landmark } from "../../assets/icons/map/landmark.svg";
import { Link } from "react-router-dom";

import dots from "../../assets/icons/map/dots_menu.svg";
import { ReactComponent as ChevronDown } from "../../assets/icons/map/chevron-down.svg";
import { ReactComponent as Maximize } from "../../assets/icons/map/maximize.svg";

const Map = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [backgroundStyle, setBackgroundStyle] = useState({});
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [showLegend, setShowLegend] = useState(false);

  const navRef = useRef(null);

  const handleSelect = (ranges) => {
    setDateRange(ranges.selection);
    setIsCalendarOpen(false);
  };

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

  useEffect(() => {
    updateBackgroundPosition(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    updateBackgroundPosition(activeIndex);
  }, []);

  return (
    <React.Fragment>
      <section className={style.map__top}>
        <div className={style.map__top__nav}>
          <ul className={style.map__top__nav__list_1} ref={navRef}>
            <div className={style.background} style={backgroundStyle} />
            {["All", "Place", "Events"].map((label, index) => (
              <li key={index}>
                <button
                  className={index === activeIndex ? style.current : ""}
                  onClick={() => setActiveIndex(index)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <ul className={style.map__top__nav__list_2}>
            <li>
              <input type="radio" id="all" name="filter" />
              <label htmlFor="all" name="filter">
                All
              </label>
            </li>

            <li>
              <input type="radio" id="entertainment" name="filter" />
              <label htmlFor="entertainment" name="filter">
                Entertainment
              </label>
            </li>

            <li>
              <input type="radio" id="business" name="filter" />
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
      </section>

      <section className={style.map__main}>
        <p>Location: Dubai. Area: JLT</p>

        <div className={style.map__main__map}>
          {/* Main items */}
          <div className={style.map__hotels}>
            <div className={style.map__main__hotel}>
              <Link to="/" className={style.map__main__hotel__content}>
                <img src={hotelImg1} alt="hotel img 1" />

                <ul>
                  <li>
                    <Time />
                    <p>Virgins on the beach</p>
                  </li>

                  <li>
                    <Walk />
                    <p>160 visits</p>
                  </li>

                  <li>
                    <ProfilePlus />
                    <p>9160 invites</p>
                  </li>

                  <li>
                    <Star style={{ color: "#ff9f43" }} />
                    <p className={style.colored}>
                      4 <span>(1,046)</span>
                    </p>
                  </li>

                  <li>
                    <CheckCircle />
                    <p>
                      1,234 <span>(booked)</span>
                    </p>
                  </li>
                </ul>
              </Link>
              <Location />
            </div>

            <div className={style.map__main__hotel}>
              <Link to="/" className={style.map__main__hotel__content}>
                <img src={hotelImg2} alt="hotel img 2" />

                <ul>
                  <li>
                    <Time />
                    <p>Virgins on the beach</p>
                  </li>

                  <li>
                    <Walk />
                    <p>160 visits</p>
                  </li>

                  <li>
                    <Walk />
                    <p>9160 invites</p>
                  </li>

                  <li>
                    <Star style={{ color: "#ff9f43" }} />
                    <p className={style.colored}>
                      4 <span>(1,046)</span>
                    </p>
                  </li>

                  <li>
                    <CheckCircle />
                    <p>
                      1,234 <span>(booked)</span>
                    </p>
                  </li>
                </ul>
              </Link>
              <Location />
            </div>
          </div>

          {/* Other (small) */}
          <div className={style.map__main__smalls}>
            {[
              {
                visited: 2649,
                stars: 4,
                reviews: 1046,
              },

              {
                visited: 350,
                stars: 4,
                reviews: 1046,
              },

              {
                visited: 2649,
                stars: 4,
                reviews: 1046,
              },

              {
                visited: 350,
                stars: 2,
                reviews: 1046,
              },

              {
                visited: 1234,
                stars: 5,
                reviews: 1046,
              },

              {
                visited: 3542,
                stars: 4,
                reviews: 1046,
              },
            ].map(({ visited, stars, reviews }) => (
              <Link className={style.map__small}>
                <ul>
                  <li>
                    <Landmark />
                    <p>{new Intl.NumberFormat().format(visited)}</p>
                  </li>

                  <li>
                    <Star
                      style={
                        stars <= 4 && stars > 2
                          ? { color: "#ff9f43" }
                          : stars <= 2
                          ? { color: "#ff453a" }
                          : { color: "#28c76f" }
                      }
                    />
                    <div>
                      <p
                        style={
                          stars <= 4 && stars > 2
                            ? { color: "#ff9f43" }
                            : stars <= 2
                            ? { color: "#ff453a" }
                            : { color: "#28c76f" }
                        }
                      >
                        {stars}
                      </p>{" "}
                      <p>({new Intl.NumberFormat("en").format(reviews)})</p>
                    </div>
                  </li>
                </ul>
              </Link>
            ))}
          </div>

          <button className={style.map__main__menu}>
            <img src={dots} alt="dots" />
          </button>

          <div className={style.map__main__legend}>
            <div className={style.map__main__legend__top}>
              <button
                className={style.map__main__legend__selector}
                onClick={() => setShowLegend(!showLegend)}
              >
                Legend{" "}
                <ChevronDown
                  style={
                    showLegend
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0deg)" }
                  }
                />
              </button>
              <button className={style.map__main__maximize}>
                <Maximize />
              </button>
            </div>

            {showLegend && (
              <div className={style.map__main__legend__content}>
                <h2>Legend</h2>

                <ul>
                  <li>
                    <Landmark />
                    <p>Place</p>
                  </li>

                  <li>
                    <Time />
                    <p>Events</p>
                  </li>

                  <li>
                    <p>1,001-10,000 people/day</p>
                  </li>

                  <li>
                    <p>51-1,000 people/day</p>
                  </li>

                  <li>
                    <p>0-50 people/day</p>
                  </li>

                  <li>
                    <Location />
                    <p>attendance record over 1000 people per day</p>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <img src={map} alt="map" />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Map;
