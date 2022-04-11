import React from 'react';
import { Link } from 'gatsby';

const AdventureList = ({ adventures }) => (
  <>
    <h1>Adventures Listed</h1>
    <ul>
      {adventures && adventures.map(adventure => (
        <li key={adventure.id}>
          <strong>
            <Link to={adventure.slug}>{adventure.frontmatter.title}</Link> 
          </strong>
          <span>{adventure.id}</span>
        </li>
      ))}
    </ul>
  </>
);

export default AdventureList;
