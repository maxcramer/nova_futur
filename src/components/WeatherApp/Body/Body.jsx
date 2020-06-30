import React from 'react';

class Body extends React.Component {
  state = {
    loading: true
  };

  
  async componentDidMount() {
    const url = 'http://api.openweathermap.org/data/2.5/forecast?q=london&appid=ac9d46375bac97fb9ce96c7ffdb4851d';
    const response = await fetch(url);
    const data = response.json(response);
    console.log("this is the data", data);
  }

  render() {
    return (
      <div>
        <h2>body</h2>
      </div>
    );
  }
}

export default Body;
