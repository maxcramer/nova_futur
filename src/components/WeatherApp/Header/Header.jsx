import React, { useState, useEffect } from 'react';

import './Header.css';

function getTime() {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`;
}

function AppHeader() {
  const [currentTemp, setCurrentTemp] = useState([]);
  const [currentTime, setCurrentTime] = useState();

  async function loadData() {
    setCurrentTime(getTime());
    const url =
      'https://api.openweathermap.org/data/2.5/weather?q=london&appid=ac9d46375bac97fb9ce96c7ffdb4851d';
    const response = await fetch(url);
    const data = await response.json();
    console.log('data: ', data);
    const temp = Math.round(data.main.temp - 273.15);
    setCurrentTemp(temp);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="header__container">
      <div className="header__top__half">
        <h2>London</h2>
        <div className="clock__container">
          <div className="yellow__ball"></div>
          <div className="yellow__ball"></div>
          <div className="yellow__ball__highlight"></div>
          <p className="time">{currentTime}GMT</p>
          <div className="yellow__ball"></div>
          <div className="yellow__ball"></div>
          <div className="yellow__ball__highlight"></div>
        </div>
        <h2>{currentTemp}°C</h2>
      </div>
      <div className="timer__container">
        <p className="timer__title">Reloading in 10 seconds</p>
        <div className="timer__bar__container">
          <div className="yellow__timer"></div>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
