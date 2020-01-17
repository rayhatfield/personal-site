import React from 'react';
// import {graphql} from 'gatsby';

import Home from './home';

export default () => (
	<Home />
);

// export const query = graphql`
//   query {
//     allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
// 		  }
// 		  fields {
// 			  slug
// 		  }
//           excerpt
//         }
//       }
//     }
//   }
// `
// export const query = graphql`
//   query {
//     allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
// 		  }
// 		  fields {
// 			  slug
// 		  }
//           excerpt
//         }
//       }
//     }
//   }
// `
