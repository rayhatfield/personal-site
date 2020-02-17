import React from 'react';
import PropTypes from 'prop-types';

import {useLocalStorage} from '../../../../hooks';

import Chart from './Chart';
import styles from './index.module.css';

export default function Lifespan (props) {
	const [birth, setBirth] = useLocalStorage('lifespan:birth', '1970-04-01');
	const [expectancy, setExpectancy] = useLocalStorage('lifespan:expectancy', 80);

	return (
		<div>
			<div className={styles.controls}>
				<label>
					<span className={styles.label}>Date of birth</span>
					<input type="date" value={birth} onChange={({target: {value}}) => setBirth(value)} />
				</label>
				<label>
					<span className={styles.label}>Life expectancy</span>
					{/* <input type="range" min="0" max="120" value={expectancy} onChange={({target: {value}}) => setExpectancy(value)} /> */}
					<input type="number" min="0" max="120" value={expectancy} onChange={({target: {value}}) => setExpectancy(value)} />
				</label>
			</div>
			{birth && (
				<Chart birth={new Date(birth)} expectancy={expectancy} />
			)}
		</div>
	);
}
