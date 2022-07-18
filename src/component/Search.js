import { useState } from "react";
import styled from "styled-components";
import ResultsContainer from "./ResultsContainer";
import SearchBox from "./SearchBox";

const Body = styled.div`
	background: url("images/wallpaper.jpg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	/* background-color: #0f1228; */
	overflow-x: hidden;
	height: 83.5vh;
	color: #e7e9f0;

	backdrop-filter: blur(5px);
	font-family: "QuickSand", sans-serif;
`;
const Filter = styled.div`
	backdrop-filter: blur(5px);
	/* height:100%; */
	padding-top: 30px;
	padding-bottom: 60px;
`;
const HeadContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const HeadText = styled.h1`
	font-family: "Lato", cursive;
	font-size: 50px;
	margin: 5px 0px 5px 0px;
`;

// ON INPUT HANDLE CHANGE:

const Search = () => {
	const [inputText, setInputText] = useState("");

	const handleInputChange = (text) => {
		setInputText(text);
	};

	return (
		<Body>
			<Filter>
				<HeadContainer>
					<HeadText>Search It!</HeadText>
					<SearchBox handleInputChange={handleInputChange} />
					<ResultsContainer inputText={inputText} />
				</HeadContainer>
			</Filter>
		</Body>
	);
};

export default Search;
