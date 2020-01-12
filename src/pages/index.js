import React from 'react';
import {graphql} from 'gatsby';

import Page from '../components/page';

import Home from './home';

export default () => (
	<Page>
		<Home />
	</Page>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
		  }
		  fields {
			  slug
		  }
          excerpt
        }
      }
    }
  }
`
