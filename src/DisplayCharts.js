import React, { useState, useEffect } from "react";
import SimpleInput from "./SimpleInput";
import { Button } from "antd";
import MqAreaChart from "./MqLineChart";

export default function DisplayCharts() {
  const [data, setData] = useState({});
  const [lat, setLan] = useState(38.7267);
  const [lon, setLon] = useState(-9.1403);

  useEffect(() => {
    getSevenDaysData();
  }, []);

  const getSevenDaysData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };
  let xcat =
    data?.daily &&
    data.daily.map((ele) =>
      new Date(ele.dt * 1000).toLocaleDateString("en", {
        weekday: "long",
      })
    );
  let breeze =
    data?.daily &&
    data.daily.map((ele) => ele.weather.map((val) => val.description).flat());
  let description = breeze && breeze.flat();
  let lowTemp = data?.daily && data.daily.map((ele) => ele.temp.min);
  let highTemp = data?.daily && data.daily.map((ele) => ele.temp.max);

  const onChangeLat = (e) => {
    setLan(e.target.value);
  };

  const onChangeLon = (e) => {
    setLon(e.target.value);
  };

  return (
    <div>
      Please enter Latitude:{" "}
      <SimpleInput
        placeholder="Please enter latitude"
        onChange={onChangeLat}
        defaultValue={38.7267}
      />
      Please enter Longitude:
      <SimpleInput
        placeholder="Please enter longitude"
        onChange={onChangeLon}
        defaultValue={-9.1403}
      />
      <Button type="dashed" onClick={getSevenDaysData}>
        Display
      </Button>
      <MqAreaChart
        config={{
          series: [
            {
              name: "High Temperature",
              data: highTemp,
              breeze: description,
              lineColor: "#64b2cd",
            },
            {
              name: "Low Temperature",
              data: lowTemp,
              breeze: description,
              lineColor: "#AAB9DF",
            },
          ],
          xAxis: { categories: xcat },
        }}
      />
    </div>
  );
}
