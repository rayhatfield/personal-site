import React from 'react';
import PropTypes from 'prop-types';

import styles from './byline.module.css'

export default function Byline ({author, date}) {
	return (
		<div className={styles.byline}>
			{date && <time>{date}</time>}
			{author && <address className={styles.author}><span rel="author">{author}</span></address>}
		</div>
	);
}

Byline.propTypes = {
	author: PropTypes.string,
	date: PropTypes.string,
};
