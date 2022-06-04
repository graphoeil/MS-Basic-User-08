// Imports
import React from "react";
import styled from "styled-components";
import Button from "./Button";

// Component
const ErrorModal = ({ title, message, onCloseModal }) => {

	// Return
	return(
		<React.Fragment>
			<OverlayWrapper onClick={ onCloseModal }/>
			<ModalWrapper className="shadowBox">
				<header>
					<h2>{ title }</h2>
				</header>
				<div>
					<p>{ message }</p>
				</div>
				<footer>
					<Button onClick={ onCloseModal }>
						Okay
					</Button>
				</footer>
			</ModalWrapper>
		</React.Fragment>
	);

};

// Styled
const ModalWrapper = styled.div`
	position: fixed;
	top: 30vh;
	left: 10%;
	width: 80%;
	z-index: 100;
	overflow: hidden;
	header{
		background: #4f005f;
		padding: 1rem;
		h2{
			margin: 0;
			color: white;
		}
	}
	div{
		padding: 1rem;
	}
	footer{
		padding: 1rem;
		display: flex;
		justify-content: flex-end;
	}
	@media only screen and (min-width:768px){
		left: calc(50% - 20rem);
		width: 40rem;
	}
`;
const OverlayWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 10;
	background: rgba(0, 0, 0, 0.75);
	cursor: pointer;
`;

// Export
export default ErrorModal;