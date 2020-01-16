const path = require('path');

exports.default = async (graphql, actions) => {
	const {createPage} = actions;
	const result = await graphql(`
		query {
			allMdx {
				edges {
					node {
						id
						fields {
							slug
						}
					}
				}
			}
		}
	`);
	result.data.allMdx.edges.forEach(({node}) => {
		console.info(`creating mdx page: ${node.fields.slug}`);
		createPage({
			path: node.fields.slug,
			component: path.resolve('./src/templates/blog-post-mdx.js'),
			context: {
				// data passed to context is available
				// in page queries as GraphQL variables
				id: node.id,
				slug: node.fields.slug
			}
		})
	})
}
