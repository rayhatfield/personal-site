// const path = require('path');

// exports.default = async (graphql, actions) => {
// 	const {createPage} = actions;
// 	const result = await graphql(`
// 		query {
// 			allMarkdownRemark {
// 				edges {
// 					node {
// 						fields {
// 							slug
// 						}
// 					}
// 				}
// 			}
// 		}
// 	`);
// 	result.data.allMarkdownRemark.edges.forEach(({node}) => {
// 		createPage({
// 			path: node.fields.slug,
// 			component: path.resolve('./src/templates/blog-post.js'),
// 			context: {
// 				// data passed to context is available
// 				// in page queries as GraphQL variables
// 				slug: node.fields.slug
// 			}
// 		})
// 	})
// }
