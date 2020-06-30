import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';

import './Body.css';

function Body() {
  const [weatherItems, setWeatherItems] = useState([]);

  async function loadData() {
    const url =
      'http://api.openweathermap.org/data/2.5/forecast?q=london&appid=ac9d46375bac97fb9ce96c7ffdb4851d';
    const response = await fetch(url);
    const data = await response.json(response);
    const arraryOfWeatherValues = data.list
      .slice(0, 5)
    setWeatherItems(arraryOfWeatherValues);
    console.log(arraryOfWeatherValues)
  }

  useEffect(() => {
    loadData();
  }, []);

  var weekday = new Array(7);
  weekday[0] = 'Sunday';
  weekday[1] = 'Monday';
  weekday[2] = 'Tuesday';
  weekday[3] = 'Wednesday';
  weekday[4] = 'Thursday';
  weekday[5] = 'Friday';
  weekday[6] = 'Saturday';

  return (
    <div className="body__container">
        <div className="body__inner__container"> 
      {weatherItems.map(f => (
        <div className="single__day__info" key={f.dt}>
             <p className="day">{weekday[new Date(f.dt_txt).getDay()].slice(0, 3)}</p>
             <p className="temp">{Math.round(f.main.temp - 273.15)}℃</p>
                <div className="icon__desc">
                    <img className="icon" src={`http://openweathermap.org/img/wn/${f.weather[0].icon}.png`} alt="" />
                    <p className="weather__desc">{f.weather[0].description}</p>
                </div>
            </div>
      ))}
      </div>
    </div>
  );
}

export default withRouter(Body);
