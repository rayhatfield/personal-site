import React from 'react';
import PropTypes from 'prop-types';

import './DonutChart.module.css';

// chart diameter
const size = 100;

// chart radius
const radius = (size / 2) - 5;

// The center of the viewBox, center of the chart
const center = size / 2;


// convert between radians and degrees
const d2r = d => d * (Math.PI / 180);
const r2d = r => r / (Math.PI / 180);

/**
 * Computes an x/y coordinate for the given angle and radius
 * @param {number} deg - The angle in degrees
 * @param {number} r  - The radius
 * @returns {Array} - An x/y coordinate for the point at the given angle and radius
 */
const coords = (deg, r) => {
	const rad = d2r(deg);

	return [
		center - Math.cos(rad) * r,
		center - Math.sin(rad) * r
	];
};


export default class DonutChart extends React.Component {
	static propTypes = {
		values: PropTypes.arrayOf(
			PropTypes.shape({
				value: PropTypes.number.isRequired
			})
		)
	}

	computePercentages () {
		const {values} = this.props;
	
		// filter out zero and negative values
		const filtered = (values || []).filter(({value}) => value > 0);
	
		// compute the total of all remaining values
		const total = filtered.reduce((t, {value = 0}) => t + value, 0);
	
		// return the values with an additional percentage property
		return filtered.map(item => ({
			...item,
			percent: item.value / total
		}));
	}
	
	computeAngles (acc, item) {
		const angleDeg = item.percent * 360;

		// get the end angle of the previous item as our starting angle
		const {endAngle: startAngle = 0} = acc[acc.length - 1] || {};
		const endAngle = startAngle + angleDeg;

		acc.push({
			...item,
			angleDeg,
			startAngle,
			endAngle
		});

		return acc;
	}

	makePath = ({angleDeg, startAngle, endAngle}, i) => {
		// const startAngle = start + 90; // +90 so we start at 12 o'clock

		const [startX, startY] = coords(startAngle, radius);
		const [endX, endY] = coords(endAngle, radius);

		const largeArc = angleDeg > 180 ? 1 : 0;
		const sweep = 1; // clockwise

		const commands = [
			`M ${startX} ${startY}`,

			// (rx ry angle large-arc-flag sweep-flag x y)+
			`A ${radius} ${radius} ${angleDeg} ${largeArc} ${sweep} ${endX} ${endY}`
		];

		return (
			<g key={i}>
				<path key={i} fill="none" stroke="red" d={commands.join(' ')} />
				<circle key={`c${i}`} fill="red" r="2" cx={endX} cy={endY} />
			</g>
		);
	}

	render () {
		const values = this.computePercentages();
		return (
			<svg viewBox="0 0 100 100">
				{values
						.reduce(this.computeAngles, [])
						.map(this.makePath)
				}
			</svg>
		);
	}
}
