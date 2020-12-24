import React, { useState } from 'react';
import './EightBall.css';

const answers = [
	{ msg: 'It is certain.', color: 'green' },
	{ msg: 'It is decidedly so.', color: 'green' },
	{ msg: 'Without a doubt.', color: 'green' },
	{ msg: 'Yes - definitely.', color: 'green' },
	{ msg: 'You may rely on it.', color: 'green' },
	{ msg: 'As I see it, yes.', color: 'green' },
	{ msg: 'Most likely.', color: 'green' },
	{ msg: 'Outlook good.', color: 'green' },
	{ msg: 'Yes.', color: 'green' },
	{ msg: 'Signs point to yes.', color: 'goldenrod' },
	{ msg: 'Reply hazy, try again.', color: 'goldenrod' },
	{ msg: 'Ask again later.', color: 'goldenrod' },
	{ msg: 'Better not tell you now.', color: 'goldenrod' },
	{ msg: 'Cannot predict now.', color: 'goldenrod' },
	{ msg: 'Concentrate and ask again.', color: 'goldenrod' },
	{ msg: "Don't count on it.", color: 'red' },
	{ msg: 'My reply is no.', color: 'red' },
	{ msg: 'My sources say no.', color: 'red' },
	{ msg: 'Outlook not so good.', color: 'red' },
	{ msg: 'Very doubtful.', color: 'red' },
];

//pick a random answer from the array
const randAnswer = (answers) => {
	//get a random idx from array
	let choice = Math.floor(Math.random() * answers.length);
	console.log(answers[choice]);

	return answers[choice];
};
/* todo: display counts of the number of times the eight ball shows up as each of the three different colors. */

const EightBall = ({ msg, color }) => {
	const initState = {
		msg   : 'Think of a Question',
		color : 'black',
	};
	const [
		answer,
		setAnswer,
	] = useState(initState);

	return (
		<div>
			<p className="eightball" style={{ backgroundColor: answer.color }}>
				{answer.msg}
			</p>
			<button onClick={() => setAnswer(randAnswer(answers))}>Click</button>
			<button onClick={() => setAnswer(initState)}>Reset</button>
		</div>
	);
};

export default EightBall;
