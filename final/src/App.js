import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Select your race',
			answerOptions: [
				{ answerText: 'Human', isCorrect: false },
				{ answerText: 'Elf', isCorrect: false },
				{ answerText: 'Dwarf', isCorrect: true },
				{ answerText: 'Goblin', isCorrect: false },
			],
		},
		{
			questionText: 'Select your class',
			answerOptions: [
				{ answerText: 'Wizzard', isCorrect: false },
				{ answerText: 'Warrior', isCorrect: true },
				{ answerText: 'Archer', isCorrect: false },
				{ answerText: 'Brawler', isCorrect: false },
				{ answerText: 'Rogue', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Progress {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
