import React from "react";
import style from "./style.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Back } from "../../assets/icons/nav/arrow-left.svg";
import { ReactComponent as Map } from "../../assets/icons/nav/map.svg";
import { ReactComponent as MoodHappy } from "../../assets/icons/nav/mood-happy.svg";
import { ReactComponent as Dashboard } from "../../assets/icons/nav/chart-pie.svg";
import { ReactComponent as Ad } from "../../assets/icons/nav/ad.svg";
import { ReactComponent as Trash } from "../../assets/icons/nav/trash.svg";
import { ReactComponent as Archive } from "../../assets/icons/nav/archive.svg";
import { ReactComponent as Settings } from "../../assets/icons/nav/settings.svg";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const navList1 = [
    {
      link: "/map",
      icon: <Map />,
      name: "map",
    },

    {
      link: "/psychotypes",
      icon: <MoodHappy />,
      name: "psychotypes",
    },

    {
      link: "/dashboard",
      icon: <Dashboard />,
      name: "dashboard",
    },

    {
      link: "/ad",
      icon: <Ad />,
      name: "ad",
    },
  ];

  const navList2 = [
    {
      link: "/trash",
      icon: <Trash />,
      name: "trash",
    },

    {
      link: "/archive",
      icon: <Archive />,
      name: "archive",
    },

    {
      link: "/settings",
      icon: <Settings />,
      name: "settings",
    },
  ];

  return (
    <aside className={style.nav}>
      <nav>
        <ul>
          <li>
            <Link to="/map">
              <Logo />
            </Link>
          </li>

          <li>
            <button onClick={() => navigate(-1)}>
              <Back />
            </button>
          </li>

          {navList1.map(({ link, icon, name }) => (
            <li key={name}>
              <Link to={link}>{icon}</Link>
            </li>
          ))}
        </ul>

        <ul>
          {navList2.map(({ link, icon, name }) => (
            <li key={name}>
              <Link to={link}>{icon}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Nav;
