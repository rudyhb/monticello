import React from 'react';
import utils from './utils';

function Restaurant({ name, menu_link, embedded_pdf }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={`/${utils.name_to_lower(name)}.jpg`} alt={name} />
      {menu_link && (
        <iframe
          src={menu_link}
          title={`Menu for ${name}`}
          width="100%"
          height="600px"
          style={{ border: 'none' }}
        />
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
