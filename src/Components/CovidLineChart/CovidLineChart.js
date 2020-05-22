import React, { useState, useEffect } from "react";
import { fetchData } from "../../api";
import LineChart from "../../core/LineChart";

const CovidLineChart = () => {
  const [covidData, setCovidData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCovidData(await fetchData());
    };

    fetchAPI();
  });
  const lineChart =
    covidData.length != 0 ? (
      <Line
        data={{
          labels: covidData.map(({ day }) => date),
          datasets: [
            {
              data: covidData.map(({ confirmed }) => confirmed),
              label: "Infected",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: covidData.map(({ death }) => death),
              label: "Death",
              borderColor: "red",
              backgroundColor: "rgba(255,0,0,0.5)",
              fill: true,
            },

            {
              data: covidData.map(({ recovered }) => recovered),
              label: "Recovered",
              borderColor: "green",
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  return <div>{lineChart}</div>;
};
export default CovidLineChart;
