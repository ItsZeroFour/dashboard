import React from "react";
import style from "./style.module.scss";
import filter from "../../assets/icons/header/filter.svg";
import bell from "../../assets/icons/header/bell.svg";
import avatar from "../../assets/images/header/avatar.png";
import { Link } from "react-router-dom";

const Header = () => {
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
    </header>
  );
};

export default Header;
