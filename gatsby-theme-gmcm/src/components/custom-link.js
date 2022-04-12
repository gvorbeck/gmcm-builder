import React from 'react';
import {
  Link,
} from 'gatsby-theme-material-ui';

function MonsterLink({ children, m }) {
  return (
    <Link
      to="/search/?category=monsters"
      state={{
        query: m,
      }}
    >
      {children}
    </Link>
  );
}

function SpellLink({ children, spell }) {
  return (
    <Link
      to="/search/?category=spells"
      state={{
        query: spell,
      }}
    >
      {children}
    </Link>
  );
}

export { MonsterLink, SpellLink };
