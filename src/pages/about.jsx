import React from 'react';
import PropTypes from 'prop-types';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';

export default function About (props) {
	const data = useStaticQuery(graphql`
		query {
			file(relativePath: {eq: "pages/assets/ray.jpg"}) {
				childImageSharp {
					fixed(
						width: 200,
						height: 200,
						grayscale: true
					) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`);

	return (
		<div>
			<Img fixed={data.file.childImageSharp.fixed} />
			about.
		</div>
	);
}
