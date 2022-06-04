// Imports
import React from "react";
import styled from "styled-components";

// Component
const Button = ({ type='button', onClick, children }) => {

	// Return
	return(
		<Wrapper type={ type } onClick={ onClick }>
			{ children }
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.button`
	font: inherit;
	border: 1px solid #4f005f;
	background: #4f005f;
	color: white;
	padding: 0.25rem 1rem;
	cursor: pointer;
	&:hover, &:active{
		background: #741188;
		border-color: #741188;
	}
	&:focus{
		outline: none;
	}
`;

// Export
export default Button;