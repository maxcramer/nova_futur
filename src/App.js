import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WeatherApp from '../src/components/WeatherApp'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={WeatherApp} />
      </Router>
    );
  }
}

export default App;
