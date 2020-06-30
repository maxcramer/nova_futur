import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';

import './Header.css';
// import { render } from '@testing-library/react';

function Header() {
    const [headerItems, setHeaderItems] = useState([]);
    
    async function loadData() {
        const url = 'api.openweathermap.org/data/2.5/weather?q=london&appid=ac9d46375bac97fb9ce96c7ffdb4851d';
        const response = await fetch(url);
        const data = await response.json(response);
        const headerData = data;
        setHeaderItems(headerData);
        console.log(data.coords);
        // console.log("this is the city data", data.name);
    }

 useEffect(() => {
   loadData();
 }, []);
const now = new Date();
const time = `${now.getHours()}:${now.getMinutes()}`;

    return (
        <div className="header__container">
            <h2>LONDON</h2>
            <p>{time}</p>
        </div>
    )
}

export default withRouter(Header);