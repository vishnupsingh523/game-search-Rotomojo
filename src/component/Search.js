import {useState} from "react";
import styled from "styled-components";
import ResultsContainer from "./ResultsContainer";
import SearchBox from "./SearchBox";

const Body = styled.div`
	background-color: #0f1228;
	overflow-x: hidden;
	color: #e7e9f0;
	font-family: "QuickSand", sans-serif;
`;
const HeadContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 60px;
`;
const HeadText = styled.h1`
	font-family: "QuickSand", cursive;
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
			<HeadContainer>
				<HeadText>Search It!</HeadText>
				<SearchBox handleInputChange={handleInputChange} />
				<ResultsContainer inputText={inputText} />
			</HeadContainer>
		</Body>
	);
};

export default Search;
