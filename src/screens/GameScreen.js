import React from "react";
import styled from "styled-components";
import '../css/AllGameList.css';

const GameScreen = ({ game: { title, platform, score,genre, editors_choice } }) => {
	return (
		<div className="gameScreen">
			<h2>Title: {title}</h2>
			<h3>Platform: {platform}</h3>
			<h4>Score: {score}</h4>
			<h4>Genre: {genre}</h4>
			<h4>Editors Choice: {editors_choice}</h4>
		</div>
	);
};

export default GameScreen;
