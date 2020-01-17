import React from 'react';

import 'prismjs/themes/prism-solarizedlight.css';
import './src/styles/global.css';

import Page from './src/components/page';

export const wrapPageElement = ({ element, props }) => {
	return <Page {...props}>{element}</Page>
}
