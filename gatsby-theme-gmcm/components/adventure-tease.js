import React from 'react';

const AdventureTease = ({ title, slug, id }) => (
  <div>
    <h1>{title}</h1>
    <h2>{slug}</h2>
    <h3>{id}</h3>
  </div>
);

export default AdventureTease;
