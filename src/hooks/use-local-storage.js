import {useState} from 'react';

export default function useStorage (key, initial) {
	const [state, setState] = useState(global.localStorage?.getItem(key) || initial);
	return [
		state,
		value => {
			global.localStorage.setItem(key, value);
			return setState(value);
		}
	];
}
