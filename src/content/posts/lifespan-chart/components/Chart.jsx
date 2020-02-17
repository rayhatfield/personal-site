import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Chart.module.css';

const daysPerYear = 365.25;
const weeksPerYear = daysPerYear / 7;
const msPerWeek = 1000 * 60 * 60 * 24 * 7; // ms, seconds, minutes, hours, days

export default function LifespanChart ({birth = new Date('1970-04-01'), expectancy = 80}) {
	const death = new Date(birth)
	death.setFullYear(birth.getFullYear() + parseInt(expectancy, 10));
	const now = new Date();
	const weeks = Math.floor(expectancy * 52);
	const weeksPast = Math.floor((now - birth) / msPerWeek);
	const attrs = week => week === weeksPast ? {'data-year': now.getFullYear()} : {};

	console.log(birth, expectancy);

	return (
		<ul className={styles.listRoot} data-birth={birth.getFullYear()} data-death={death.getFullYear()}>
			{Array.from({length: weeks}, (_, week) => <li key={week} {...attrs(week)} className={clsx({[styles.now]: week === weeksPast})} />)}
		</ul>
	);
}
