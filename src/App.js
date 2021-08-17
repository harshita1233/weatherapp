import { Card, Switch } from "antd";
import React, { useState, useEffect } from "react";
import "./App.css";
import DisplayCharts from "./DisplayCharts";
import InputBox from "./InputBox";

function App() {
  const [weather, setWeather] = useState({});
  const [showNumeric, setShowNumeric] = useState(true);
  const [moreInfo, setMoreInfo] = useState(false);
  const [chartsDisplay, setChartsDisplay] = useState(false);

  useEffect(() => {
    onClickHandler(10001);
  }, []);

  const onClickHandler = (value) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${value},us&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        if (response.status === 404) {
          console.log("Not found");
        }
      })
      .then((data) => setWeather(data))
      .catch((err) => console.log(err));
  };
  const onSearch = (value) => {
    onClickHandler(value);
  };
  function onChange(checked) {
    setMoreInfo(checked);
    setShowNumeric(true);
    setChartsDisplay(checked && false);
  }
  const onChartsChange = (checked) => {
    setChartsDisplay(checked);
    setShowNumeric(!checked);
    setMoreInfo(checked && false);
  };
  return (
    <div className="App main">
      <h2>Please Search the weather using Zip Code in USA</h2>
      <InputBox onSearch={onSearch} placeholder="Search with Zip Code" />
      Show more conditions
      <Switch checked={moreInfo} onChange={onChange} />
      <br />
      Show 7 days data
      <Switch checked={chartsDisplay} onChange={onChartsChange} />
      {showNumeric && (
        <div className="card">
          <Card
            title="Weather Forecast"
            bordered={true}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.0)",
              border: 0,
            }}
            headStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              border: 0,
            }}
            bodyStyle={{
              background: "linear-gradient(to right, #fffbd5, #b20a2c)",

              border: 0,
            }}
          >
            <p>{`Current Location: ${weather?.name}`}</p>
            <p>{`Current Weather Description: ${
              weather && weather.weather && weather.weather[0].description
            }`}</p>
            <p>{`Current Temperature: ${weather?.main?.temp}*C`}</p>
            <p>{`Today High Temperature: ${weather?.main?.temp_max}*C`}</p>
            <p>{`Today Low Temperature: ${weather?.main?.temp_min}*C`}</p>
            {moreInfo ? (
              <>
                <p>{`Wind Speed: ${weather?.wind?.speed}`}</p>
                <p>{`Humidity: ${weather?.main?.humidity}`}</p>
                <p>{`Pressure: ${weather?.main?.pressure}`}</p>
                <p>{`Sunrise Time: ${new Date(
                  weather?.sys?.sunrise
                ).toLocaleTimeString("en-US")}`}</p>
                <p>{`Sunset Time: ${new Date(
                  weather?.sys?.sunset
                ).toLocaleTimeString("en-US")}`}</p>
              </>
            ) : null}
          </Card>
        </div>
      )}
      {chartsDisplay && <DisplayCharts />}
    </div>
  );
}

export default App;
