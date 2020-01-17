import React from 'react';
import {Helmet} from 'react-helmet';

import {useSiteMetadata} from '../hooks';

export default ({children}) => {
	const {title, description, social} = useSiteMetadata();
	return (
		<div>
			<Helmet>
				<title>{title}</title>
				
				{/* Twitter Card tags */}
				{/* <meta name="twitter:card" content="summary_large_image" /> */}
				<meta name="twitter:creator" content={social.twitter} />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				{/* <meta name="twitter:image" content={image} /> */}
			</Helmet>
			<main>
				{children}
			</main>
		</div>
	);
}
