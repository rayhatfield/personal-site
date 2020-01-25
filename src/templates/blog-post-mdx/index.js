import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import {Helmet} from 'react-helmet';

import styles from './blog-post.module.css';
import Header from './components/header';

export default function PageTemplate({data: {mdx}}) {
	const {frontmatter, body} = mdx;
	return (
		<div className={styles.root}>
			<Helmet>
				<title>{frontmatter.title}</title>
			</Helmet>
			<article>
				<Header frontmatter={frontmatter} />
				<MDXRenderer>{body}</MDXRenderer>
			</article>
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
				author
				date
				featuredImage {
					childImageSharp {
						fluid(maxWidth: 800) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`
