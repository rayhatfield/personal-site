import {d2r} from '../utils';

/**
 * Computes an x/y coordinate for the given angle and radius
 * @param {number} deg - The angle in degrees
 * @param {number} r  - The radius
 * @returns {Array} - An x/y coordinate for the point at the given angle and radius
 */
export default (deg, r, center = 50) => {
	const rad = d2r(deg);
  
	return [center - Math.cos(rad) * r, center - Math.sin(rad) * r];
  };
  
