import React from 'react';
import PropTypes from 'prop-types';

import {coords} from '../../utils';

import Arc from './ArcSvg';

export default function Line ({radius, startDeg, endDeg}) {
	return (
		<svg viewBox="0 0 100 100">
			<Arc radius={45} angleDeg={12} startAngle={startDeg} endAngle={endDeg} />
		</svg>
	);
}
