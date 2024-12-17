import React from "react";
import style from "./style.module.scss";
import {
  Cell,
  ResponsiveContainer,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { ReactComponent as USA } from "../../assets/icons/dashboard/nationality/usa.svg";
import { ReactComponent as BRA } from "../../assets/icons/dashboard/nationality/bra.svg";
import { ReactComponent as IND } from "../../assets/icons/dashboard/nationality/ind.svg";
import { ReactComponent as AUS } from "../../assets/icons/dashboard/nationality/aus.svg";
import { ReactComponent as FRA } from "../../assets/icons/dashboard/nationality/fra.svg";
import { ReactComponent as CHN } from "../../assets/icons/dashboard/nationality/chn.svg";

import { ReactComponent as BIBC } from "../../assets/icons/dashboard/nationality/bibc.svg";
import { ReactComponent as JEW } from "../../assets/icons/dashboard/nationality/jew.svg";
import { ReactComponent as BUDD } from "../../assets/icons/dashboard/nationality/budd.svg";
import { ReactComponent as ATH } from "../../assets/icons/dashboard/nationality/ath.svg";
import { ReactComponent as ISLM } from "../../assets/icons/dashboard/nationality/islm.svg";
import { ReactComponent as HIND } from "../../assets/icons/dashboard/nationality/hind.svg";

const Nationality = () => {
  const countrys = [
    { name: "USA", value: 400, icon: <USA /> },
    { name: "BRA", value: 350, icon: <BRA /> },
    { name: "IND", value: 300, icon: <IND /> },
    { name: "AUS", value: 250, icon: <AUS /> },
    { name: "FRA", value: 200, icon: <FRA /> },
    { name: "CHN", value: 250, icon: <CHN /> },
  ];

  const religions = [
    { name: "BIBC", value: 400, icon: <BIBC /> },
    { name: "JEW", value: 350, icon: <JEW /> },
    { name: "BUDD", value: 300, icon: <BUDD /> },
    { name: "ATH", value: 250, icon: <ATH /> },
    { name: "ISLM", value: 200, icon: <ISLM /> },
    { name: "HIND", value: 250, icon: <HIND /> },
  ];

  return (
    <section className={style.nationality}>
      <div className={style.nationality__county}>
        <h3>Country coverage</h3>

        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={countrys}
            margin={{ top: 50, right: 20, left: 20, bottom: 55 }}
          >
            <CartesianGrid strokeDasharray="1 0" />

            <YAxis
              tick={{ fontSize: 14, fill: "#c4c4c4" }}
              axisLine={true}
              tickLine={true}
            />
            <Tooltip />
            <Bar dataKey="value" barSize={40} radius={[5, 5, 5, 5]}>
              {countrys.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#28DAC6" />
              ))}
            </Bar>
            {/* Добавляем LabelList с иконками и названиями */}
            <XAxis
              dataKey="name"
              tick={({ x, y, payload }) => {
                const country = countrys.find(
                  (item) => item.name === payload.value
                );
                return (
                  <g
                    transform={`translate(${x},${y + 10})`}
                    style={{ textAlign: "center" }}
                  >
                    <text x={0} y={0} textAnchor="middle" fontSize={12}>
                      {payload.value}
                    </text>
                    <foreignObject x={-20} y={10} width={40} height={40}>
                      <div style={{ width: "100%", height: "100%" }}>
                        {country.icon}
                      </div>
                    </foreignObject>
                  </g>
                );
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className={style.nationality__religions}>
        <h3>Religion</h3>

        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={religions}
            margin={{ top: 50, right: 20, left: 20, bottom: 55 }}
          >
            <CartesianGrid strokeDasharray="1 0" />

            <YAxis
              tick={{ fontSize: 14, fill: "#c4c4c4" }}
              axisLine={true}
              tickLine={true}
            />
            <Tooltip />
            <Bar dataKey="value" barSize={40} radius={[5, 5, 5, 5]}>
              {religions.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#FFD643" />
              ))}
            </Bar>
            {/* Добавляем LabelList с иконками и названиями */}
            <XAxis
              dataKey="name"
              tick={({ x, y, payload }) => {
                const country = religions.find(
                  (item) => item.name === payload.value
                );
                return (
                  <g
                    transform={`translate(${x},${y + 10})`}
                    style={{ textAlign: "center" }}
                  >
                    <text x={0} y={0} textAnchor="middle" fontSize={12}>
                      {payload.value}
                    </text>
                    <foreignObject x={-20} y={10} width={40} height={40}>
                      <div style={{ width: "100%", height: "100%" }}>
                        {country.icon}
                      </div>
                    </foreignObject>
                  </g>
                );
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Nationality;
