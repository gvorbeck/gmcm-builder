import React from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';
import AdventureTease from './adventure-tease';

export const query = graphql`
  query ($id: String!) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
      }
      slug
      id
    }
  }
`;

const AdventurePageLayout = ({ data: { mdx } }) => (
  <Layout>
    <AdventureTease title={mdx.frontmatter.title} slug={mdx.slug} id={mdx.id} />
  </Layout>
);

export default AdventurePageLayout;
