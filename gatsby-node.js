const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

// const createMarkdownPages = require('./create-pages-markdown').default;
const createMdxPages = require('./create-pages-mdx').default;

exports.onCreateNode = ({node, getNode, actions}) => {
	const {createNodeField} = actions;
	if (['MarkdownRemark', 'Mdx'].includes(node.internal.type)) {
		const slug = createFilePath({node, getNode, basePath: 'pages'});
		createNodeField({
			node,
			name: 'slug',
			value: slug
		});
	}
	// if (node.internal.type === 'Mdx') {
	// 	const slug = createFilePath({node, getNode, basePath: 'pages'});
	// 	createNodeField({
	// 		node,
	// 		name: 'slug',
	// 		value: slug
	// 	});
	// }
}

exports.createPages = async ({graphql, actions}) => {
	await Promise.all([
		// createMarkdownPages(graphql, actions),
		createMdxPages(graphql, actions)
	]);
}
