import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css';
import logo from './logo.png';
import utils from './utils';
import Restaurant from './Restaurant';

function App() {
  const restaurants = [
    {
      name: "El Lomo y la Aguja",
      menu_link: null,
      embedded_pdf: "/el_lomo_y_la_aguja.pdf",
    },
    {
      name: "Tony Roma's",
      menu_link: "https://tonyromas.com/on-our-menu/",
      embedded_pdf: null,
    },
    {
      name: "Hacienda Real",
      menu_link: null,
      embedded_pdf: "/hacienda_real.pdf",
    },
    {
      name: "Koi Sushi",
      menu_link: "http://www.koi.com.sv/menus.php",
      embedded_pdf: null,
    },
  ]
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home restaurants={restaurants} />} />
            {restaurants.map(({name, menu_link, embedded_pdf}, index) => (
              console.log(utils.name_to_lower(name)) ||
              <Route key={index} path={`/${utils.name_to_lower(name)}`}
                     element={<Restaurant name={name} menu_link={menu_link} embedded_pdf={embedded_pdf}/>}/>
            ))}
          </Routes>
        </header>
      </div>
    </Router>
  );
}

const Home = ({restaurants}) => <>
  <img src={logo} className="App-logo" alt="logo"/>
  <h1>Monticello</h1>
  <nav>
    {restaurants.map(({name}, index) => (<Link key={index} to={utils.name_to_lower(name)}>{name}</Link>))}
  </nav>
</>;

export default App;
