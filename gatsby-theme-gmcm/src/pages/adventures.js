import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import AdventureList from '../components/adventure-list';

function AdventuresListingPage() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: {slug: {regex: "/adventures\\/\\w+\\/$/i"}}) {
        nodes {
          id
          frontmatter {
            title
          }
          slug
        }
      }
    }
  `);
  const adventures = data.allMdx.nodes;
  return (
    <Layout>
      <AdventureList adventures={adventures} />
    </Layout>
  );
}

export default AdventuresListingPage;
