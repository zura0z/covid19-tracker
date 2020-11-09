import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import { casesTypeColors } from "./util";

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: false,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: 0,
        },
        ticks: {
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

const buildChartData = (data, casesType) => {
  let chartData = [];
  let lastDataPoint;
  if (data !== undefined) {
    for (let date in data.cases) {
      if (lastDataPoint) {
        let newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    }
  }
  return chartData;
};

function LineGraph({ casesType, country, days }) {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      if (country === "worldwide") country = "all";
      let url = `https://disease.sh/v3/covid-19/historical/${country}?lastdays=${days}`;
      await fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let chartData = null;
          country === "all"
            ? (chartData = buildChartData(data, casesType))
            : (chartData = buildChartData(data["timeline"], casesType));
          setData(chartData);
          buildChartData(chartData);
        });
    };
    fetchData();
  }, [casesType, country, days]);

  return (
    <div>
      {data && data.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: casesTypeColors[casesType].rgba,
                borderColor: casesTypeColors[casesType].hex,
                data: data,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
}

export default LineGraph;
