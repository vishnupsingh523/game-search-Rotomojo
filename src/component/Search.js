import React from 'react'
import styled from 'styled-components';
import SearchBox from './SearchBox';

const Body = styled.div`
	background-color: #0f1228;
	overflow-x: hidden;
	color: #e7e9f0;
	font-family: 'QuickSand', sans-serif;
`
const HeadContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items:center;
	margin-top: 60px;
`
const HeadText = styled.h1`
	/* font-family:'QuickSand', cursive; */
	margin:5px 0px 5px 0px;
`
const Search = () => {
  return (
	  <Body>
		  <HeadContainer>
			  <HeadText>Search it</HeadText>
			  <SearchBox />
		  </HeadContainer>
	</Body>
  )
}

export default Search
