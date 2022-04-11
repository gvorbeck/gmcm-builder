import React from 'react';
import { Link } from 'gatsby';

const HomePage = () => (
  <>
    <h1>GMCM Home Page!</h1>
    <ul>
      <li><Link to="/adventures">Adventures</Link></li>
      <li><Link to="/search">Search</Link></li>
      <li><Link to="/reference">Reference</Link></li>
    </ul>
  </>
);

export default HomePage;
