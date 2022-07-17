import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display:flex;
	justify-content: center;
	margin:10px;
`
const Input = styled.input`
	padding: 8px 15px;
	font-size: 15px;
	width: 250px;
	border-width: 0;
	background: #a592f2;
	color: #e7e9f0;
	font-family:'QuickSand', sans-serif;
	border-radius: 50px;
	box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
	text-align:center;
	::placeholder{
		color: #e7e9f0;
	}
	:focus{
		outline: none;
	}
`


const SearchBox = ({handleInputChange}) => {
  return (
	<Container>
		<Input onChange={(event)=> handleInputChange(event.target.value)} placeholder='Type keywords' />
	</Container>
  )
}

export default SearchBox
