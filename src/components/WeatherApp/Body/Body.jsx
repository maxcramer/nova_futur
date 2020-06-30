import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';

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
    <div>
      <h2>Body Component</h2>
      {weatherItems.map(f => (
        <div key={f.dt}>
          <p>{weekday[new Date(f.dt_txt).getDay()]}</p>
          <p>{ Math.round(f.main.temp - 273.15) }℃</p>
        </div>
      ))}
    </div>
  );
}

export default withRouter(Body);
