import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import {Helmet} from 'react-helmet';

import Byline from '../components/byline.jsx';

import styles from './blog-post.module.css';

export default function PageTemplate({data: {mdx}}) {
	const {frontmatter, body} = mdx;
	return (
		<div className={styles.root}>
			<Helmet>
				<title>{frontmatter.title}</title>
			</Helmet>
			<article>
				<header>
					<h1>{frontmatter.title}</h1>
					<Byline {...frontmatter} />
				</header>
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
			}
		}
	}
`
