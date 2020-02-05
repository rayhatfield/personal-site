import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import {rhythm, scale} from '../../../utils/typography';

import Byline from './byline';
import styles from './header.module.css';

export default function Header ({frontmatter, classes}) {
	const featuredImgFluid = frontmatter?.featuredImage?.childImageSharp.fluid;
	const title = frontmatter?.title;

	console.log(rhythm(1), scale());

	return (
		<header className={styles.postHeader}>
			{featuredImgFluid && (
				<Img className={styles.featuredImage} fluid={featuredImgFluid} style={{maxHeight: rhythm(4), marginBottom: rhythm(1)}} />
			)}
			<h1>{frontmatter.title}</h1>
			<Byline {...(frontmatter || {})} />
		</header>
	);
}
