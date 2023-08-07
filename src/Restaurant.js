import React from 'react';
import './Restaurant.css';
import utils from "./utils";
import {Link} from "react-router-dom";

function Restaurant({ name, website_link, embedded_pdf }) {
  return (
    <div>
      <div className="nav-back">
        <Link to="/">
          <img src="/background.jpg" alt="Monticello"/>
          <div className="arrow"></div>
        </Link>
      </div>
      {/*<h2>{name}</h2>*/}
      {website_link && (
        <div className="card-container">
          <img className="card-image" src={`/${utils.name_to_lower(name)}.jpg`} alt={`${name}`} />
          <div className="card-content">
            {/*<div>Link Preview Text</div>*/}
            <a href={website_link} target="_blank" rel="noopener noreferrer">{website_link}</a>
          </div>
        </div>
      )}
      {embedded_pdf && (
        <div className="embed-container">
          <embed
            src={embedded_pdf}
            type="application/pdf"
            width="100%"
            height="99%"
          />
        </div>
      )}
    </div>
  );
}

export default Restaurant;
