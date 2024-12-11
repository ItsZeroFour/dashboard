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
import { ReactComponent as ChevronRight } from "../../assets/icons/psychotypes/chevron-right.svg";

const Psychotypes = () => {
  return (
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
                name: "Active tiger",
                totalPeople: 1350,
                overPeriod: 350,
              },

              {
                icon: <FirstImg3 />,
                name: "Active tiger",
                totalPeople: 1350,
                overPeriod: 350,
              },

              {
                icon: <FirstImg4 />,
                name: "Active tiger",
                totalPeople: 1350,
                overPeriod: 350,
              },

              {
                icon: <FirstImg5 />,
                name: "Active tiger",
                totalPeople: 1350,
                overPeriod: 350,
              },

              {
                icon: <FirstImg6 />,
                name: "Active tiger",
                totalPeople: 1350,
                overPeriod: 350,
              },

              {
                icon: <FirstImg7 />,
                name: "Active tiger",
                totalPeople: 1350,
                overPeriod: -350,
              },

              {
                icon: <FirstImg8 />,
                name: "Active tiger",
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
                  <button>
                    <ChevronRight />
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Psychotypes;
