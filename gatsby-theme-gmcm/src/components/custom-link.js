import React from 'react';
import {
  Link,
} from 'gatsby-theme-material-ui';

function MonsterLink({ children, monster }) {
  return (
    <Link
      to="/search/?category=monsters"
      state={{
        query: monster,
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
