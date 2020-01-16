import React from 'react';

import DonutChart from './DonutChart';

const values = Array.from(
	{length: 5},
	() => ({value: parseInt(Math.random() * 100)})
);

export default class DonutView extends React.Component {
	render () {
		return (
			<DonutChart values={values} />
		);
	}
}
