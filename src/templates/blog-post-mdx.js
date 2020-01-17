import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import styles from './blog-post.module.css';

export default function PageTemplate({data: {mdx}}) {
	return (
		<div className={styles.root}>
			<h1>{mdx.frontmatter.title}</h1>
			<MDXRenderer>{mdx.body}</MDXRenderer>
		</div>
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
