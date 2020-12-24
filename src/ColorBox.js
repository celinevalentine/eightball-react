import React from 'react';
import './ColorBox.css';
import colors from './colors';

const randColor = () => {
	const randIdx = Math.floor(Math.random() * colors.length);
	console.log(randIdx);
	console.log(colors[randIdx]);
	return colors[randIdx];
};

const ColorBox = () => {
	return <div>className="colorBox" style={{ backgroundColor: randColor }}</div>;
};

export { randColor, ColorBox };
