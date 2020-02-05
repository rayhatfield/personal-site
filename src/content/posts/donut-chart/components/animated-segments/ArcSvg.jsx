import React from 'react';
import PropTypes from 'prop-types';

import {arcLength, coords} from '../../utils';

import styles from './ArcSvg.module.css';

export default function ArcSvg ({radius, angleDeg, startAngle, endAngle}) {
	const [startX, startY] = coords(startAngle, radius);
	const [endX, endY] = coords(endAngle, radius);
	
	const length = arcLength(radius, endAngle - startAngle);
	const style = {
		strokeDasharray: `${length} ${length}`,
		strokeDashoffset: length,
	};

	const largeArc = angleDeg > 180 ? 1 : 0;
	const sweep = 1; // clockwise

	const commands = [
		`M ${startX} ${startY}`,

		// (rx ry angle large-arc-flag sweep-flag x y)+
		`A ${radius} ${radius} ${angleDeg} ${largeArc} ${sweep} ${endX} ${endY}`
	];

	return (
		<g className={styles.arcGroup} style={style}>
			<path fill="none" d={commands.join(' ')} />
			{/* <circle r="2" cx={endX} cy={endY} /> */}
		</g>
	);
}
