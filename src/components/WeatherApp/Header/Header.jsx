import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
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


    return (
        <div>
        <h2>header</h2>
            {
                headerItems.map(h => (
                    <p>{h.coord.name}</p>
                ))
            }
        </div>
    )
}

export default withRouter(Header);