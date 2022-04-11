import React from 'react';
import { Link } from 'gatsby';

function AdventureList({ adventures }) {
  return (
    <>
      <h1>Adventures Listed</h1>
      <ul>
        {adventures && adventures.map((adventure) => (
          <li key={adventure.id}>
            <strong>
              <Link to={`/${adventure.slug}`}>{adventure.frontmatter.title}</Link>
            </strong>
            <p>{adventure.id}</p>
            <p>{adventure.slug}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default AdventureList;
