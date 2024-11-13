import React from 'react';

import styles from './home.module.css';

export default () => (
	<main className={styles.root}>
		<p>nothing to see here.</p>
		<p>i'm <a href="https://bsky.app/profile/ray.wtf">@ray.wtf</a> on bluesky.</p>
		<p>i’m <a rel="me" href="https://mastodon.online/@rayhatfield">on mastodon</a> too.</p>
	</main>
);
