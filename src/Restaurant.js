import React from 'react';
import './Restaurant.css';
import utils from "./utils";

function Restaurant({ name, website_link, embedded_pdf }) {
  return (
    <div>
      {/*<h2>{name}</h2>*/}
      {website_link && (
        <div className="card-container">
          <img className="card-image" src={`/${utils.name_to_lower(name)}.jpg`} alt={`${name} Preview`} />
          <div className="card-content">
            {/*<div>Link Preview Text</div>*/}
            <a href={website_link} target="_blank" rel="noopener noreferrer">{website_link}</a>
          </div>
        </div>
      )}
      {embedded_pdf && (
        <embed
          src={embedded_pdf}
          type="application/pdf"
          width="100%"
          height="600px"
        />
      )}
    </div>
  );
}

export default Restaurant;
