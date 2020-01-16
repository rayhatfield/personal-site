import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from '../components/page';

export default function PageTemplate({data: {mdx}}) {
	return (
		<Layout>
			<h1>{mdx.frontmatter.title}</h1>
			<MDXRenderer>{mdx.body}</MDXRenderer>
		</Layout>
	)
}

export const query = graphql`
	query($id: String) {
		mdx(id: { eq: $id }) {
			id
			body
			frontmatter {
				title
			}
		}
	}
`
