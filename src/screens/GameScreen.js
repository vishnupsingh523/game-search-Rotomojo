import React from "react";

const GameScreen = ({ game: { title, platform, score,genre, editors_choice } }) => {
	return (
		<div className="game-screen">
			<h2>Title: {title}</h2>
			<h3>Platform: {platform}</h3>
			<h4>Score: {score}</h4>
			<h4>Genre: {genre}</h4>
			<h4>Editors Choice: {editors_choice}</h4>
		</div>
	);
};

export default GameScreen;
