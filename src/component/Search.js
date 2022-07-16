import React from 'react'
import styled from 'styled-components';

const Body = styled.div`
	background-color: #0f1228;
	overflow-x: hidden;
	color: #e7e9f0;
	font-family: 'QuickSand', sans-serif;
`
const HeadContainer = styled.div`

`
const HeadText = styled.h1`

`
const Search = () => {
  return (
	  <Body>
		  <HeadContainer>
			  <HeadText>Search it</HeadText>
		  </HeadContainer>
	</Body>
  )
}

export default Search
